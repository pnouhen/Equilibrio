import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DisplayUserMembersService {
  isUserMembers = signal<boolean | null>(null);
}
