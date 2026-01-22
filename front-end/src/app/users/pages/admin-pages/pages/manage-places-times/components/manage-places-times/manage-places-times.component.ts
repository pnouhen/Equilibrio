import { Component, OnInit } from '@angular/core';
import { ReturnAdminMenuComponent } from '../../../../components/return-admin-menu/return-admin-menu.component';
import { LocationsCard } from '../../../../../../../core/models/LocationsCard.model';
import { CitiesService } from '../../../../../../../core/services/Cities.service';
import { AdminMenuRoutingModule } from '../../../../admin-pages-routing';
import { ManagePlacesTimesFormComponent } from '../manage-places-times-form/manage-places-times-form.component';
import { CityInfoModel } from '../../../../../../../core/models/CityInfo.model';

@Component({
  selector: 'app-manage-places-times',
  imports: [ReturnAdminMenuComponent, AdminMenuRoutingModule, ManagePlacesTimesFormComponent],
  templateUrl: './manage-places-times.component.html',
  styleUrl: './manage-places-times.component.scss',
})
export class ManagePlacesTimesComponent implements OnInit {
  locationCards!: LocationsCard[];
  cityUpdate!: CityInfoModel | undefined;
  selectedFile: File | null = null;

  constructor(public citiesService: CitiesService) {}

  ngOnInit(): void {
    this.locationCards = this.citiesService.LocationsCards();
  }

  deleteLocationCard(id: string) {
    // Update LocationCards
    const newLocationCards = this.locationCards.filter((card) => card.id !== id);
    this.locationCards = newLocationCards;
    this.citiesService.LocationsCards.set(newLocationCards);

    // Update Cities
    const newCities = this.citiesService.Cities().filter((city) => city.id !== id);
    this.citiesService.Cities.set(newCities);
    sessionStorage.setItem('cities', JSON.stringify(newCities));
  }

  updateLocationCard(id: string) {
    this.cityUpdate = this.citiesService.Cities().find((city) => city.id === id);
    this.selectedFile = null;
  }
}
