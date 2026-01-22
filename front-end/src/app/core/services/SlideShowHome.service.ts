import { Injectable, signal } from '@angular/core';
import { ImageModel } from '../models/Image.model';
import { PicturesSlideShowHomeData } from '../../datas-Back-end/data/PicturesSlideShowHome.data';

@Injectable({
  providedIn: 'root',
})
export class SlideShowHomeService {
  SlideShowHomeData = signal<ImageModel[]>(this.generateSlideShowHome());

  private generateSlideShowHome() {
    const data = sessionStorage.getItem('slideShowHomeImg');

    if (data) {
      return JSON.parse(data);
    } else {
      sessionStorage.setItem('slideShowHomeImg', JSON.stringify(PicturesSlideShowHomeData));

      return PicturesSlideShowHomeData;
    }
  }
}
