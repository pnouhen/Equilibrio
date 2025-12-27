import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedConnexion } from '../../../landing/pages/auth-Page/services/SelectedConnexion.service';
import { SelectedCity } from '../../../dashboard/services/SelectedCity.service';

@Component({
  selector: 'app-input-selected',
  imports: [],
  templateUrl: './input-selected.component.html',
  styleUrl: './input-selected.component.scss',
})
export class InputSelectedComponent {
  @Input() dataSelected!: string[];
  @Input() selected!: SelectedConnexion | SelectedCity;

  @Output() inputValueChange = new EventEmitter<string>();
  @Input() onAction?: (newValue: string) => void;

  // Sends the input value to the parent
  onSelected(newValue: string) {
    this.inputValueChange.emit(newValue);
    this.selected.closeSelected();

    this.onAction?.(newValue);
  }

  onKeydownSelected(event: KeyboardEvent, newValue: string) {
    if (event.key === 'Enter') {
      this.onSelected(newValue);
    }
  }
}
