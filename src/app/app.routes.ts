import { Routes } from '@angular/router';

export const routes: Routes = [
  // Landing
  {
    path: '',
    loadChildren: () => import('./landing/landing-module').then((m) => m.LandingModule),
  },

  {
    path: ':id',
    loadChildren: () => import('./dashboard/dashboard-module').then((m) => m.DashboardModule),
  },

  // Error404
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./core/reset-password/reset-password-module').then((m) => m.ResetPasswordModule),
  },

  {
    path: '**',
    loadChildren: () => import('./core/error404/error404-module').then((m) => m.Error404Module),
  },
];
