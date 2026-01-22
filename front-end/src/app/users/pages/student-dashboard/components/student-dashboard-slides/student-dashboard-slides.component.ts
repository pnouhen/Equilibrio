import { Component, Input } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { StudentDashboardSlideVideoComponent } from '../student-dashboard-slide-video/student-dashboard-slide-video.component';
import { AuthPageRoutingModule } from '../../../../../landing/pages/auth-Page/auth-Page-routing.module';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { StudentDashboardSlidesPdfComponent } from '../student-dashboard-slide-pdf/student-dashboard-slides-pdf.component';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { StudentDashboardSlideSongComponent } from '../student-dashboard-slide-song/student-dashboard-slide-song.component';
import { SlidesResourcesService } from '../../../../../core/services/SlidesResources.service';

@Component({
  selector: 'app-student-dashboard-slides',
  imports: [
    StudentDashboardSlideVideoComponent,
    AuthPageRoutingModule,
    StudentDashboardSlidesPdfComponent,
    StudentDashboardSlideSongComponent,
  ],
  templateUrl: './student-dashboard-slides.component.html',
  styleUrl: './student-dashboard-slides.component.scss',
})
export class StudentDashboardSlidesComponent {
  @Input() innerWidth!: number;
  @Input() indexContent!: string;
  @Input() dashboardData!: UsersDataModel | undefined;
  @Input() links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[] = {} as (
    | UsersDataLinkModel
    | UsersDataPdfModel
    | UsersDataSongModel
  )[];

  // If admin, change the end of slides show
  @Input() choiceEndSlidesShow!: number;

  constructor(public slidesResourcesService: SlidesResourcesService){}
}
