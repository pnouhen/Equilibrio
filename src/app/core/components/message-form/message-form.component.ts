import { MessageForm } from "../../models/MessageForm.model";
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-message-form',
  imports: [],
  templateUrl: `./message-form.component.html`,
  styleUrl: `./message-form.component.scss`,
})
export class MessageFormComponent {
  isSubmitted = input.required<boolean>(); // Here for message-form.component.html
  isFormValid = input.required<boolean>();
  canSubmit = input.required<MessageForm>();
  cannotSubmit = input.required<MessageForm>();

  @Input() array!: MessageForm[];

  isFormValidText(): string {
    if (this.isFormValid()) {
      return this.canSubmit().text;
    }
    return this.cannotSubmit().text;
  }

  isFormValidClass(): string {
    if (this.isFormValid()) {
      return this.canSubmit().className;
    }
    return this.cannotSubmit().className;
  }
}
