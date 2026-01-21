import { VideoYoutubeService } from '../../../../../core/services/VideoYoutube.service';
import { Component } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';

@Component({
  selector: 'app-capoeira',
  imports: [YouTubePlayer],
  templateUrl: './capoeira.component.html',
  styleUrl: './capoeira.component.scss',
})
export class CapoeiraComponent {
  constructor(public videoYoutubeService: VideoYoutubeService) {}
}
