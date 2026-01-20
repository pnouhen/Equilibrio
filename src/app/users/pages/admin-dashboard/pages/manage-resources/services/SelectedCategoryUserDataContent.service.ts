import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedCategoryUserDataContent {
  isSelectedDisplay: boolean = false;

  toggleSelected() {
    this.isSelectedDisplay = !this.isSelectedDisplay;
  }

  closeSelected() {
    this.isSelectedDisplay = false
  }
}
