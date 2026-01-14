import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { CitiesService } from '../../../../../../../core/services/cities.service';
import { SelectedDay } from '../../services/SelectedDay.service';
import { SelectedCondtion } from '../../services/SelectedCondtion.service';
import { FormsModule } from '@angular/forms';
import { TrainingSchedule } from '../../../../../../../core/models/TrainingSchedule.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';

@Component({
  selector: 'app-manage-places-times-form-schedule',
  imports: [InputSelectedComponent, FormsModule, MessageFormComponent],
  templateUrl: './manage-places-times-form-schedule.component.html',
  styleUrl: './manage-places-times-form-schedule.component.scss',
})
export class ManagePlacesTimesFormScheduleComponent implements OnInit {
  @Output() schedulesChange = new EventEmitter<TrainingSchedule[]>();
  @Input() schedules: TrainingSchedule[] = [];

  days!: string[];
  day: string = 'Sélectionner';
  startTime: string = '';
  endTime: string = '';
  conditions!: string[];
  conditionSelect: string = '';

  // Message Form
  @Input() isSubmitted: boolean = false;
  @Output() isSubmittedChange = new EventEmitter<boolean>()
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm("L'horaire a bien été ajouté.", 'messageFormTrue'),
    new MessageForm(
      'Le jour ou l’une des heures (début ou fin) n’est pas indiquée.',
      'messageFormFasle'
    ),
  ];

  constructor(
    public citiesService: CitiesService,
    public selectedDay: SelectedDay,
    public selectedCondtion: SelectedCondtion
  ) {}

  ngOnInit(): void {
    this.conditions = this.citiesService.Condition();
    this.days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];

    // All booleans are false
    this.selectedDay.isSelectedDisplay = false;
    this.selectedCondtion.isSelectedDisplay = false;
    this.isSubmitted = false;
  }

  createSchedule() {
    this.isSubmitted = true;
    this.isSubmittedChange.emit(true)

    if (this.days.includes(this.day) && this.startTime !== '' && this.endTime !== '') {
      this.isFormValid = true;

      const newSchedule = {
        day: this.day,
        startTime: this.startTime,
        endTime: this.endTime,
        condition: this.conditionSelect,
      };

      // Update all Arrays
      const newSchedules = [...this.schedules, newSchedule];
      this.schedules = newSchedules;
      this.schedulesChange.emit(newSchedules);

      // If Condition
      if (!this.conditions.includes(this.conditionSelect)) {
        const newConditions = [...this.conditions, this.conditionSelect];
        this.conditions = newConditions;
        this.citiesService.Condition.set(newConditions);
      }

      // Reset all inputs
      this.day = '';
      this.startTime = '';
      this.endTime = '';
      this.conditionSelect = '';
    } else {
      this.isFormValid = false;
    }
  }

  deleteSchedule(scheduleDelete: TrainingSchedule) {
    const newSchedules = this.schedules.filter((schedule) => schedule !== scheduleDelete);
    this.schedules = newSchedules;
    this.schedulesChange.emit(newSchedules);
  }
}
