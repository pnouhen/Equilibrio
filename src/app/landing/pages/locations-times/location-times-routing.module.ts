import { RouterModule, Routes } from '@angular/router';
import { LocationsTimesComponent } from './components/locations-times/locations-times.component';
import { LocationsTimesLocationComponent } from '../../../core/components/locations-times-location/locations-times-location.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  { path: '', component: LocationsTimesComponent },
  { path: ':city', component: LocationsTimesLocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationTimesRoutingModule {}
