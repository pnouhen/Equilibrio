import { computed, Injectable } from '@angular/core';
import { UsersModel } from '../../../../../../datas-Back-end/models/Users.model';
import { UsersDataService } from '../../../../../../core/services/UsersData.service';
import { UsersDisplay } from '../models/UsersDisplay.model';
import { MemberDisplayModel } from '../models/MemberDisplay.model';

@Injectable({
  providedIn: 'root',
})
export class ManageUsersService {
  slidesShow!: UsersModel[][];
  numberUserBySlide: number = 5;
  idForm: string | undefined = undefined
  emailForm!: string
  statutTextForm: string = 'Sélectionner';
  membersDisplayForm: MemberDisplayModel[] = [];

  users = computed(() =>
    this.usersDataService
      .UsersData()
      .filter((user) => user.email !== 'pierre.nouhen@orange.fr')
      .sort((a, b) => a.email.localeCompare(b.email))
  );

  constructor(private usersDataService: UsersDataService) {}

  chunkArray(users: UsersModel[]) {
    const results = [];

    for (let i = 0; i < users.length; i += this.numberUserBySlide) {
      results.push(users.slice(i, i + this.numberUserBySlide));
    }

    this.slidesShow = results;
  }
}
