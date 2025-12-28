import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
  },
];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class AdminDashboardRoutingModule {}