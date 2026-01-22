import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SelectedConnexionService } from '../../../landing/pages/auth-Page/services/SelectedConnexion.service';
import { SelectedCityTrainingAttendanceService } from '../../../users/pages/training-attendance/services/SelectedCityTrainingAttendanceService';
import { SelectedDayService } from '../../../users/pages/admin-pages/pages/manage-places-times/services/SelectedDay.service';
import { SelectedStatutService } from '../../../users/pages/admin-pages/pages/manage-users/services/SelectedStatut.service';
import { SelectedCategoryService } from '../../../users/pages/admin-pages/pages/manage-users/services/SelectedCategory.service';
import { SelectedGradeService } from '../../../users/pages/admin-pages/pages/manage-users/services/SelectedGrade.service';
import { SelectedCityUsersService } from '../../../users/pages/admin-pages/pages/manage-users/services/SelectedCityUsers.service';
import { SelectedCategoryUserDataContentService } from '../../../users/pages/admin-pages/pages/manage-resources/services/SelectedCategoryUserDataContent.service';
@Component({
  selector: 'app-input-selected',
  imports: [],
  templateUrl: './input-selected.component.html',
  styleUrl: './input-selected.component.scss',
})
export class InputSelectedComponent {
  @Input() dataSelected!: string[];
  @Input() selected!:
    | SelectedConnexionService
    | SelectedCityTrainingAttendanceService
    | SelectedDayService
    | SelectedStatutService
    | SelectedCategoryService
    | SelectedGradeService
    | SelectedCityUsersService
    | SelectedCategoryUserDataContentService;

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
