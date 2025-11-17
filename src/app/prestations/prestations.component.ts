import { MessageAfterSubmit } from './../services/messageAfterSubmit';
import { Component, inject, Renderer2 } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PhoneFormatDirective } from '../services/phoneFormatDirective';

@Component({
  selector: 'app-prestations',
  imports: [ReactiveFormsModule, PhoneFormatDirective],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})

export class PrestationsComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor(private renderer: Renderer2, public messageAfterSubmit: MessageAfterSubmit) {}

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i)]],
    phone: ['', [Validators.required, Validators.pattern(/^(\+33 [1-9](?: \d{2}){4}|0[1-9](?: \d{2}){4})$/)]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  messageAlert: string = '';

  onSubmitForm(): void {
    this.messageAlert = this.messageAfterSubmit.onSubmitCheck(
      this.contactForm,
      'Votre demande a bien été envoyée',
      "L'un des champs n'est pas rempli correctement",
      this.renderer
    );
  }

  formValueChanges$ = this.contactForm.valueChanges.subscribe({
  next: (value) => {
    Object.entries(value).forEach(([key, fieldValue]) => {
      // "key" = the name of the form field.
      const element = document.getElementById(key);

      if (fieldValue !== '') {
        element?.classList.remove('fieldError');
      }
    });
  },
});

  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', ' '];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
