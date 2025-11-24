import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { HomeComponent } from './components/home/home.component';

const route: Routes = [
  { path: '', component: HomeComponent },
]

@NgModule({
    imports:[RouterModule.forChild(route)],
    exports:[RouterModule]
})

export class HomeRoutingModule {}