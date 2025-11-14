import { CONDITIONSTRAINING } from './../data/ConditionsTraining.data';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CITIES } from '../data/CitiesInfo.data';
import { CityInfo } from '../models/CityInfo.model';
import { TrainingSchedule } from '../models/TrainingSchedule.model';

@Component({
  selector: 'app-locations-times-location',
  imports: [RouterLink],
  templateUrl: './locations-times-location.component.html',
  styleUrl: './locations-times-location.component.scss',
})
export class LocationsTimesLocationComponent implements OnInit {
  id: string | null = null;
  info: CityInfo | undefined;
  categories!: { title: string; trainingSchedule: TrainingSchedule[]; conditions: string[] }[];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve the ID
    this.id = this.route.snapshot.paramMap.get('city');

    // Retrieve the corresponding city
    if (this.id) {
      this.info = CITIES.find((city) => city.id === this.id);
    }

    // Transform categories and extract unique conditions from schedules
    this.categories =
      this.info?.TrainingCategory.map((category) => ({
        title: category.title,
        trainingSchedule: category.trainingSchedule,
        conditions: category.trainingSchedule
          // Keep only the schedules that have a defined condition
          .filter((schedule: any) => Boolean(schedule.condition))
          // Extracts just the value of the conditional property
          .map((schedule: any) => schedule.condition),
      })) || [];

    // Add stars to schedules whose condition matches those listed in the `conditions` table of `categories`
    this.categories.forEach((category) => {
      // Create a condition → stars lookup table
      const conditionsStars = category.conditions.map((condi, index) => {
        return { condition: condi, stars: this.getStarCountByConditionIndex(index) };
      });

      // Browse each schedule in the category
      category.trainingSchedule.forEach((schedule) => {
        // If the schedule has a condition, replace it with the stars
        if (schedule.condition) {
          const newScheduleCondi = conditionsStars.find(
            (condiSchedule) => condiSchedule.condition === schedule.condition
          );
          schedule.condition = newScheduleCondi?.stars;
        }
      });
    });
  }

  getStarCountByConditionIndex(index: number): string {
    return '*'.repeat(index + 1);
  }

  changeClassCategories(categoriesLength: number): string {
    console.log(categoriesLength);

    if (categoriesLength === 1) return 'categories oneCategory';
    if (categoriesLength === 2) return 'categories twoCategories';
    if (categoriesLength === 3) return 'categories threeCategories';
    if(categoriesLength === 4) return 'categories thridCategories'

    return 'categories';
  }

  getTextCondition(conditionText: string, categories: string[]): string {
    // Link the condition to the text
    const condition = CONDITIONSTRAINING.find((c) => c.condition === conditionText);

    if (condition) {
      // Find index for generate the number stars
      const index = categories.findIndex((c) => c === conditionText);
      return `${this.getStarCountByConditionIndex(index)} ${condition.text}`;
    }
    return '';
  }
}
