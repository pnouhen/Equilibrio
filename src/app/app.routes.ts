import { Routes } from '@angular/router';

export const routes: Routes = [
  // Landing
  {
    path: '',
    loadChildren: () => import('./landing/landing-module').then((m) => m.LandingModule),
  },

  {
    path: 'espace-utilisateur',
    loadChildren: () => import('./users/users-module').then((m) => m.UsersModule),
  },

  {
    path: 'reinitialiser-le-mot-de-passe',
    loadChildren: () =>
      import('./landing/pages/reset-password/reset-password-module').then(
        (m) => m.ResetPasswordModule,
      ),
  },

  // Error404
  {
    path: '**',
    loadChildren: () =>
      import('./core/pages/error404/error404-module').then((m) => m.Error404Module),
  },
];
