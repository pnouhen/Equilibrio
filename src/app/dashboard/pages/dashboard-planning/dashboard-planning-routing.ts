import {  RouterModule, Routes } from "@angular/router";
import { DashboardPlanningComponent } from "./dashboard-planning/dashboard-planning.component";
import { NgModule } from "@angular/core";


const route: Routes = [
    {
        path: '', component: DashboardPlanningComponent
    }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DashboardPlanningRoutingModule {}