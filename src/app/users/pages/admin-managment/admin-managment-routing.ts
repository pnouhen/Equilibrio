import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminManagmentComponent } from './admin-managment/admin-managment.component';

const route: Routes = [
  {
    path: '',
    component: AdminManagmentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AdminManagmentRoutingModule {}
