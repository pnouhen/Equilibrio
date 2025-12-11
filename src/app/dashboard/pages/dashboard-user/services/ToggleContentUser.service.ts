import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ToggleContentUser {
  content = signal<string>('Présentation');

  toggleContent(newContent: string) {
    this.content.set(newContent);
  }
}
