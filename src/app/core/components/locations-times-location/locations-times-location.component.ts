import { UpdateCategoriesLocationService } from '../../services/UpdateCategoriesLocation.service';
import { CitiesService } from '../../services/cities.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { CityInfoModel } from '../../models/CityInfo.model';

import { LocationsTimesLocationMapComponent } from '../locations-times-location-map/locations-times-location-map.component';
import { UsersModel } from '../../../datas-Back-end/models/Users.model';
import { TrainingCategoryDisplayModel } from '../../models/TrainingCategoryDisplay.model';
import { TrainingCardComponent } from '../training-card/training-card.component';

@Component({
  selector: 'app-locations-times-location',
  imports: [RouterLink, LocationsTimesLocationMapComponent, TrainingCardComponent],
  templateUrl: './locations-times-location.component.html',
  styleUrl: './locations-times-location.component.scss',
})
export class LocationsTimesLocationComponent implements OnInit {
  id: string | null = null;
  citiyInfo: CityInfoModel | undefined;
  categories!: TrainingCategoryDisplayModel[];

  constructor(
    private route: ActivatedRoute,
    public citiesService: CitiesService,
    private router: Router,
    private updateCategoriesLocationService: UpdateCategoriesLocationService,
  ) {}

  ngOnInit(): void {
    // Retrieve ID
    this.id = this.route.snapshot.paramMap.get('city');

    // Retrieve city in CitiyInfo
    this.citiyInfo = this.id
      ? this.citiesService.Cities().find((city) => city.id === this.id)
      : undefined;

    if (!this.citiyInfo) {
      this.router.navigate(['page-introuvable']);
      return;
    }

    this.categories = this.updateCategoriesLocationService.update(this.citiyInfo.TrainingCategory);
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
  numberPhoneLink(phone: string | undefined): string {
    if (!phone) return '';
    return phone.replace(/\D/g, '').replace(/^0/, '');
  }
}
