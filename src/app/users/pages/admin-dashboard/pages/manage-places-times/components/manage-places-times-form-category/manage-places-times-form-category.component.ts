import { UpdateCategoriesLocationService } from './../../../../../../../core/services/updateCategoriesLocation.service';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManagePlacesTimesFormScheduleComponent } from '../manage-places-times-form-schedule/manage-places-times-form-schedule.component';
import { TrainingSchedule } from '../../../../../../../core/models/TrainingSchedule.model';
import { TrainingCategory } from '../../../../../../../core/models/TrainingCategory.model';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { TrainingCategoryDisplayModel } from '../../../../../../../core/models/TrainingCategory-display.model';

@Component({
  selector: 'app-manage-places-times-form-category',
  imports: [FormsModule, ManagePlacesTimesFormScheduleComponent, MessageFormComponent],
  templateUrl: './manage-places-times-form-category.component.html',
  styleUrl: './manage-places-times-form-category.component.scss',
})
export class ManagePlacesTimesFormCategoryComponent {
  @Output() categoriesChange = new EventEmitter<TrainingCategory[]>();
  @Input() categories: TrainingCategory[] = [];

  @Output() categoriesDisplayChange = new EventEmitter<TrainingCategoryDisplayModel[]>();
  @Input() categoriesDisplay: TrainingCategoryDisplayModel[] = [];

  titleCategory: string = '';
  idUpdate!: string;
  schedules: TrainingSchedule[] = [];

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('Entraînement créé', 'messageFormTrue'),
    new MessageForm('Titre absent ou aucun horaire créé', 'messageFormFalse'),
  ];

  constructor(public updateCategoriesLocationService: UpdateCategoriesLocationService) {}

  createCategories() {
    this.isSubmitted = true;

    if (this.schedules.length > 0 && this.titleCategory !== '') {
      this.isFormValid = true;

      if (this.idUpdate) {
        const categoryUpdate = this.categories.find((category) => category.id === this.idUpdate);

        if (categoryUpdate) {
          categoryUpdate.title = this.titleCategory;
          categoryUpdate.trainingSchedule = this.schedules;

          this.categoriesDisplay = this.updateCategoriesLocationService.update(this.categories);
          this.categoriesDisplayChange.emit(
            this.updateCategoriesLocationService.update(this.categories)
          );
        }

        this.idUpdate = '';
      } else {
        const newCategory = {
          id: `${new Date()}`,
          title: this.titleCategory,
          trainingSchedule: this.schedules,
        };

        const newCategories = [...this.categories, newCategory];

        this.categoriesChange.emit(newCategories);

        this.categoriesDisplay = this.updateCategoriesLocationService.update(newCategories);
        this.categoriesDisplayChange.emit(
          this.updateCategoriesLocationService.update(newCategories)
        );
      }
      // Reset all items
      this.titleCategory = '';
      this.schedules = [];
    } else {
      this.isFormValid = false;
    }
  }

  deleteCategories(id: string) {
    this.categoriesDisplay = this.categoriesDisplay.filter((category) => category.id !== id);
    this.categories = this.categories.filter((category) => category.id !== id);
  }

  updateCategories(categoryUpdate: TrainingCategoryDisplayModel) {
    const category = this.categories.find((category) => category.id === categoryUpdate.id);

    if (category) {
      this.titleCategory = category.title;
      this.schedules = category.trainingSchedule;
      this.idUpdate = category.id;
    }
  }
}
