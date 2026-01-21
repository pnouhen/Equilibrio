import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../../landing/components/header/header.component';
import { FooterComponent } from '../../../../../landing/components/footer/footer.component';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';
import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormMessageComponent, FormsModule],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.scss',
})
export class ResetPasswordComponent { 
 // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel('Le mot de passe a bien été modifié', 'formMessageTrue'),
    new FormMessageModel('Les mots de passe ne correspondent pas', 'formMessageFalse'),
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
