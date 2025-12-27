import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout/dashboard-layout.component';

const route: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'espace-professeur/:id',
        loadChildren: () =>
          import('./pages/dashboard-teacher/dashboard-teacher-module').then(
            (m) => m.DashboardTeacherModule
          ),
      },

      {
        path: 'espace-professeur/:id/planning',
        loadChildren: () =>
          import('./pages/dashboard-planning/dashboard-planning-module').then(
            (m) => m.DashboardPlanningModule
          ),
      },

      {
        path: 'espace-membres/:id',
        loadChildren: () =>
          import('./pages/dashboard-user-members/dashboard-user-members-module').then(
            (m) => m.DashboardUserMembersModule
          ),
      },

      {
        path: ':id/chants/:song',
        loadChildren: () =>
          import('./pages/dashboard-user/pages/song-lyrics/song-lyrics-module').then(
            (m) => m.SongLyricsModule
          ),
      },

      {
        path: ':id/:category',
        loadChildren: () =>
          import('./pages/dashboard-user/dashboard-user.module').then((m) => m.DashboardUserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
