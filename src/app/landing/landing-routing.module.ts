import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingLayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LandingLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/home/home-module').then((m) => m.HomeModule),
      },
      {
        path: 'la-capoeira',
        loadChildren: () =>
          import('./pages/capoeira/capoeira-module').then((m) => m.CapoeiraModule),
      },
      {
        path: 'lieux-et-horaires',
        loadChildren: () =>
          import('./pages/locations-times/locations-times-module').then(
            (m) => m.LocationsTimesModule
          ),
      },
      {
        path: 'prestations-et-animations',
        loadChildren: () =>
          import('./pages/prestations-animations/prestations-animations-module').then(
            (m) => m.PrestationsAnimationsModule
          ),
      },
      {
        path: 'espace-adherents',
        loadChildren: () =>
          import('./pages/auth-Page/auth-Page-module').then((m) => m.AuthPageModule),
      },
      {
        path: 'mentions-legales',
        loadChildren: () =>
          import('./pages/legales-mentions/legales-mentions-module').then(
            (m) => m.LegalesMentionsModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandingRoutingModule {}
