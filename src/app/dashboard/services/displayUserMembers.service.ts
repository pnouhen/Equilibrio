import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DisplayUserMembers {
  isUserMembers = signal<boolean | null>(null);
}
