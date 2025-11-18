import { checkEmail } from '../services/checkEmail';
import { MessageForm } from '../models/messageForm';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageFormComponent } from "../message-form/message-form.component";

@Component({
  selector: 'app-prestations',
  imports: [ReactiveFormsModule, MessageFormComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent {
  private formBuilder: FormBuilder = inject(FormBuilder);

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    email: [
      '',
      [Validators.required, Validators.pattern(checkEmail)],
    ],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  isSubmitted: boolean = false;
  isFormValid: boolean = false
  formMessages: MessageForm[] = [
    new MessageForm('La demande a bien été envoyée', 'messageFormTrue'),
    new MessageForm("Au moins l'un des champs n'est pas rempli correctement", 'messageFormFalse'),
  ];

  onSubmitForm(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      this.isFormValid = true
      this.contactForm.reset();
    } else {
      this.isFormValid = false
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && this.isSubmitted && !this.isFormValid);
  }

  allowOnlyNumbers(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', ' '];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
