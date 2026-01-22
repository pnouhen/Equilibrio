import { UsersLayoutComponent } from './users-layout/components/users-layout/users-layout.component';
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
        path: 'admin/tableau-de-bord',
        loadChildren: () =>
          import('./pages/admin-pages/admin-pages-module').then(
            (m) => m.AdminMenuModule
          ),
      },

      {
        path: 'admin/tableau-de-bord/modification-photos-carousel',
        loadChildren: () =>
          import('./pages/admin-pages/pages/update-slides-shows-pictures/update-slides-shows-pictures-module').then(
            (m) => m.UpdateSlidesShowsPicturesModule
          ),
      },

       {
        path: 'admin/tableau-de-bord/modification-dates-reprises-entrainement',
        loadChildren: () =>
          import('./pages/admin-pages/pages/update-training-resumes/update-training-resumes-module').then(
            (m) => m.UpdateTrainingResumesModule
          ),
      },

       {
        path: 'admin/tableau-de-bord/gestion-lieux-horaires',
        loadChildren: () =>
          import('./pages/admin-pages/pages/manage-places-times/manage-places-times-module').then(
            (m) => m.ManagePlacesTimesModule
          ),
      },

       {
        path: 'admin/tableau-de-bord/gestion-adherants',
        loadChildren: () =>
          import('./pages/admin-pages/pages/manage-users/manage-users-module').then(
            (m) => m.ManageUsersModule
          ),
      },

       {
        path: 'admin/tableau-de-bord/gestions-ressources',
        loadChildren: () =>
          import('./pages/admin-pages/pages/manage-resources/manage-resources-module').then(
            (m) => m.ManageResourcesModule
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
          import('./pages/training-attendance/training-attendance-module').then((m) => m.TrainingAttendanceModule),
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
          import('./pages/student-dashboard/components/song-lyrics/song-lyrics-module').then(
            (m) => m.SongLyricsModule
          ),
      },

      {
        path: ':id/:category',
        loadChildren: () =>
          import('./pages/student-dashboard/student-dashboard.module').then((m) => m.StudentDashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
