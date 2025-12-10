import { Injectable, signal } from '@angular/core';
import { UsersMembers } from '../../datas-Back-end/models/Users-members';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<string | null>(null);
  otherMembers = signal<UsersMembers[] | null>(null);

  setUser(member: string | null) {
    this.user.set(member);
  }

  setOtherUser() {
    const data = JSON.parse(sessionStorage.getItem('user')!);
    const otherMembers: UsersMembers[] | null =
      data?.member.filter((m: UsersMembers) => m.memberName !== this.user()) || null;

    this.otherMembers.set(otherMembers)
  }
}
