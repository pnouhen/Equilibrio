import { CONDITIONSTRAINING } from './../data/ConditionsTraining.data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CITIES } from '../data/CitiesInfo.data';
import { CityInfo } from '../models/CityInfo.model';
import { TrainingSchedule } from '../models/TrainingSchedule.model';
import { LocationsTimesLocationMapComponent } from '../locations-times-location-map/locations-times-location-map.component';

@Component({
  selector: 'app-locations-times-location',
  imports: [RouterLink, LocationsTimesLocationMapComponent],
  templateUrl: './locations-times-location.component.html',
  styleUrl: './locations-times-location.component.scss',
})
export class LocationsTimesLocationComponent implements OnInit {
  id: string | null = null;
  info: CityInfo | undefined;
  categories!: { title: string; trainingSchedule: TrainingSchedule[]; conditions: string[] }[];
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve ID
    this.id = this.route.snapshot.paramMap.get('city');

    // Retrieve city info
    this.info = this.id ? CITIES.find((city) => city.id === this.id) : undefined;

    if (!this.info) {
      this.categories = [];
      return;
    }

    // Build categories
    this.categories = this.info.TrainingCategory.map((category) => {
      const conditions = category.trainingSchedule
        // Keep only the objects that have a defined condition
        .filter((schedule) => Boolean(schedule.condition))
        // Transform the list to retrieve only the condition value
        .map((schedule) => schedule.condition!);

      return {
        title: category.title,
        trainingSchedule: category.trainingSchedule.map((s) => ({ ...s })),
        conditions: [...conditions],
      };
    });

    // Add stars to each schedule
    this.categories = this.categories.map((category) => {
      // Transforming the conditions → adding the stars
      const conditionsStars = category.conditions.map((condi, index) => ({
        condition: condi,
        stars: this.getStarCountByConditionIndex(index),
      }));

      // Transforming schedules → replace the condition with asterisks
      const newTrainingSchedule = category.trainingSchedule.map((schedule) => {
        if (!schedule.condition) return { ...schedule };

        // Search for matching under Stars conditions
        const found = conditionsStars.find((c) => c.condition === schedule.condition);
        return { ...schedule, condition: found?.stars || schedule.condition };
      });

      return {
        ...category,
        trainingSchedule: newTrainingSchedule,
      };
    });

    // Transform conditions into text
    this.categories = this.categories.map((category) => ({
      ...category,
      conditions: category.conditions.map((conditionCategory, index) => {
        const found = CONDITIONSTRAINING.find(
          (conditionTraining) => conditionTraining.condition === conditionCategory
        );
        if (!found) return conditionCategory;
        return `${this.getStarCountByConditionIndex(index)} ${found.text}`;
      }),
    }));
    console.log(this.info)
  }

  getStarCountByConditionIndex(index: number): string {
    return '*'.repeat(index + 1);
  }

  changeClassCategories(categoriesLength: number): string {
    if (categoriesLength === 1) return 'categories oneCategory';
    if (categoriesLength === 2) return 'categories twoCategories';
    if (categoriesLength === 3) return 'categories threeCategories';
    if (categoriesLength === 4) return 'categories thridCategories';

    return 'categories';
  }
}
