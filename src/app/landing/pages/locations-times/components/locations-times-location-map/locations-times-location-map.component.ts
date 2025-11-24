import { Component, AfterViewInit, input } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-locations-times-location-map',
  templateUrl: './locations-times-location-map.component.html',
  styleUrls: ['./locations-times-location-map.component.scss'],
})
export class LocationsTimesLocationMapComponent implements AfterViewInit {
  lat = input.required<number>()
  lng = input.required<number>()

  private map: any;

  ngAfterViewInit(): void {
    if (!this.lat() && this.lng()) return;

    this.map = L.map('map').setView([this.lat(),this.lng()], 14);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

    this.map.removeControl(this.map.attributionControl);

     // Force icon URLs
    const defaultIcon = L.icon({
      iconUrl: '/assets/icon/marker-icon.png',
      iconRetinaUrl: '/assets/icon/marker-icon-2x.png',
      shadowUrl: '/assets/icon/marker-shadow.png',
      iconSize: [30, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    L.Marker.prototype.options.icon = defaultIcon;

    L.marker([this.lat(), this.lng()]).addTo(this.map);
  }
}
