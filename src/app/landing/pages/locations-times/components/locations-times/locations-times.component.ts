import { CitiesService } from './../../../../../core/services/cities.service';
import { RouterLink } from '@angular/router';
import { LocationsCard } from '../../models/LocationsCard.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations-times',
  imports: [RouterLink],
  templateUrl: './locations-times.component.html',
  styleUrl: './locations-times.component.scss',
})
export class LocationsTimesComponent implements OnInit {
  locationCards!: LocationsCard[];

  constructor(public citiesService: CitiesService) {}

  ngOnInit(): void {
    this.locationCards = this.citiesService.LocationsCards();
  }
}
