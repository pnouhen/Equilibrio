import { UsersLayoutComponent } from './users-layout/users-layout/users-layout.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const route: Routes = [
  {
    path: '',
    component: UsersLayoutComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('./pages/admin-managment/admin-managment-module').then(
            (m) => m.AdminManagmentModule
          ),
      },

      {
        path: 'espace-professeur/:id',
        loadChildren: () =>
          import('./pages/teacher-managment/teacher-managment-module').then(
            (m) => m.TeacherManagmentModule
          ),
      },

      {
         path: 'espace-professeur/:id/planning',
        loadChildren: () =>
          import('./pages/planning/planning-module').then(
            (m) => m.PlanningModule
          ),
      },

      {
        path: 'espace-membres/:id',
        loadChildren: () =>
          import('./pages/student-managment/student-managment-module').then(
            (m) => m.StudentManagmentModule
          ),
      },

      {
        path: ':id/chants/:song',
        loadChildren: () =>
          import('./pages/user-dashboard/pages/song-lyrics/song-lyrics-module').then(
            (m) => m.SongLyricsModule
          ),
      },

      {
        path: ':id/:category',
        loadChildren: () =>
          import('./pages/user-dashboard/user-dashboard.module').then((m) => m.UserDashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
