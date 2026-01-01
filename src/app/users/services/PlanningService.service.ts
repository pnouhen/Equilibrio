import { UsersDataService } from '../../core/services/UsersData.service';
import { StudentRegularity } from './StudentRegularityService.service';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  citySelected = signal<string>('Sélectionner');
  scheduleSelected = signal<string>('Sélectionner');
  usersCity = signal<any[]>([]);
  users = signal<any[]>([]);

  constructor(
    public studentRegularity: StudentRegularity,
    public usersDataService: UsersDataService
  ) {}

  updateUsersCity(newCity: string) {
    const data = this.usersDataService.usersData();

    const newUsersFilters = data.flatMap((user) =>
      user.members.filter((member) => member.training.cities.includes(newCity))
    );

    this.usersCity.set(newUsersFilters);
  }

  async updateUsersSchedule(newSchedule: string) {
    const newUsersFilters = this.usersCity()
      .filter((member) => member.training.schedules.includes(newSchedule))
      .sort((a, b) => a.memberName.localeCompare(b.memberName));

    // To calculate the regularity, the function will be placed in the server and activated every day.
    const updateUsers = await Promise.all(
      newUsersFilters.map(async (user) => ({
        ...user,
        numberTrainningSessions: await this.studentRegularity.calculStudentRegularity(
          user.training.trainingSessions
        ),
        present: this.findTodayTrainingSessionDate(user.training.trainingSessions),
      }))
    );

    this.users.set(updateUsers);
  }

  findTodayTrainingSessionDate(trainingSessions: string[]) {
    // Find today's date in training sessions
    return trainingSessions.some(
      (session) => this.startOfDay(session) === this.startOfDay(`${new Date()}`)
    );
  }

  startOfDay(d: string) {
    const dateISOLocal = this.formatISOToLocal(d);

    return `${new Date(
      dateISOLocal.getFullYear(),
      dateISOLocal.getMonth(),
      dateISOLocal.getDate()
    )}`;
  }

  formatISOToLocal(dateString: string): Date {
    return new Date(dateString);
  }
}
