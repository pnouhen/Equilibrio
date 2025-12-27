import { PlanningService } from '../../services/PlanningService.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { SelectedCity } from '../../services/SelectedCity.service';
import { SelectedSchedules } from '../../services/SelectedSchedules.service';
import { CITIES } from '../../../landing/pages/locations-times/datas/CitiesInfo.data';
import { InputSelectedComponent } from '../../../core/components/input-selected/input-selected.component';

@Component({
  selector: 'app-dashboard-planning-filters',
  imports: [InputSelectedComponent],
  templateUrl: './dashboard-planning-filters.component.html',
  styleUrl: './dashboard-planning-filters.component.scss',
})
export class DashboardPlanningFiltersComponent implements OnInit {
  @ViewChild('city') city!: ElementRef<HTMLDivElement>;
  @ViewChild('schedule') schedule!: ElementRef<HTMLDivElement>;

  cities!: string[];
  schedules!: string[];

  constructor(
    public userService: UserService,
    public planningService: PlanningService,
    public selectedCity: SelectedCity,
    public selectedSchedules: SelectedSchedules
  ) {}

  ngOnInit(): void {
    // Filter city
    this.cities = CITIES.map((city) => city.city).sort();
  }

  // Functions for city
  toggleSelectedCity() {
    this.selectedSchedules.closeSelected();

    this.selectedCity.toggleSelected();

    // Transition CSS
    if (this.selectedCity.isSelectedDisplay) {
      setTimeout(() => {
        this.city.nativeElement.style.display = 'block';
      }, 10);
    }
  }

  inputCityChange(newValue: string) {
    this.planningService.citySelected.set(newValue);
    this.planningService.updateUsersCity(newValue);
    this.planningService.users.set([]);
  }

  // Schedules
  handleScheduleFilter = (newCity: string): void => {
    // Returns the schedules related to the city in question
    const newSchedules = [
      ...new Set(
        CITIES.find((city) => city.city === newCity)?.TrainingCategory.flatMap((category) =>
          category.trainingSchedule.map(
            (schedule) => `${schedule.day} : ${schedule.startTime} - ${schedule.endTime}`
          )
        )
      ),
    ].sort((a, b) => a.localeCompare(b));

    this.schedules = newSchedules ? newSchedules : [];

    this.planningService.scheduleSelected.set('Selectionnez');
  };

  toggleSelectedSchedules() {
    if (this.schedules && this.schedules.length > 0 && !this.selectedCity.isSelectedDisplay) {
      this.selectedSchedules.toggleSelected();

      // Transition CSS
      if (this.selectedSchedules.isSelectedDisplay) {
        setTimeout(() => {
          this.schedule.nativeElement.style.display = 'block';
        }, 10);
      }
    }
  }

  inputScheduleChange(newValue: string) {
    this.planningService.scheduleSelected.set(newValue);
    this.planningService.updateUsersSchedule(newValue);
  }
}
