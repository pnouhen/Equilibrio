import { checkEmail } from '../../../../../core/services/CheckEmail';
import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';
import { ManagePhoneNumbersService } from '../../../../../core/services/ManagePhoneNumbers.service';

@Component({
  selector: 'app-prestations',
  imports: [ReactiveFormsModule, FormMessageComponent],
  templateUrl: './prestations.component.html',
  styleUrl: './prestations.component.scss',
})
export class PrestationsComponent {
  phoneNumber: string = '';

  private formBuilder: FormBuilder = inject(FormBuilder);

  constructor(public managePhoneNumbersService: ManagePhoneNumbersService) {}

  contactForm: FormGroup = this.formBuilder.group({
    name: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.pattern(checkEmail)]],
    phone: ['', [Validators.required]],
    subject: ['', [Validators.required]],
    message: ['', [Validators.required]],
  });

  // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: FormMessageModel[] = [
    new FormMessageModel('La demande a bien été envoyée', 'formMessageTrue'),
    new FormMessageModel(
      "Au moins l'un des champs n'est pas rempli correctement",
      'formMessageFalse',
    ),
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
    this.phoneNumber = this.managePhoneNumbersService.formatPhoneNumber(
      (event.target as HTMLInputElement).value,
    );
  }
}
