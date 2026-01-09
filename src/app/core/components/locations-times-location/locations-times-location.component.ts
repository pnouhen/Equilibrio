import { UpdateCategoriesLocationService } from './../../services/updateCategoriesLocation.service';
import { CitiesService } from '../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CityInfo } from '../../models/CityInfo.model';
import { TrainingSchedule } from '../../models/TrainingSchedule.model';

import { LocationsTimesLocationMapComponent } from '../locations-times-location-map/locations-times-location-map.component';
import { UsersModel } from '../../../datas-Back-end/models/Users.model';
import { TrainingCategoryDisplayModel } from '../../models/TrainingCategory-display.model';

@Component({
  selector: 'app-locations-times-location',
  imports: [RouterLink, LocationsTimesLocationMapComponent],
  templateUrl: './locations-times-location.component.html',
  styleUrl: './locations-times-location.component.scss',
})
export class LocationsTimesLocationComponent implements OnInit {
  id: string | null = null;
  info: CityInfo | undefined;
  categories!: TrainingCategoryDisplayModel[];

  constructor(
    private route: ActivatedRoute,
    public citiesService: CitiesService,
    private router: Router,
    private updateCategoriesLocationService: UpdateCategoriesLocationService
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

    this.categories = this.updateCategoriesLocationService.update(this.info.TrainingCategory);
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
