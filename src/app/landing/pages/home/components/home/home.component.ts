import { TrainingResume } from '../../models/TrainingResume.model';
import { Component, OnInit } from '@angular/core';
import { HomeSlidesShowComponent } from '../home-slides-show/home-slides-show.component';

@Component({
  selector: 'app-home',
  imports: [HomeSlidesShowComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  trainingResumes!: TrainingResume[];

  ngOnInit(): void {
    this.trainingResumes = [
      new TrainingResume('Limoges', 'lundi 25 août 2025'),
      new TrainingResume('Tulle', 'samedi 30 août 2025'),
      new TrainingResume('Couzeix', 'lundi 01 sept. 2025'),
      new TrainingResume('Brive', 'lundi 01 sept. 2025'),
      new TrainingResume('Gueret', 'mardi 02 sept. 2025'),
      new TrainingResume('Saint-Junien', 'mercredi 03 sept. 2025'),
      new TrainingResume('La Souterraine', 'samedi 06 sept.2025'),
      new TrainingResume('Panazol', 'samedi 13 sept.2025'),
    ];
  }
}
