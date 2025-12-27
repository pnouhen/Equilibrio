import { Injectable, signal } from '@angular/core';
import { UsersData } from '../../datas-Back-end/data/Users.data';
import { UsersModel } from '../../datas-Back-end/models/Users.model';
import { UsersDataModel } from '../../datas-Back-end/models/UserData.model';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  usersData = signal<UsersModel[]>(this.generateUsersData());

  private generateUsersData(): UsersModel[] {
    const storedData = sessionStorage.getItem('UsersData');

    if (!storedData) {
      const defaultData: UsersModel[] = UsersData; 
      sessionStorage.setItem('UsersData', JSON.stringify(defaultData));
      return defaultData;
    } else {
      return JSON.parse(storedData);
    }
  }
}
