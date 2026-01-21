import { HomeSlides } from './../../../../../core/services/homeSlides.service';
import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { PicturesInitialModel } from '../../models/PicturesInitial.model';

@Component({
  selector: 'app-home-slides-show',
  templateUrl: './home-slides-show.component.html',
  styleUrls: ['./home-slides-show.component.scss'],
  standalone: true,
})
export class HomeSlidesShowComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('slidesShow', { static: false }) slidesShow!: ElementRef<HTMLDivElement>;

  imageSlidesShow!: PicturesInitialModel[];
  stopSlideShow: boolean = false;
  indexMainImage: number = 0;
  translateX: number = 0;

  private slideInterval!: any;

  constructor(public homeSlides: HomeSlides) {}

  ngOnInit(): void {
    const isPicturesSessionStorage = this.homeSlides.allPicturesLink.filter((link) =>
      sessionStorage.getItem(link),
    );

    if (isPicturesSessionStorage.length !== 4) {
      this.homeSlides.initializePictures();
      this.imageSlidesShow = this.homeSlides.imageSlideShow();
    }

    this.imageSlidesShow = this.homeSlides.imageSlideShow();
  }

  ngAfterViewInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    // Clear the interval when the component is destroyed
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  updateSlidePosition(): void {
    if (!this.slidesShow) return;

    const slides = this.slidesShow.nativeElement.querySelectorAll(
      'img',
    ) as NodeListOf<HTMLImageElement>;
    if (!slides.length) return;

    const slideWidth = slides[0].clientWidth;
    this.translateX = -(slideWidth * this.indexMainImage);

    // If we arrive at the cloned image → instant return to the 1st
    if (slides[this.indexMainImage]?.classList.contains('clone')) {
      setTimeout(() => {
        // Delete temporarily the transition
        this.slidesShow.nativeElement.classList.remove('transition');

        // Return to the first real image
        this.indexMainImage = 0;
        this.translateX = 0;

        // Restart the transition after a short delay
        setTimeout(() => {
          this.slidesShow.nativeElement.classList.add('transition');
        }, 20);
      }, 400); // corresponds to the CSS transition time
    }
  }

  // Go to the next image in the carousel
  goToNextSlide(): void {
    if (!this.stopSlideShow) {
      this.indexMainImage++;
      this.updateSlidePosition();
    }
  }

  startAutoSlide(): void {
    this.slideInterval = setInterval(() => this.goToNextSlide(), 2000);
  }

  //Display image in click and stop the slidesShow
  selectSlide(image: { alt: string }): void {
    this.stopSlideShow = true;

    // Find the index of the clicked image using the alt key.
    const index = this.imageSlidesShow.findIndex((picture) => picture.img.alt === image.alt);
    if (index !== -1) {
      this.indexMainImage = index;
      this.updateSlidePosition();
    }
  }
}
