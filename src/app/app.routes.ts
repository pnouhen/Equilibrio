import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CapoeiraComponent } from './capoeira/capoeira.component';
import { TimePlaceComponent } from './time-place/time-place.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { AuthPageComponent } from './auth-page/auth-page.component';

export const routes: Routes = [
    {path: "", component: HomeComponent},
    {path:"la-capoeira", component:CapoeiraComponent},
    {path:"lieux-et-horaires", component:TimePlaceComponent},
    {path:"prestations-et-animations", component:PrestationsComponent},
    {path:"espace-adherents", component:AuthPageComponent},
];
