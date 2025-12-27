import { RouterModule, Routes } from '@angular/router';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: UsersLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UsersLayoutRoutingModule {}
