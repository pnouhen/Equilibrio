import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class VideoYoutube {
  getVideoId(url: string): string {
    // Keep only the ID
    const match = url.match(/(?:v=|\/embed\/)([^&?/]+)/);
    return match ? match[1] : '';
  }
}
