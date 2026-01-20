import { Injectable, signal } from '@angular/core';
import { StudentDashboardData } from '../../datas-Back-end/data/UserDashboard.data';
import { UsersDataModel } from '../../datas-Back-end/models/UserData.model';

@Injectable({
  providedIn: 'root',
})
export class UsersDashboardData {
  UsersDashboardData = signal<UsersDataModel[]>(this.generateUsersData());

  private generateUsersData(): UsersDataModel[] {
    const storedData = sessionStorage.getItem('usersDashboard');

    if (!storedData) {
      const defaultData: UsersDataModel[] = StudentDashboardData;

      sessionStorage.setItem('usersDashboard', JSON.stringify(defaultData));
      return defaultData;
    }

    return JSON.parse(storedData) as UsersDataModel[];
  }
}
