import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedConnexion } from '../../../landing/pages/auth-Page/services/SelectedConnexion.service';
import { SelectedCityPlanning } from '../../../users/services/SelectedCityPlanning.service';
import { SelectedDay } from '../../../users/pages/admin-dashboard/pages/manage-places-times/services/SelectedDay.service';
import { SelectedStatut } from '../../../users/pages/admin-dashboard/pages/manage-users/services/SelectedStatut.service';
import { SelectedCategory } from '../../../users/pages/admin-dashboard/pages/manage-users/services/SelectedCategory.service';
import { SelectedGrade } from '../../../users/pages/admin-dashboard/pages/manage-users/services/SelectedGrade.service';
import { SelectedCityUsers } from '../../../users/pages/admin-dashboard/pages/manage-users/services/SelectedCityUsers.service';
import { SelectedCategoryUserDataContent } from '../../../users/pages/admin-dashboard/pages/manage-resources/services/SelectedCategoryUserDataContent.service';
@Component({
  selector: 'app-input-selected',
  imports: [],
  templateUrl: './input-selected.component.html',
  styleUrl: './input-selected.component.scss',
})
export class InputSelectedComponent {
  @Input() dataSelected!: string[];
  @Input() selected!:
    | SelectedConnexion
    | SelectedCityPlanning
    | SelectedDay
    | SelectedConnexion
    | SelectedStatut
    | SelectedCategory
    | SelectedGrade
    | SelectedCityUsers
    | SelectedCategoryUserDataContent;

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
