import { RouterModule, Routes } from '@angular/router';
import { DashboardUserMembersComponent } from './dashboard-user-members/dashboard-user-members.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: DashboardUserMembersComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DashboardUserMembersRoutingModule {}
