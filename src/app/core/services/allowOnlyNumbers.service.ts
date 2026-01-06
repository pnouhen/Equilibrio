import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UpdatePhoneNumbers {
  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '+',
      'Backspace',
      'ArrowLeft',
      'ArrowRight',
      'Delete',
      ' ',
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  formatPhoneNumber(value: string): string {
    // Delete everything except numbers and +
    let input = value.replace(/[^\d+]/g, '');

    // Add spaces after the country code and every two digits
    if (input.startsWith('+')) {
      const countryCode = input.slice(0, 3); // +33
      const rest = input
        .slice(4)
        .replace(/(.{2})/g, '$1 ')
        .trim();
      return `${countryCode} ${rest}`;
    } else {
      return input.replace(/(.{2})/g, '$1 ').trim();
    }
  }
}
