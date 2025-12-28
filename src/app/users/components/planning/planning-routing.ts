import {  RouterModule, Routes } from "@angular/router";
import { PlanningComponent } from "./components/planning/planning.component";
import { NgModule } from "@angular/core";


const route: Routes = [
    {
        path: '', component: PlanningComponent
    }
]

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PlanningRoutingModule {}