import { Component } from '@angular/core';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';
import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { checkEmail } from '../../../../../core/services/checkEmail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, FormMessageComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  userEmail!: string;

  // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel(
      'Si cet e-mail est bien enregistré, vous recevrez un message pour réinitialiser votre mot de passe.',
      'formMessageTrue',
    ),
    new FormMessageModel('Email non conforme', 'formMessageFalse'),
  ];

  onSubmit(): void {
    this.isSubmitted = true;

    if (checkEmail.test(this.userEmail)) {
      this.isFormValid = true;

      this.userEmail = '';
    } else {
      this.isFormValid = false;
    }
  }
}
