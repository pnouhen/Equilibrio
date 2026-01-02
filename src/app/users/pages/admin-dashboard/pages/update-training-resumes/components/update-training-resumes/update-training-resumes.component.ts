import { MessageFormService } from './../../../../../../../core/services/messageForm.service';
import { Component, OnInit } from '@angular/core';
import { ReturnAdminDashboardComponent } from '../../../../components/return-admin-dashboard/return-admin-dashboard.component';
import { TrainingResume } from '../../../../../../../landing/pages/home/models/TrainingResume.model';
import { CitiesService } from '../../../../../../../core/services/cities.service';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';

@Component({
  selector: 'app-update-training-resumes',
  imports: [ReturnAdminDashboardComponent, FormsModule, MessageFormComponent],
  templateUrl: './update-training-resumes.component.html',
  styleUrl: './update-training-resumes.component.scss',
})
export class UpdateTrainingResumesComponent implements OnInit {
  trainingResumes!: TrainingResume[];
  isSubmittedArray!: boolean[];
  isFormValidArray!: boolean[];
  formMessages: MessageForm[] = [
    new MessageForm('La date a été mise à jour', 'messageFormTrue'),
    new MessageForm('La date indiquée est incorrecte.', 'messageFormFalse'),
  ];
  constructor(public citiesService: CitiesService, public messageFormService: MessageFormService) {}

  ngOnInit(): void {
    this.trainingResumes = this.citiesService.TrainingResumes();

    // Initialize boolean MessageForm
    this.isSubmittedArray = this.messageFormService.createArrayBoolean(this.trainingResumes.length);
    this.isFormValidArray = this.messageFormService.createArrayBoolean(this.trainingResumes.length);
  }

  onSubmit(form: NgForm, index: number, place: string) {
    this.isSubmittedArray[index] = true;

    // Check year is good
    const [yearResume] = form.value.date.split('-');
    const currentYear = new Date().getFullYear();
    if (yearResume >= currentYear) {
      this.isFormValidArray[index] = true;

      const newCities = this.citiesService.Cities().map((city) => {
        if (city.city === place) {
          return { ...city, resume: form.value.date };
        }
        return city;
      });

      this.citiesService.Cities.set(newCities);
      sessionStorage.setItem('cities', JSON.stringify(newCities));
    } else {
      this.isFormValidArray[index] = false;
    }
  }
}
