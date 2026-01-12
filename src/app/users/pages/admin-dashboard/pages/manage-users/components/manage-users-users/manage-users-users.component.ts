import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { ManageUsersUsersSlideShowComponent } from '../manage-users-users-slide-show/manage-users-users-slide-show.component';
import { UsersDataService } from '../../../../../../../core/services/UsersData.service';

@Component({
  selector: 'app-manage-users-users',
  imports: [ManageUsersUsersSlideShowComponent],
  templateUrl: './manage-users-users.component.html',
  styleUrl: './manage-users-users.component.scss',
})
export class ManageUsersUsersComponent {
  @Input() users!: UsersModel[];
  @Output() usersChange = new EventEmitter<UsersModel[]>();

  @Input() slidesShow!: UsersModel[][];
  @Output() slidesShowChange = new EventEmitter<UsersModel[][]>();

  @Input() chunkArray?: (users: UsersModel[]) => UsersModel[][];

  searchEmail(event: Event) {
    const value = (event.target as HTMLInputElement).value;

    let newUsers = [];
    if (value.length > 2) {
      newUsers = this.users.filter((user) => user.email.includes(value));
    } else {
      newUsers = this.users;
    }

    const newSlidesShow = this.chunkArray?.(newUsers);
    if (newSlidesShow) {
      this.slidesShow = newSlidesShow;
      this.slidesShowChange.emit(newSlidesShow);
    }
  }
}
