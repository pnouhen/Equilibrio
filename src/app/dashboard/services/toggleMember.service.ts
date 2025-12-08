import { Injectable, signal, WritableSignal } from '@angular/core';
import { UsersMembers } from '../../datas-Back-end/models/Users-members';

@Injectable({
  providedIn: 'root',
})
export class ToggleMember {
  memberSelected!: UsersMembers;
  memberSelectedActive: WritableSignal<boolean> = signal(false);

  selectedMember(member: UsersMembers): void {
    this.memberSelected = member;
    this.memberSelectedActive.set(true);
  }

  resetMember(): void {
  this.memberSelectedActive.set(false);
  this.memberSelected = null!;
}
}
