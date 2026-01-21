import { TrainingScheduleAddModel } from './../../models/TrainingScheduleAdd.model';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../../../../../../../core/services/cities.service';
import { SelectedCityUsers } from '../../services/SelectedCityUsers.service';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { CategoriesData } from '../../../../datas/Categories.data';
import { CityInfoModel } from '../../../../../../../core/models/CityInfo.model';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { TrainingCardComponent } from '../../../../../../../core/components/training-card/training-card.component';

@Component({
  selector: 'app-manage-users-form-members-training',
  imports: [FormsModule, InputSelectedComponent, FormMessageComponent, TrainingCardComponent],
  templateUrl: './manage-users-form-members-training.component.html',
  styleUrl: './manage-users-form-members-training.component.scss',
})
export class ManageUsersFormMembersTrainingComponent implements OnInit {
  @Input() categoryText!: string;
  @Input() citiesName!: string[];

  @Input() trainingSchedulesDisplay: TrainingScheduleCityModel[] = [];
  @Output() trainingSchedulesDisplayChange = new EventEmitter<TrainingScheduleCityModel[]>();

  citySelected: string = 'Sélectionner';
  schedulesSelected: TrainingScheduleAddModel[] = [];

  // Managing the display of the message after submit
  @Input() isSubmitted: boolean = false;
  @Output() isSubmittedChange = new EventEmitter<boolean>();
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel('Entraînement(s) ajouté(s)', 'formMessageTrue'),
    new FormMessageModel('Au moins un des champs est manquant', 'formMessageFalse'),
  ];

  constructor(public citiesService: CitiesService, public selectedCityUsers: SelectedCityUsers) {}

  ngOnInit(): void {
    this.blockCityChoice();
  }

  blockCityChoice(): boolean {
    const choiceCategoryText = CategoriesData.flatMap((category) => category.value);

    if (choiceCategoryText.includes(this.categoryText)) {
      return true;
    }

    return false;
  }

  toggleCityUsers(event: Event) {
    event.preventDefault();

    if (this.blockCityChoice()) this.selectedCityUsers.toggleSelected(event);
  }

  generateSchedules = (newCity: string): void => {
    // Search city
    const city = this.citiesService.Cities().find((city) => city.city === newCity);

    // Search category of schedules
    const categorySchedule = CategoriesData.find(
      (category) => category.value === this.categoryText
    );

    // Udpate schedulesSelected
    const newSchedulesSelected = city?.TrainingCategory.find((card) =>
      card.categories.find((category) => category === categorySchedule?.id)
    );
    if (newSchedulesSelected) {
      this.schedulesSelected = newSchedulesSelected.trainingSchedule.map((schedule) => {
        return {
          trainingSchedule: schedule,
          add: false,
        };
      });
    }
  };

  onSubmitSchedule() {
    this.isSubmitted = true;

    // Filter schedule to add
    const addSchedules = this.schedulesSelected
      .filter((schedule) => schedule.add === true)
      .map((schedule) => schedule.trainingSchedule);

    if (addSchedules.length > 0) {
      // Search if city is already add
      const isCitySelectedCities = this.trainingSchedulesDisplay.find(
        (training) => training.city === this.citySelected
      );

      if (!isCitySelectedCities) {
        this.isFormValid = true;
        this.isSubmittedChange.emit(true);

        // Update trainingSchedulesDisplay
        const trainingSchedulesCityCard: TrainingScheduleCityModel = {
          trainingSchedule: addSchedules,
          city: this.citySelected,
        };
        this.trainingSchedulesDisplayChange.emit([
          ...this.trainingSchedulesDisplay,
          trainingSchedulesCityCard,
        ]);

        // Reset all elements
        this.schedulesSelected = [];
        this.citySelected = 'Sélectionner';
      } else {
        this.isFormValid = false;
        this.formMessage[1].text = 'La ville est déjà enregistrée';
      }
    } else {
      this.isFormValid = false;
      this.formMessage[1].text = 'Au moins un des champs est manquant';
    }
  }

  deleteTrainingSchedule = (city: string) => {
    this.trainingSchedulesDisplay = this.trainingSchedulesDisplay.filter(
      (training) => training.city !== city
    );
    this.trainingSchedulesDisplayChange.emit(this.trainingSchedulesDisplay);
  };
}
