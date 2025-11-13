import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CITIES } from '../data/CitiesInfo.data';
import { CityInfo } from '../models/CityInfo.model';

@Component({
  selector: 'app-locations-times-location',
  imports: [],
  templateUrl: './locations-times-location.component.html',
  styleUrl: './locations-times-location.component.scss',
})
export class LocationsTimesLocationComponent implements OnInit {
  id: string | null = null;
  info: CityInfo | undefined;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieving the parameter : 'city'
    this.id = this.route.snapshot.paramMap.get('city');
    
    if (this.id) {
      this.info = CITIES.find(city => city.id === this.id);
    }

    console.log(this.info);
  }
}
