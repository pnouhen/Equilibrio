import { UpdateCategoriesLocationService } from './../../../../../../../core/services/updateCategoriesLocation.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManagePlacesTimesFormScheduleComponent } from '../manage-places-times-form-schedule/manage-places-times-form-schedule.component';
import { TrainingSchedule } from '../../../../../../../core/models/TrainingSchedule.model';
import { TrainingCategory } from '../../../../../../../core/models/TrainingCategory.model';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { TrainingCategoryDisplayModel } from '../../../../../../../core/models/TrainingCategory-display.model';
import { CateogriesScheduleModel } from '../../models/CategoriesSchedule.model';
import { CategoriesScheduleData } from '../../../../datas/CategoriesSchedule.data';
import { TrainingCardComponent } from '../../../../../../../core/components/training-card/training-card.component';

@Component({
  selector: 'app-manage-places-times-form-category',
  imports: [FormsModule, ManagePlacesTimesFormScheduleComponent, MessageFormComponent, TrainingCardComponent],
  templateUrl: './manage-places-times-form-category.component.html',
  styleUrl: './manage-places-times-form-category.component.scss',
})
export class ManagePlacesTimesFormCategoryComponent implements OnInit {
  @Output() categoriesChange = new EventEmitter<TrainingCategory[]>();
  @Input() categories: TrainingCategory[] = [];

  @Output() categoriesDisplayChange = new EventEmitter<TrainingCategoryDisplayModel[]>();
  @Input() categoriesDisplay: TrainingCategoryDisplayModel[] = [];

  titleCategory: string = '';
  categoriesSchedule!: CateogriesScheduleModel[] ;
  idUpdate: string = "";
  schedules: TrainingSchedule[] = [];
  isSubmittedSchedule: boolean = false

  // Form Message
  @Input() isSubmitted: boolean = false;
  @Output() isSubmittedChange = new EventEmitter<boolean>()
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('Entraînement créé', 'messageFormTrue'),
    new MessageForm('Titre absent ou aucun horaire créé', 'messageFormFalse'),
  ];

  constructor(public updateCategoriesLocationService: UpdateCategoriesLocationService) {}

  ngOnInit(): void {
    this.categoriesSchedule = CategoriesScheduleData.map(category => ({
      ...category,
      add: false
    }))
  }

  createCategories() {
    this.isSubmitted = true;
    this.isSubmittedChange.emit(true)
    
    const isSelectedCategorySchedule = this.categoriesSchedule.find(
      (category) => category.add === true
    );

    if (this.schedules.length > 0 && this.titleCategory !== '' && isSelectedCategorySchedule) {
      this.isFormValid = true;
      this.isSubmittedSchedule = false

      // Creation of categoriesSheduleText
      const categoriesSchedulePresent = this.categoriesSchedule.filter((category) => category.add);
      const categoriesSheduleText = categoriesSchedulePresent.flatMap((category) => category.value);

      if (this.idUpdate !== "") {
        const categoryUpdate = this.categories.find((category) => category.id === this.idUpdate);

        if (categoryUpdate) {
          categoryUpdate.title = this.titleCategory;
          categoryUpdate.categories = categoriesSheduleText;
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
          categories: categoriesSheduleText,
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
      this.categoriesSchedule = this.categoriesSchedule.map((category) => ({
        ...category,
        add: false,
      }));
    } else {
      this.isFormValid = false;
    }
  }

  deleteCategories = (id: string) => {
    this.categoriesDisplay = this.categoriesDisplay.filter((category) => category.id !== id);
    this.categories = this.categories.filter((category) => category.id !== id);
  }

   updateCategories = (categoryUpdate: TrainingCategoryDisplayModel) => {
    const category = this.categories.find((category) => category.id === categoryUpdate.id);

    if (category) {
      this.titleCategory = category.title;
      this.categoriesSchedule = this.categoriesSchedule.map((itemCategorySchedule) => ({
        ...itemCategorySchedule,
        add: category.categories.some((itemCategory) =>
          itemCategorySchedule.value.includes(itemCategory)
        ),
      }));

      this.schedules = category.trainingSchedule;
      this.idUpdate = category.id;
    }
  }
}
