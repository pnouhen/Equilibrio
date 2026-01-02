import { PicturesInitialData } from './../../landing/pages/home/data/PicturesInitial.data';
import { Injectable, signal } from '@angular/core';
import { Image } from '../models/Image.model';
import { PicturesInitialModel } from '../../landing/pages/home/models/PicturesInitial.model';

@Injectable({
  providedIn: 'root',
})
export class HomeSlides {
  allPicturesLink: string[] = ['firstPicture', 'secondPicture', 'thirdPicture', 'fourthPicture'];
  imageSlideShow = signal<PicturesInitialModel[]>([
    new PicturesInitialModel(
      this.displayPicture('firstPicture').title,
      new Image(this.displayPicture('firstPicture').src, this.displayPicture('firstPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('secondPicture').title,
      new Image(this.displayPicture('secondPicture').src, this.displayPicture('secondPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('thirdPicture').title,
      new Image(this.displayPicture('thirdPicture').src, this.displayPicture('thirdPicture').alt)
    ),

    new PicturesInitialModel(
      this.displayPicture('fourthPicture').title,
      new Image(this.displayPicture('fourthPicture').src, this.displayPicture('fourthPicture').alt)
    ),
  ]);

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
      this.updatePicture(picture.img.src, picture.img.alt, picture.title);
    });

    this.imageSlideShow.set(
      PicturesInitialData.map((picture) => ({
        title: picture.title,
        img: { src: picture.img.src, alt: picture.img.src },
      }))
    );
  }

  updatePicture(src: string, alt: string, title: string) {
    fetch(src)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur de chargement de l’image');
        }
        return response.blob();
      })
      .then((blob) => {
        this.convertAndSaveImage(blob, alt, title);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  convertAndSaveImage(data: File | Blob, alt: string, title: string) {
    const reader = new FileReader();

    reader.onloadend = () => {
      const result = reader.result;
      const picture = {
        title: title,
        src: result,
        alt: alt,
      };

      if (typeof picture.src === 'string') {
        sessionStorage.setItem(title, JSON.stringify(picture));
      }
    };

    reader.onerror = (error) => {
      console.error('Erreur de lecture du fichier:', error);
    };

    reader.readAsDataURL(data);
  }
}
