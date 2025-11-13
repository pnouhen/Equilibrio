import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CapoeiraComponent } from './capoeira/capoeira.component';
import { LocationsTimesComponent } from './locations-times/locations-times.component';
import { PrestationsComponent } from './prestations/prestations.component';
import { AuthPageComponent } from './authPage/authPage.component';
import { LegalesMentionsComponent } from './legales-mentions/legales-mentions.component';
import { Error404Component } from './error404/error404.component';
import { LocationsTimesLocationComponent } from './locations-times-location/locations-times-location.component';

export const routes: Routes = [
  // Page
  { path: '', component: HomeComponent },
  { path: 'la-capoeira', component: CapoeiraComponent },
  { path: 'lieux-et-horaires', component: LocationsTimesComponent },
  { path: 'prestations-et-animations', component: PrestationsComponent },
  { path: 'espace-adherents', component: AuthPageComponent },
  { path: 'mentions-legales', component: LegalesMentionsComponent },

  // LocationsTimes pages
  { path: 'lieux-et-horaires/:city', component: LocationsTimesLocationComponent },

  { path: '**', component: Error404Component },
];
