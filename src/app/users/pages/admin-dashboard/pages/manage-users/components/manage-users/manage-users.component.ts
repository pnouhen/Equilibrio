import { Component, OnInit } from '@angular/core';
import { ManageUsersUsersComponent } from '../manage-users-users/manage-users-users.component';
import { ReturnAdminDashboardComponent } from '../../../../components/return-admin-dashboard/return-admin-dashboard.component';
import { UsersDataService } from '../../../../../../../core/services/UsersData.service';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { ManageUsersFormComponent } from "../manage-users-form/manage-users-form.component";

@Component({
  selector: 'app-manage-users',
  imports: [ManageUsersUsersComponent, ReturnAdminDashboardComponent, ManageUsersFormComponent],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss',
})
export class ManageUsersComponent implements OnInit {
  users!: UsersModel[];
  slidesShow!: UsersModel[][];
    numberUserBySlide: number = 5

  constructor(public usersDataService: UsersDataService) {}

  ngOnInit(): void {
    this.users = this.usersDataService
      .UsersData()
      .filter((user) => user.email !== 'pierre.nouhen@orange.fr')
      .sort((a, b) => a.email.localeCompare(b.email));

    this.slidesShow = this.chunkArray(this.users);
    console.log(this.users[4].members[0])
  }

  chunkArray(users: UsersModel[]) {
    const results = [];

    for (let i = 0; i < users.length; i += this.numberUserBySlide) {
      results.push(users.slice(i, i + this.numberUserBySlide));
    }

    return results;
  }
}
