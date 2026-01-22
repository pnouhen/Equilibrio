import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedCondtionService {
  isSelectedDisplay: boolean = false;

  toggleSelected(e: Event) {
    e.preventDefault()
    this.isSelectedDisplay = !this.isSelectedDisplay;
  }

  closeSelected() {
    this.isSelectedDisplay = false;
  }
}
