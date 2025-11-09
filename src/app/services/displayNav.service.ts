import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DisplayNavService {
  displayNav = false;

  addNav(): void {
    this.displayNav = !this.displayNav;
    const nav = document.getElementById('nav');
    if (!nav) return;

    nav.classList.add('display');
  }

  removeNav(): void {
    this.displayNav = false;
    const nav = document.getElementById('nav');
    if (!nav) return;
    nav.classList.remove('display');
  }
}
