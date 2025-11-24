import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { checkEmail } from '../../../../services/checkEmail';
import { MessageForm } from '../../../../models/MessageForm.model';
import { MessageFormComponent } from '../../../../components/message-form/message-form.component';
import { UsersData } from '../../../../../datas-Back-end/data/Users.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authpage-connexion-form',
  imports: [FormsModule, MessageFormComponent],
  templateUrl: './authpage-connexion-form.component.html',
  styleUrl: './authpage-connexion-form.component.scss',
})
export class AuthpageConnexionFormComponent {
  passwordValue: string = '123456789Pn!';

  constructor(private router: Router) {}

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('La connexion est faite', 'messageFormTrue'),
    new MessageForm('Au moins un des champs est incorrect', 'messageFormFalse'),
  ];

  onSubmit(form: NgForm) {
    this.isSubmitted = true;

    const emailUser = this.isAuthenticationValid(form.value.email, form.value.password);

    if (emailUser !== '') {
      this.router.navigate([`/espace-adherant/${emailUser}`]);
      this.isFormValid = true;
      form.resetForm();
    } else {
      this.isFormValid = false;
    }
  }

  isAuthenticationValid(email: string, password: string): string {
    const userFind = UsersData.find((user) => user.email === email);
    if (userFind?.password === password) {
      return email;
    }

    return 'undefined';
  }
}
