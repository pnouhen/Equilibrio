import { TeacherManagmentComponent } from './teacher-managment/teacher-managment.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: TeacherManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TeacherManagmentRoutingModule {}
