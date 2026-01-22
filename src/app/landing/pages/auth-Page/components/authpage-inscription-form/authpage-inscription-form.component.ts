import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { checkEmail } from '../../../../../core/services/CheckEmail';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';

@Component({
  selector: 'app-authpage-inscription-form',
  imports: [FormsModule, FormMessageComponent],
  templateUrl: './authpage-inscription-form.component.html',
  styleUrl: './authpage-inscription-form.component.scss',
})
export class AuthpageInscriptionFormComponent {
  userEmail!: string;

  // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: FormMessageModel[] = [
    new FormMessageModel('Email envoyé', 'formMessageTrue'),
    new FormMessageModel('Email non valide', 'formMessageFalse'),
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
