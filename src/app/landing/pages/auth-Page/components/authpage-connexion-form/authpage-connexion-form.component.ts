import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageForm } from '../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../core/components/message-form/message-form.component';
import { UsersData } from '../../../../../datas-Back-end/data/Users.data';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-authpage-connexion-form',
  imports: [FormsModule, MessageFormComponent, RouterLink],
  templateUrl: './authpage-connexion-form.component.html',
  styleUrl: './authpage-connexion-form.component.scss',
})
export class AuthpageConnexionFormComponent {
  passwordValue: string = '123456789Pn!';
  pathForgotPassword: string = "mot-de-passe-oublie";

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
      this.router.navigate([`${emailUser}`]);
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

    return '';
  }
}
