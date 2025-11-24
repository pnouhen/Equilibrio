import { RouterModule, Routes } from '@angular/router';
import { AuthPageComponent } from './components/authPage/authPage.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: AuthPageComponent }];

@NgModule({
    imports: [RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class AuthPageRoutingModule {}
