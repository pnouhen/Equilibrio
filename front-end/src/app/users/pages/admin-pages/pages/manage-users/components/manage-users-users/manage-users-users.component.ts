import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { ManageUsersUsersSlideShowComponent } from '../manage-users-users-slide-show/manage-users-users-slide-show.component';
import { UsersDataService } from '../../../../../../../core/services/UsersData.service';
import { ManageUsersService } from '../../services/ManageUsers.service';

@Component({
  selector: 'app-manage-users-users',
  imports: [ManageUsersUsersSlideShowComponent],
  templateUrl: './manage-users-users.component.html',
  styleUrl: './manage-users-users.component.scss',
})
export class ManageUsersUsersComponent {
  constructor(public manageUsersService: ManageUsersService) {}

  searchEmail(event: Event) {
    // Retrieve the value
    const value = (event.target as HTMLInputElement).value;

    // 2 characters to activate the search
    let newUsers = [];
    if (value.length > 2) {
      newUsers = this.manageUsersService.users().filter((user) => user.email.includes(value));
    } else {
      newUsers = this.manageUsersService.users();
    }

    this.manageUsersService.chunkArray(newUsers);
  }
}
