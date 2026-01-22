import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentManagmentComponent } from './student-managment/student-managment.component';

const route: Routes = [{ path: '', component: StudentManagmentComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class StudentManagmentRoutingModule {}
