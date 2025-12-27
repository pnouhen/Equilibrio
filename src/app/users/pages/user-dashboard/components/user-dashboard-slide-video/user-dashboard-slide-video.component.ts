import { Component, Input } from '@angular/core';
import { VideoYoutube } from '../../../../../core/services/videoYoutube.service';
import { YouTubePlayer } from '@angular/youtube-player';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';

@Component({
  selector: 'app-user-dashboard-slides-videos',
  imports: [YouTubePlayer],
  templateUrl: './user-dashboard-slide-video.component.html',
  styleUrl: './user-dashboard-slide-video.component.scss',
})
export class UserDashboardSlideVideoComponent {
  @Input() link!: UsersDataLinkModel
  constructor(public videoYoutube: VideoYoutube) {}
}
