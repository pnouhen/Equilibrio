import { Component } from '@angular/core';
import { ManageUsersUsersComponent } from '../manage-users-users/manage-users-users.component';
import { ReturnAdminMenuComponent } from '../../../../components/return-admin-menu/return-admin-menu.component';
import { ManageUsersFormComponent } from '../manage-users-form/manage-users-form.component';

@Component({
  selector: 'app-manage-users',
  imports: [ManageUsersUsersComponent, ReturnAdminMenuComponent, ManageUsersFormComponent],
  templateUrl: './manage-users.component.html',
  styleUrl: './manage-users.component.scss',
})
export class ManageUsersComponent {}
