import { RouterModule, Routes } from '@angular/router';
import { PrestationsComponent } from './components/prestations/prestations.component';
import { NgModule } from '@angular/core';

const route: Routes = [{ path: '', component: PrestationsComponent }];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class PrestationsAnimationsRoutingModule {}
