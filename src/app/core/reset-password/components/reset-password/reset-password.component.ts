import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { MessageFormComponent } from '../../../components/message-form/message-form.component';
import { MessageForm } from '../../../models/MessageForm.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, MessageFormComponent, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent {
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('Le mot de passe a bien été modifié', 'messageFormTrue'),
    new MessageForm('Les mots de passe ne correspondent pas', 'messageFormFalse'),
  ];

  onSubmit(form: NgForm) {
    this.isSubmitted = true;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?]).+$/;

    if (
      form.value.password?.length >= 12 &&
      passwordRegex.test(form.value.password) &&
      form.value.password === form.value.passwordCheck
    ) {
      this.isFormValid = true;

      form.reset();
    } else {
      this.isFormValid = false;
    }
  }
}
