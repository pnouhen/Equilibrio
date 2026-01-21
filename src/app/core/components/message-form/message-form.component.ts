import { FormMessageModel } from '../../models/FormMessage.model';
import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-form-message',
  imports: [],
  templateUrl: `./message-form.component.html`,
  styleUrl: `./message-form.component.scss`,
})
export class FormMessageComponent {
  isFormValid = input.required<boolean>();
  canSubmit = input.required<FormMessageModel>();
  cannotSubmit = input.required<FormMessageModel>();

  @Input() array!: FormMessageModel[];

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
