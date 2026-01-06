import { RouterModule, Routes } from '@angular/router';
import { ManagePlacesTimesComponent } from './components/manage-places-times/manage-places-times.component';
import { LocationsTimesLocationComponent } from '../../../../../core/components/locations-times-location/locations-times-location.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: ManagePlacesTimesComponent,
  },
  { path: ':city', component: LocationsTimesLocationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ManagePlacesTimesRoutingModule {}
