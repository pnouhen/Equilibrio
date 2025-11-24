import { MessageForm } from '../../../../models/MessageForm.model';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { checkEmail } from '../../../../services/checkEmail';
import { MessageFormComponent } from '../../../../components/message-form/message-form.component';

@Component({
  selector: 'app-authpage-inscription-form',
  imports: [FormsModule, MessageFormComponent],
  templateUrl: './authpage-inscription-form.component.html',
  styleUrl: './authpage-inscription-form.component.scss',
})
export class AuthpageInscriptionFormComponent {
  userEmail!: string;

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm("Email envoyé", 'messageFormTrue'),
    new MessageForm("Email non valide", 'messageFormFalse'),
  ];
  onSubmit(): void {
          this.isSubmitted = true
    if (checkEmail.test(this.userEmail)) {
      this.isFormValid = true

      this.userEmail = ""
    } else {
      this.isFormValid = false
    }
  }
}
