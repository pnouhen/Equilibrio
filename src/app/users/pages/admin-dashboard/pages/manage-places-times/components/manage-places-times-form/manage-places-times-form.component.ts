import { TrainingCategory } from './../../../../../../../landing/pages/locations-times/models/TrainingCategory.model';
import { CitiesService } from './../../../../../../../core/services/cities.service';
import { Component, OnInit } from '@angular/core';
import { UpdatePhoneNumbers } from '../../../../../../../core/services/allowOnlyNumbers.service';
import { SelectedDay } from '../../services/SelectedDay.service';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { Condition } from '../../../../../../../landing/pages/locations-times/models/Condition.model';
import { SelectedCondtion } from '../../services/SelectedCondtion.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-manage-places-times-form',
  templateUrl: './manage-places-times-form.component.html',
  styleUrls: ['./manage-places-times-form.component.scss'],
  imports: [InputSelectedComponent, FormsModule],
})
export class ManagePlacesTimesFormComponent implements OnInit {
  phoneNumber: string = '';
  trainingCategory!: TrainingCategory[];
  days!: string[];
  day: string = 'Sélectionner un jour';
  conditions!: Condition[];
  conditionSelect: string = '';

  constructor(
    public updatePhoneNumbers: UpdatePhoneNumbers,
    public citiesService: CitiesService,
    public selectedDay: SelectedDay,
    public selectedCondtion: SelectedCondtion
  ) {}

  ngOnInit(): void {
    this.trainingCategory = this.citiesService.Cities()[0].TrainingCategory;
    this.conditions = this.citiesService.Condition();

    this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  }

  formatPhoneNumber(event: Event) {
    this.phoneNumber = this.updatePhoneNumbers.formatPhoneNumber(
      (event.target as HTMLInputElement).value
    );
  }
}
