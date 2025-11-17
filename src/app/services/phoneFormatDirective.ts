import { Directive, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[phoneFormat]'
})
export class PhoneFormatDirective {
  constructor(private control: NgControl) {}

  @HostListener('input', ['$event'])
  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\D/g, ''); // retirer tout sauf chiffres

    // +33 format
    if (value.startsWith('33')) {
      value = '+33 ' + value.substring(2)
        .replace(/(\d{1})(\d{2})(\d{2})(\d{2})(\d{2}).*/, '$1 $2 $3 $4 $5');
    } 
    // 0X format
    else if (value.startsWith('0')) {
      value = value
        .replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2}).*/, '$1 $2 $3 $4 $5');
    }

    input.value = value.trim();
    this.control.control?.setValue(input.value, { emitEvent: false });
  }
}
