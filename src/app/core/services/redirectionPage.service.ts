import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirectionPage {
  chekcedUser(): boolean {
    const user = sessionStorage.getItem('user');
    if (user) {
     return true;
    } else {
      return false;
    }
  }

  routerLink(): string {
  const isUser = this.chekcedUser();

  const raw = sessionStorage.getItem('user');
  const user = raw ? JSON.parse(raw) : null;

  if (isUser && user) {
    if (user.member?.length === 1) {
      return `/dashboard/${user.member[0].memberName}`;
    } else if (user.member?.length > 1) {
      return `/dashboard/espace-membres/${user.email}`;
    }
  }
  return '/';
}
}
