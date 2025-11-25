import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/authPage/authPage.component';
import { NgModule } from '@angular/core';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: '', component: AuthPageComponent },
  { path: 'mot-de-passe-oublie', component: ForgotPasswordComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthPageRoutingModule {}
