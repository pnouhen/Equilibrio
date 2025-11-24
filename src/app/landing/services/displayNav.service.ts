import { Image } from '../models/Image.model';
import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayNavService {
  isNavOpen: boolean = false;

  iconGrid: Image[] = [
    new Image('bars-solid', 'ouvrir'),
    new Image('xmark-solid', 'fermer'),
  ];

  navigationIcon = signal<Image>(this.iconGrid[0]);

  toggleMenuBurger(): void {
    this.isNavOpen = !this.isNavOpen;

    if (this.isNavOpen) {
      this.navigationIcon.set(this.iconGrid[1]);
    } else {
      this.navigationIcon.set(this.iconGrid[0]);
    }
  }

  removeMenuBurger(): void {
    this.isNavOpen = false;
    this.navigationIcon.set(this.iconGrid[0]);
  }
}
