import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedGradeService {
  isSelectedDisplay: boolean = false;

  toggleSelected() {
    this.isSelectedDisplay = !this.isSelectedDisplay;
  }

  closeSelected() {
    this.isSelectedDisplay = false
  }
}
