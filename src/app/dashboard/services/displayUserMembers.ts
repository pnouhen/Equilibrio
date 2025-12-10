import { Injectable, signal } from "@angular/core";

@Injectable({providedIn:"root"})

export class DisplayUserMembers{
    isUserMembers = signal<boolean | null>(null);

    toggleUserMember(boolean: boolean) {
        this.isUserMembers.set(boolean)
    }
}