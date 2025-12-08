import { RouterModule, Routes } from '@angular/router';
import { DashboardUserComponent } from './dashboard-user/dashboard-user.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: DashboardUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DashboardUserRoutingModule {}
