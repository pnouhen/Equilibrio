import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { NgModule } from '@angular/core';


const route: Routes = [
    {path: "", component: ResetPasswordComponent}
]

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class ResetPasswordRoutingModule {}