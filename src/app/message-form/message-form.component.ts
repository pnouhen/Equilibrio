import { MessageForm } from '../models/messageForm';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message-form',
  imports: [],
  templateUrl: `./message-form.component.html`,
  styleUrl: `./message-form.component.scss`,
})
export class MessageFormComponent {
  @Input() isSubmitted!: boolean;
  @Input() isFormValid!: boolean;
  @Input() array!: MessageForm[];

  isFormValidText(): string {
    if (this.isFormValid) {
      return this.array[0].text;
    }
    return this.array[1].text;
  }

  isFormValidClass(): string {
    if (this.isFormValid) {
      return this.array[0].className;
    }
    return this.array[1].className;
  }
}
