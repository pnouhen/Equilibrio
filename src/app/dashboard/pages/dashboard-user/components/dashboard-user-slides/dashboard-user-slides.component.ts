import { Component, Input } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { DashboardUserSlideVideoComponent } from "../dashboard-user-slide-video/dashboard-user-slide-video.component";
import { AuthPageRoutingModule } from "../../../../../landing/pages/auth-Page/auth-Page-routing.module";
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { DashboardUserSlidesPdfComponent } from "../dashboard-user-slide-pdf/dashboard-user-slides-pdf.component";

@Component({
  selector: 'app-dashboard-user-slides',
  imports: [DashboardUserSlideVideoComponent, AuthPageRoutingModule, DashboardUserSlidesPdfComponent],
  templateUrl: './dashboard-user-slides.component.html',
  styleUrl: './dashboard-user-slides.component.scss',
})
export class DashboardUserSlidesComponent {
  @Input() innerWidth!: number
  @Input() indexContent!: number
  @Input() dashboardUserData!: UsersDataModel | undefined
  @Input() links: (UsersDataLinkModel | UsersDataPdfModel)[] = {} as (
    | UsersDataLinkModel
    | UsersDataPdfModel
  )[];

  isPdf(link: UsersDataLinkModel | UsersDataPdfModel): link is UsersDataPdfModel {
  return link.type === 'pdf';
}
}
