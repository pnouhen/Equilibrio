import { Routes, RouterModule } from "@angular/router";
import { DashboardTeacherComponent } from "./dashboard-teacher/dashboard-teacher.component";
import { NgModule } from "@angular/core";


const route: Routes = [
    {path: '',
        component: DashboardTeacherComponent
    }
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class DashboardTeacherRoutingModule{}