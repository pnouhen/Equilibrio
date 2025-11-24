import { Routes } from '@angular/router';

export const routes: Routes = [
  // Landing
 {
    path: '',
    loadChildren: () =>
      import('./landing/landing-module').then((m) => m.LandingModule),
  },

    // General
  {
    path: '**',
    loadChildren: () =>
      import('./core/pages/error404/error404-module').then((m) => m.Error404Module),
  },

];
