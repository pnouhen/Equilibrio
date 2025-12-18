import { Component, Input } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { DashboardUserSlideVideoComponent } from '../dashboard-user-slide-video/dashboard-user-slide-video.component';
import { AuthPageRoutingModule } from '../../../../../landing/pages/auth-Page/auth-Page-routing.module';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { DashboardUserSlidesPdfComponent } from '../dashboard-user-slide-pdf/dashboard-user-slides-pdf.component';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { DashboardUserSlideSongComponent } from "../dashboard-user-slide-song/dashboard-user-slide-song.component";

@Component({
  selector: 'app-dashboard-user-slides',
  imports: [
    DashboardUserSlideVideoComponent,
    AuthPageRoutingModule,
    DashboardUserSlidesPdfComponent,
    DashboardUserSlideSongComponent
],
  templateUrl: './dashboard-user-slides.component.html',
  styleUrl: './dashboard-user-slides.component.scss',
})
export class DashboardUserSlidesComponent {
  @Input() innerWidth!: number;
  @Input() indexContent!: number;
  @Input() dashboardUserData!: UsersDataModel | undefined;
  @Input() links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[] = {} as (
    | UsersDataLinkModel
    | UsersDataPdfModel
    | UsersDataSongModel
  )[];

  isVideo(link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel): link is UsersDataLinkModel {
    return link.type === 'video';
  }
  isPdf(link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel): link is UsersDataPdfModel {
    return link.type === 'pdf';
  }

  isSong(link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel): link is UsersDataSongModel {
    return link.type === 'song';
  }
}
