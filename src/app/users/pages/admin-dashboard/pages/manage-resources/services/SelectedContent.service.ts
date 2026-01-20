import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SelectedContent {
  isSelectedDisplay!: boolean[];

  toggleSelected(index: number) {
    this.isSelectedDisplay[index] = !this.isSelectedDisplay[index];
  }
}
