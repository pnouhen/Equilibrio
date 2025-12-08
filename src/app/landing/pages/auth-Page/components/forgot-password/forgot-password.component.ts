import { Component } from '@angular/core';
import { MessageFormComponent } from '../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../core/models/MessageForm.model';
import { checkEmail } from '../../../../services/checkEmail';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  imports: [FormsModule, MessageFormComponent],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss',
})
export class ForgotPasswordComponent {
  userEmail!: string;

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm(
      'Si cet e-mail est bien enregistré, vous recevrez un message pour réinitialiser votre mot de passe.',
      'messageFormTrue'
    ),
    new MessageForm('Email non conforme', 'messageFormFalse'),
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
