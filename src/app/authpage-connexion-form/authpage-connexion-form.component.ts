import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { checkEmail } from '../services/checkEmail';
import { MessageForm } from '../models/MessageForm.model';
import { MessageFormComponent } from '../message-form/message-form.component';

@Component({
  selector: 'app-authpage-connexion-form',
  imports: [FormsModule, MessageFormComponent],
  templateUrl: './authpage-connexion-form.component.html',
  styleUrl: './authpage-connexion-form.component.scss',
})
export class AuthpageConnexionFormComponent {
  passwordValue: string = 'azertyuiop1234';

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('Tous est bon', 'messageFormTrue'),
    new MessageForm('Au moins un des champs est incorrect', 'messageFormFalse'),
  ];

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    if (
      checkEmail.test(form.value.email) &&
      form.value.password.length > 12 &&
      form.value.password !== ''
    ) {
      this.isFormValid = true;
      form.resetForm();
    } else {
      this.isFormValid = false;
    }
  }
}
