import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedConnexion } from '../../../landing/pages/auth-Page/services/SelectedConnexion.service';
import { SelectedCity } from '../../../users/services/SelectedCity.service';
import { SelectedDay } from '../../../users/pages/admin-dashboard/pages/manage-places-times/services/SelectedDay.service';
import { Condition } from '../../../landing/pages/locations-times/models/Condition.model';
@Component({
  selector: 'app-input-selected',
  imports: [],
  templateUrl: './input-selected.component.html',
  styleUrl: './input-selected.component.scss',
})
export class InputSelectedComponent {
  @Input() dataSelectedString!: string[];
  @Input() dataSelectedConditions!: Condition[];
  @Input() selected!: SelectedConnexion | SelectedCity | SelectedDay | SelectedConnexion;

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
