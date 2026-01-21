import { Component, Input } from '@angular/core';
import { VideoYoutubeService } from '../../../../../core/services/VideoYoutube.service';
import { YouTubePlayer } from '@angular/youtube-player';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';

@Component({
  selector: 'app-student-dashboard-slides-videos',
  imports: [YouTubePlayer],
  templateUrl: './student-dashboard-slide-video.component.html',
  styleUrl: './student-dashboard-slide-video.component.scss',
})
export class StudentDashboardSlideVideoComponent {
  @Input() link!: UsersDataLinkModel;
  @Input() isCreate: boolean = false

  constructor(public videoYoutubeService: VideoYoutubeService) {}
}
