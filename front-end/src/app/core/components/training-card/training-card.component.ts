import { Component, Input } from '@angular/core';
import { TrainingCategoryDisplayModel } from '../../models/TrainingCategoryDisplay.model';
import { TrainingScheduleCityModel } from '../../../users/pages/admin-pages/pages/manage-users/models/TrainingScheduleCity.model';

@Component({
  selector: 'app-training-card',
  imports: [],
  templateUrl: './training-card.component.html',
  styleUrl: './training-card.component.scss',
})
export class TrainingCardComponent {
  @Input() cards!: TrainingCategoryDisplayModel[] | TrainingScheduleCityModel[];

  @Input() isUpdate: boolean = false;
  
  @Input()
  onUpdateCategory?: (category: TrainingCategoryDisplayModel) => void;

  @Input()
  onUpdateCity?: (city: TrainingScheduleCityModel) => void;

  @Input() isDelete: boolean = false;

  @Input()
  onDeleteCategory?: (id: string) => void;

  @Input()
  onDeleteCity?: (city: string) => void;

  @Input() isCondition: boolean = true

  @Input() isCategories: boolean = false;
}
