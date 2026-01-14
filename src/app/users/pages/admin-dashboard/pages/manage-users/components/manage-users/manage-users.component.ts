import { Component } from '@angular/core';
import { ManageUsersUsersComponent } from '../manage-users-users/manage-users-users.component';
import { ReturnAdminDashboardComponent } from '../../../../components/return-admin-dashboard/return-admin-dashboard.component';
import { ManageUsersFormComponent } from '../manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-manage-users',
  imports: [ManageUsersUsersComponent, ReturnAdminDashboardComponent, ManageUsersFormComponent],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss',
})
export class ManageUsersComponent {

}
