import { UsersDataService } from '../../core/services/UsersData.service';
import { UsersMembers } from '../../datas-Back-end/models/Users-members';
import { StudentRegularity } from './StudentRegularityService.service';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanningService {
  date: Date = new Date();
  citySelected = signal<string>('Sélectionner');
  scheduleSelected: string = 'Sélectionner';
  usersCity = signal<UsersMembers[]>([]);
  users = signal<any[]>([]);

  constructor(
    public studentRegularity: StudentRegularity,
    public usersDataService: UsersDataService
  ) {}
  updateUsersCity(newCity: string) {
    const data = this.usersDataService.UsersData();

    const newUsersFilters = data.flatMap((user) =>
      user.members.filter((member) =>
        member.training.citySchedules.find((item) => item.city === newCity)
      )
    );

    this.usersCity.set(newUsersFilters);
  }

  async updateUsersSchedule(newSchedule: string) {
    const newUsersFilters: any[] = this.usersCity()
      .filter((member) =>
        member.training.citySchedules.find((item) => item.schedule === newSchedule)
      )
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
      (session) => this.startOfDay(session) === this.startOfDay(`${this.date}`)
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
