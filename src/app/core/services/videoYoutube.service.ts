import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoYoutubeService {
  getVideoId(url: string): string {
    // Keep only the ID
    const match = url.match(/(?:v=|\/embed\/)([^&?/]+)/);
    return match ? match[1] : '';
  }
}
