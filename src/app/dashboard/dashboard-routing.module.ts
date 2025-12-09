import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';

const route: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: ':id',
        loadChildren: () =>
          import('./pages/dashboard-user/dashboard-user-module').then((m) => m.DashboardUserModule),
      },

      {
        path: 'espace-membres/:id',
        loadChildren: () =>
          import('./pages/dashboard-user-members/dashboard-user-members-module').then(
            (m) => m.DashboardUserMembersModule
          ),
      },

      {
        path: '**',
        loadChildren: () =>
          import('../core/error404/error404-module').then((m) => m.Error404Module),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
