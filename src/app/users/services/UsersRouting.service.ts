import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class UsersRouting {


    navigateEspaceMember(email: string): string {
     return `/espace-utilisateur/espace-membres/${email}`;
  }

  navigatePlanning(email: string): string {
     return `/espace-utilisateur/espace-professeur/${email}/planning`
  }
}