import { Injectable, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class MessageAfterSubmit {
  onSubmitCheck(
    form: FormGroup,
    messageTrue: string,
    messageFalse: string,
    renderer: Renderer2
  ): string {
    if (form.valid) {
      setTimeout(() => {
        const alertMessage = document.querySelector('.alertMessage');
        if (alertMessage) {
          renderer.removeClass(alertMessage, 'alertMessageFalse');
          renderer.addClass(alertMessage, 'alertMessageTrue');
        }
      }, 0);

      form.reset()
      
      return messageTrue;
      
    } else {
      setTimeout(() => {
        const alertMessage = document.querySelector('.alertMessage');
        if (alertMessage) {
          renderer.removeClass(alertMessage, 'alertMessageTrue');
          renderer.addClass(alertMessage, 'alertMessageFalse');
        }

        for (const field in form.controls) {
          const control = form.get(field);
          if (control && control.invalid) {
            const element = document.getElementById(field);
            if (element) {
              renderer.addClass(element, 'fieldError');
            }
          }
        }
      }, 0);
      
      return messageFalse;
    }
  }
}