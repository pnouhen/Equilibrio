import { ImagesService } from './Images.service';
import { PicturesInitialData } from './../../landing/pages/home/data/PicturesInitial.data';
import { Injectable, signal } from '@angular/core';
import { ImageModel } from '../models/Image.model';
import { PicturesInitialModel } from '../../landing/pages/home/models/PicturesInitial.model';

@Injectable({
  providedIn: 'root',
})
export class HomeSlides {
  allPicturesLink: string[] = ['firstPicture', 'secondPicture', 'thirdPicture', 'fourthPicture'];
  imageSlideShow = signal<PicturesInitialModel[]>([
    new PicturesInitialModel(
      this.displayPicture('firstPicture').title,
      new ImageModel(this.displayPicture('firstPicture').src, this.displayPicture('firstPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('secondPicture').title,
      new ImageModel(this.displayPicture('secondPicture').src, this.displayPicture('secondPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('thirdPicture').title,
      new ImageModel(this.displayPicture('thirdPicture').src, this.displayPicture('thirdPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('fourthPicture').title,
      new ImageModel(this.displayPicture('fourthPicture').src, this.displayPicture('fourthPicture').alt)
    ),
  ]);

  constructor(public imagesService: ImagesService) {}

  displayPicture(title: string) {
    const storedPicture = sessionStorage.getItem(title);
    if (storedPicture) {
      const picture = JSON.parse(storedPicture);
      return {
        src: picture.src,
        alt: picture.alt,
        title: picture.title,
      };
    } else {
      return {
        src: '',
        alt: '',
        title: '',
      };
    }
  }

  initializePictures() {
    PicturesInitialData.forEach((picture) => {
      this.imagesService.updatePicture(picture.img.src).then((value) => {
        const image = {
          title: picture.title,
          src: value,
          alt: picture.img.alt,
        };

        sessionStorage.setItem(image.title, JSON.stringify(image));
      });
    });

    this.imageSlideShow.set(
      PicturesInitialData.map((picture) => ({
        title: picture.title,
        img: { src: picture.img.src, alt: picture.img.src },
      }))
    );
  }
}
