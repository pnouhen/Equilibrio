import { RouterModule, Routes } from '@angular/router';
import { ManagePlacesTimesComponent } from './components/manage-places-times/manage-places-times.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: ManagePlacesTimesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ManagePlacesTimesRoutingModule {}
