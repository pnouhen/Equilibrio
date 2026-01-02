import { CitiesService } from './../../../../../core/services/cities.service';
import { Component, OnInit } from '@angular/core';
import { HomeSlidesShowComponent } from '../home-slides-show/home-slides-show.component';
import { TrainingResume } from '../../models/TrainingResume.model';

@Component({
  selector: 'app-home',
  imports: [HomeSlidesShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  trainingResumes!: TrainingResume[];

  constructor(public citiesService: CitiesService) {}

  ngOnInit(): void {
    this.trainingResumes = this.citiesService.TrainingResumes().map((city)=> ({
      place: city.place,
      day: this.formattedDate(city.day)
    }))
  }

  formattedDate(value: string): string {
    const [year, month, day] = value.split('-');

    const date = new Date(Number(year), Number(month) - 1, Number(day));

    const formatted = new Intl.DateTimeFormat('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).format(date);

    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  }
}
