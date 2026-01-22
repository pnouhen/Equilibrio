import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedCategoryUserDataContentService {
  isSelectedDisplay: boolean = false;

  toggleSelected() {
    this.isSelectedDisplay = !this.isSelectedDisplay;
  }

  closeSelected() {
    this.isSelectedDisplay = false;
  }
}
