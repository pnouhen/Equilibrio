import { inject, Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { PlanningService } from './PlanningService.service';

@Injectable({
  providedIn: 'root',
})

// The function will be placed in the server and activated every day.
export class StudentRegularity {
  private http = inject(HttpClient);
  private injector = inject(Injector);

  private cachedHolidays: any = null;

  private async getDatesHolidays() {
    if (this.cachedHolidays) return this.cachedHolidays;

    // Automatic update to retrieve school holidays
    const year = new Date().getFullYear();
    const start = `${year}-01-01`;
    const end = `${year}-12-31`;

    const url =
      `https://data.education.gouv.fr/api/explore/v2.1/catalog/datasets/fr-en-calendrier-scolaire/records` +
      `?limit=20` +
      `&refine=location:"Limoges"` +
      `&where=start_date >= "${start}" AND start_date <= "${end}"`;

    const data = await firstValueFrom(this.http.get<any>(url));
    this.cachedHolidays = data;
    return data;
  }

  // So that the dependency is immediately visible
  private get planningService(): PlanningService {
    return this.injector.get(PlanningService);
  }

  async calculStudentRegularity(trainingSessions: string[]) {
    const today = new Date();
    const datesHolidays = await this.getDatesHolidays();
    const pastDate = new Date(today);
    pastDate.setDate(today.getDate() - 70); // 70 = 7 * 10 weeks

    // Check if there have been any school holidays between the past date and today.
    const holidayPreview = datesHolidays.results.find(
      (holiday: any) =>
        this.planningService.formatISOToLocal(holiday.start_date) >= pastDate &&
        this.planningService.formatISOToLocal(holiday.end_date) <= today
    );

    // Add the number of vacation days to pasteDate
    let newPastDate = pastDate;
    if (holidayPreview) {
      const endDate = this.planningService.formatISOToLocal(holidayPreview.end_date);
      const startDate = this.planningService.formatISOToLocal(holidayPreview.start_date);
      const diffDays = Math.floor(
        (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7)
      ); // (1000 * 60 * 60 * 24 * 7) because diffDays is by default in milliseconds

      newPastDate.setDate(pastDate.getDate() - diffDays * 7);
    }

    // Return the regularity coefficient
    return (
      trainingSessions.filter((date) => this.planningService.formatISOToLocal(date) > newPastDate)
        .length / 10 || 0
    );
  }
}
