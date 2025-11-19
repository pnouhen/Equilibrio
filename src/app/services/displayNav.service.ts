import { Injectable, signal } from '@angular/core';
import { IconMenuBurger } from '../models/IconMenuBurger';

@Injectable({
  providedIn: 'root',
})
export class DisplayNavService {
  isNavOpen: boolean = false;

  iconGrid: IconMenuBurger[] = [
    new IconMenuBurger('bars-solid', 'ouvrir'),
    new IconMenuBurger('xmark-solid', 'fermer'),
  ];

  navigationIcon = signal<IconMenuBurger>(this.iconGrid[0]);

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
