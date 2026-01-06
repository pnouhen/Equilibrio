import { CitiesService } from '../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CONDITIONSTRAINING } from '../../../landing/pages/locations-times/datas/ConditionsTraining.data';

import { CityInfo } from '../../../landing/pages/locations-times/models/CityInfo.model';
import { TrainingSchedule } from '../../../landing/pages/locations-times/models/TrainingSchedule.model';

import { LocationsTimesLocationMapComponent } from '../locations-times-location-map/locations-times-location-map.component';
import { UsersModel } from '../../../datas-Back-end/models/Users.model';

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

  constructor(
    private route: ActivatedRoute,
    public citiesService: CitiesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve ID
    this.id = this.route.snapshot.paramMap.get('city');

    // Retrieve city info
    this.info = this.id
      ? this.citiesService.Cities().find((city) => city.id === this.id)
      : undefined;

    if (!this.info) {
      this.router.navigate(['page-introuvable']);
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
          (conditionTraining) => conditionTraining.id === conditionCategory
        );
        if (!found) return conditionCategory;
        return `${this.getStarCountByConditionIndex(index)} ${found.text}`;
      }),
    }));
  }

  // Admin view Cards after create or Update
  routerLink(): string {
    const rawUser = sessionStorage.getItem('user');
    const user: UsersModel | null = rawUser ? JSON.parse(rawUser) : null;
    if (rawUser && user?.type === 'admin') {
      return '/espace-utilisateur/admin/tableau-de-bord/gestion-lieux-horaires';
    } else {
      return '/lieux-et-horaires';
    }
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

  numberPhoneLink(phone: string | undefined): string {
    if (!phone) return '';
    return phone.replace(/\D/g, '').replace(/^0/, '');
  }
}
