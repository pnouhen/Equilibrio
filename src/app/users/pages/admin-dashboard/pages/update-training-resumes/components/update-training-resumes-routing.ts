import { NgModule } from '@angular/core';
import { UpdateTrainingResumesComponent } from './update-training-resumes/update-training-resumes.component';
import { Router, RouterModule, Routes } from "@angular/router";

const route: Routes = [{
    path: '',
    component: UpdateTrainingResumesComponent
}]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports: [RouterModule]
})

export class UserDataTrainingRoutingModel {}