import { Component, Input } from '@angular/core';
import { VideoYoutube } from '../../../../../core/services/videoYoutube.service';
import { YouTubePlayer } from '@angular/youtube-player';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';

@Component({
  selector: 'app-student-dashboard-slides-videos',
  imports: [YouTubePlayer],
  templateUrl: './student-dashboard-slide-video.component.html',
  styleUrl: './student-dashboard-slide-video.component.scss',
})
export class StudentDashboardSlideVideoComponent {
  @Input() link!: UsersDataLinkModel
  constructor(public videoYoutube: VideoYoutube) {}
}
