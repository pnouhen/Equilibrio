import { Component, Input } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { UserDashboardSlideVideoComponent } from '../user-dashboard-slide-video/user-dashboard-slide-video.component';
import { AuthPageRoutingModule } from '../../../../../landing/pages/auth-Page/auth-Page-routing.module';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { UserDashboardSlidesPdfComponent } from '../user-dashboard-slide-pdf/user-dashboard-slides-pdf.component';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { UserDashboardSlideSongComponent } from '../user-dashboard-slide-song/user-dashboard-slide-song.component';

@Component({
  selector: 'app-user-dashboard-slides',
  imports: [
    UserDashboardSlideVideoComponent,
    AuthPageRoutingModule,
    UserDashboardSlidesPdfComponent,
    UserDashboardSlideSongComponent
],
  templateUrl: './user-dashboard-slides.component.html',
  styleUrl: './user-dashboard-slides.component.scss',
})
export class UserDashboardSlidesComponent {
  @Input() innerWidth!: number;
  @Input() indexContent!: number;
  @Input() UserDashboardData!: UsersDataModel | undefined;
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
