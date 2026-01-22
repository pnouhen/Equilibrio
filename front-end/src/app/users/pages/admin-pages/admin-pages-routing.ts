import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from './pages/admin-menu/admin-menu.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: AdminMenuComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class AdminMenuRoutingModule {}
