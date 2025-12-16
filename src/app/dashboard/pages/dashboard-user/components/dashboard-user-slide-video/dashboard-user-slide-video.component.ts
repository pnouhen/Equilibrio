import { Component, Input } from '@angular/core';
import { VideoYoutube } from '../../../../../core/services/videoYoutube.service';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-dashboard-user-slides-videos',
  imports: [YouTubePlayer],
  templateUrl: './dashboard-user-slide-video.component.html',
  styleUrl: './dashboard-user-slide-video.component.scss',
})
export class DashboardUserSlideVideoComponent {
  @Input() url!: string
  constructor(public videoYoutube: VideoYoutube) {}
}
