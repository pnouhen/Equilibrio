import { Injectable, signal } from '@angular/core';
import { UsersMembers } from '../../datas-Back-end/models/Users-members';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user = signal<string | undefined>(undefined);
  category = signal<string | undefined>(undefined);
  grade = signal<string | undefined>(undefined);
  otherMembers = signal<UsersMembers[] | null>(null);

  setUser(member: UsersMembers | null) {
    this.user.set(member?.memberName);
    this.category.set(member?.category)
    this.grade.set(member?.grade)
  }

  setOtherUser() {
    const data = JSON.parse(sessionStorage.getItem('user')!);
    const otherMembers: UsersMembers[] | null =
      data?.member.filter((m: UsersMembers) => m.memberName !== this.user()) || null;

    this.otherMembers.set(otherMembers)
  }
}
