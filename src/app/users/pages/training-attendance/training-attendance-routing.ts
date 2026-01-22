import {  RouterModule, Routes } from "@angular/router";
import { TrainingAttendanceComponent } from "./components/training-attendance/training-attendance.component";
import { NgModule } from "@angular/core";


const route: Routes = [
    {
        path: '', component: TrainingAttendanceComponent
    }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class TrainingAttendanceRoutingModule {}