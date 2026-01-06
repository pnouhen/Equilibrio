import { checkEmail } from '../../../../services/checkEmail';
import { MessageForm } from '../../../../../core/models/MessageForm.model';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MessageFormComponent } from '../../../../../core/components/message-form/message-form.component';
import { UpdatePhoneNumbers } from '../../../../../core/services/allowOnlyNumbers.service';

@Component({
  selector: 'app-prestations',
  imports: [ReactiveFormsModule, MessageFormComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent {
  phoneNumber: string = "";
  
  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor(public updatePhoneNumbers: UpdatePhoneNumbers) {}

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(checkEmail)]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('La demande a bien été envoyée', 'messageFormTrue'),
    new MessageForm("Au moins l'un des champs n'est pas rempli correctement", 'messageFormFalse'),
  ];

  onSubmitForm(): void {
    this.isSubmitted = true;

    if (this.contactForm.valid) {
      this.isFormValid = true;
      this.contactForm.reset();
    } else {
      this.isFormValid = false;
    }
  }

  isFieldInvalid(fieldName: string): boolean {
    const field = this.contactForm.get(fieldName);
    return !!(field && field.invalid && this.isSubmitted && !this.isFormValid);
  }

  formatPhoneNumber(event: Event) {
    this.phoneNumber = this.updatePhoneNumbers.formatPhoneNumber((event.target as HTMLInputElement).value);
  }
}
