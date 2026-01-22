import { FormMessageService } from '../../../../../../../core/services/FormMessage.service';
import { Component, OnInit } from '@angular/core';
import { ReturnAdminMenuComponent } from '../../../../components/return-admin-menu/return-admin-menu.component';
import { TrainingResume } from '../../../../../../../landing/pages/home/models/TrainingResume.model';
import { CitiesService } from '../../../../../../../core/services/Cities.service';
import { FormsModule, NgForm } from '@angular/forms';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';

@Component({
  selector: 'app-update-training-resumes',
  imports: [ReturnAdminMenuComponent, FormsModule, FormMessageComponent],
  templateUrl: './update-training-resumes.component.html',
  styleUrl: './update-training-resumes.component.scss',
})
export class UpdateTrainingResumesComponent implements OnInit {
  trainingResumes!: TrainingResume[];

  // Managing the display of the message after submit
  isSubmittedArray!: boolean[];
  isFormValidArray!: boolean[];
  formMessages: FormMessageModel[] = [
    new FormMessageModel('La date a été mise à jour', 'messageFormTrue'),
    new FormMessageModel('La date indiquée est incorrecte.', 'messageFormFalse'),
  ];
  
  constructor(
    public citiesService: CitiesService,
    public formMessageService: FormMessageService,
  ) {}

  ngOnInit(): void {
    this.trainingResumes = this.citiesService.TrainingResumes();

    // Initialize boolean FormMessage
    this.isSubmittedArray = this.formMessageService.createArrayBoolean(this.trainingResumes.length);
    this.isFormValidArray = this.formMessageService.createArrayBoolean(this.trainingResumes.length);
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
