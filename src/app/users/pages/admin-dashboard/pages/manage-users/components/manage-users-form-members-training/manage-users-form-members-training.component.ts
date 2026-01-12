import { TrainingScheduleAddModel } from './../../models/TrainingScheduleAdd.model';
import { FormsModule } from '@angular/forms';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CitiesService } from '../../../../../../../core/services/cities.service';
import { SelectedCityUsers } from '../../services/SelectedCityUsers.service';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { CategoriesScheduleData } from '../../../../datas/CategoriesSchedule.data';
import { CityInfo } from '../../../../../../../core/models/CityInfo.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { TrainingCardComponent } from '../../../../../../../core/components/training-card/training-card.component';

@Component({
  selector: 'app-manage-users-form-members-training',
  imports: [FormsModule, InputSelectedComponent, MessageFormComponent, TrainingCardComponent],
  templateUrl: './manage-users-form-members-training.component.html',
  styleUrl: './manage-users-form-members-training.component.scss',
})
export class ManageUsersFormMembersTrainingComponent implements OnInit {
  @Input() categoryText!: string;

  @Input() trainingSchedulesDisplay: TrainingScheduleCityModel[] = [];
  @Output() trainingSchedulesDisplayChange = new EventEmitter<TrainingScheduleCityModel[]>();

  citySelected: string = 'Sélectionner';
  citiesSelected!: CityInfo[];
  citiesName!: string[];
  schedulesSelected: TrainingScheduleAddModel[] = [];

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('Entraînement(s) ajouté(s)', 'messageFormTrue'),
    new MessageForm('Au moins un des champs est manquant', 'messageFormFalse'),
  ];

  constructor(public citiesService: CitiesService, public selectedCityUsers: SelectedCityUsers) {}
  ngOnInit(): void {
    this.citiesName = this.citiesService.Cities().map((city) => city.city);
    this.blockCityChoice();
  }

  blockCityChoice(): boolean {
    const choiceCategoryText = CategoriesScheduleData.flatMap((category) => category.value);

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
    const city = this.citiesService.Cities().find((city) => city.city === newCity);
    const categorSchedule = CategoriesScheduleData.find(
      (category) => category.value === this.categoryText
    );

    const newSchedulesSelected = city?.TrainingCategory.find((card) =>
      card.categories.find((category) => category === categorSchedule?.id)
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

  onSubmitSchedule(event: Event) {
    event.preventDefault();
    this.isSubmitted = true;

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

        // Update trainingSchedulesDisplay
        const trainingSchedulesCityCard: TrainingScheduleCityModel = {
          trainingSchedule: addSchedules,
          city: this.citySelected,
        };
        this.trainingSchedulesDisplay = [
          ...this.trainingSchedulesDisplay,
          trainingSchedulesCityCard,
        ];
        this.trainingSchedulesDisplayChange.emit(this.trainingSchedulesDisplay);
      } else {
        this.isFormValid = false;
        this.formMessage[1].text = 'La ville est déjà enregistrée';
      }
    } else {
      this.isFormValid = false;
      this.formMessage[1].text = 'Au moins un des champs est manquant';
    }

    this.schedulesSelected = [];
    this.citySelected = 'Sélectionner';
  }

  deleteTrainingSchedule = (city: string) => {
    this.trainingSchedulesDisplay = this.trainingSchedulesDisplay.filter(
      (training) => training.city !== city
    );
    this.trainingSchedulesDisplayChange.emit(this.trainingSchedulesDisplay);
  };
}
