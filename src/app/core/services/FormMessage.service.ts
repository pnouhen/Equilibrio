import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})

export class FormMessageService{
    createArrayBoolean(length: number): boolean[] {
    return new Array(length).fill(false);
}
}