import { RouterModule, Routes } from '@angular/router';
import { ManageUsersComponent } from './components/manage-users/manage-users.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: ManageUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ManageUsersRoutingModule {}
