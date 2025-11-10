import { Component, OnInit } from '@angular/core';
import { Image } from '../models/Image.model';

@Component({
  selector: 'app-home-slides-show',
  imports: [],
  templateUrl: './home-slides-show.component.html',
  styleUrl: './home-slides-show.component.scss',
})
export class HomeSlidesShowComponent implements OnInit {
  imageSlidesShow!: Image[];

  stopSlideShow: boolean = false;
  indexMainImage: number = -1;
  translateX: number = 0;

  ngOnInit(): void {
    this.imageSlidesShow = [
      new Image('assets/slidesShow/activity-for-all.webp', "L'activité faite pour vous"),
      new Image('assets/slidesShow/batizado-2025.webp', 'Le batizado de 2025'),
      new Image('assets/slidesShow/rentree-2025.webp', 'Bientôt la rentrée'),
      new Image('assets/slidesShow/rentree2023.webp', 'Commencer la capoeira dès 3 ans'),
    ];

    this.loop();
  }

  updateTranslateX(): void {
    const arrayImageSlidesShow = document.querySelectorAll('.imageSlidesShow');
    const imageSlidesShow = document.querySelector('.mainImages img');
    this.translateX = 0 - (imageSlidesShow?.clientWidth || 0);

    arrayImageSlidesShow.forEach((el) => {
      const image = el as HTMLElement;
      image.style.transform = `translateX(${this.translateX * this.indexMainImage}px)`;
    });
  }

  generateSlidesShow(): void {
    if (this.indexMainImage < this.imageSlidesShow.length - 1) {
      this.indexMainImage = this.indexMainImage + 1;
    } else {
      this.indexMainImage = 0;
    }

    this.updateTranslateX();
  }

  loop(): void {
    if (!this.stopSlideShow) {
      this.generateSlidesShow();
      setTimeout(() => this.loop(), 3000);
    }
  }

  clickImage(image: { alt: string }): void {
    this.stopSlideShow = true;
    this.indexMainImage = this.imageSlidesShow.findIndex((img) => img.alt === image.alt);

    this.updateTranslateX();
  }

 imageSelected(image: { alt: string }): void {
  this.imageSlidesShow.findIndex((img) => img.alt === image.alt);
}
}

// TODO Manque le retour fluide après la dernière image