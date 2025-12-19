import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Selected {
  isSelectedDisplay: boolean = false;

  toggleSelected() {
    this.isSelectedDisplay = !this.isSelectedDisplay;
  }

  closeSelected() {
    this.isSelectedDisplay = false
  }
}
