import { RouterModule, Routes } from '@angular/router';
import { UpdateSlidesShowsPicturesComponent } from './components/update-slides-shows-pictures/update-slides-shows-pictures.component';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: UpdateSlidesShowsPicturesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UpdateSlidesShowsPicturesRoutingModule {}
