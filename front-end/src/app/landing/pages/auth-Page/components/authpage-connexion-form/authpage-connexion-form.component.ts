import { SelectedConnexionService } from '../../services/SelectedConnexion.service';
import { UsersModel } from './../../../../../datas-Back-end/models/Users.model';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';
import { UsersData } from '../../../../../datas-Back-end/data/Users.data';
import { Router, RouterLink } from '@angular/router';
import { InputSelectedComponent } from '../../../../../core/components/input-selected/input-selected.component';
import { UsersDataService } from '../../../../../core/services/UsersData.service';

@Component({
  selector: 'app-authpage-connexion-form',
  imports: [FormsModule, FormMessageComponent, RouterLink, InputSelectedComponent],
  templateUrl: './authpage-connexion-form.component.html',
  styleUrl: './authpage-connexion-form.component.scss',
})
export class AuthpageConnexionFormComponent implements OnInit {
  emailMembers!: string[];
  emailValue: string = '';
  passwordValue: string = '123456789Pn!';
  pathForgotPassword: string = 'mot-de-passe-oublie';

  constructor(
    public selectedConnexionService: SelectedConnexionService,
    private router: Router,
    public usersDataService: UsersDataService,
  ) {}

  // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: FormMessageModel[] = [
    new FormMessageModel('', ''),
    new FormMessageModel('Au moins un des champs est incorrect', 'formMessageFalse'),
  ];

  ngOnInit(): void {
    this.emailMembers = UsersData.filter((user) => user.password === this.passwordValue).map(
      (user) => user.email,
    );
  }

  toggleSelectedKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.selectedConnexionService.toggleSelected();
    }
  }

  onSubmit(form: NgForm) {
    const userFind = this.isAuthenticationValid(form.value.email, form.value.password);

    if (userFind) {
      sessionStorage.setItem('user', JSON.stringify(userFind));

      if (userFind.type === 'student') {
        if (userFind.members.length > 1) {
          this.router.navigate([`espace-utilisateur/espace-membres/${userFind.email}`]);
        } else if (userFind.members.length === 1) {
          this.router.navigate([
            `espace-utilisateur/${userFind.members[0].memberName}/Présentation`,
          ]);
        }
      } else if (userFind.type === 'teacher') {
        this.router.navigate([`espace-utilisateur/espace-professeur/${userFind.email}`]);
      } else if (userFind.type === 'admin') {
        this.router.navigate(['espace-utilisateur/admin']);
      }

      form.resetForm();
    } else {
      this.isSubmitted = true;
      this.isFormValid = false;
    }
  }

  isAuthenticationValid(email: string, password: string): UsersModel | null {
    const userFind = this.usersDataService.UsersData().find((user) => user.email === email);

    if (userFind?.password === password) {
      return userFind;
    }

    return null;
  }
}
