import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RedirectionPageService {
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
      if (user.type === 'student') {
        if (user.members?.length === 1) {
          return `/espace-utilisateur/${user.members[0].memberName}/Présentation`;
        } else if (user.members?.length > 1) {
          return `/espace-utilisateur/espace-membres/${user.email}`;
        }
      } else if (user.type === 'teacher') {
        return `/espace-utilisateur/espace-professeur/${user.email}`;
      } else if (user.type === 'admin') {
        return '/espace-utilisateur/admin';
      }
    }
    return '/';
  }
}
