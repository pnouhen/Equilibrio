import { Injectable, signal } from '@angular/core';
import { UsersData } from '../../datas-Back-end/data/Users.data';
import { UsersModel } from '../../datas-Back-end/models/Users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersDataService {
  UsersData = signal<UsersModel[]>(this.generateUsersData());

  private generateUsersData(): UsersModel[] {
    const storedData = sessionStorage.getItem('users');

    if (!storedData) {
      const defaultData: UsersModel[] = UsersData; 
      
      sessionStorage.setItem('users', JSON.stringify(defaultData));
      return defaultData;
    } else {
      return JSON.parse(storedData);
    }
  }
}
