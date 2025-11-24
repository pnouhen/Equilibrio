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
  locationCards!: LocationsCard []

  ngOnInit(): void {
   this.locationCards = [
    new LocationsCard("limoges","/assets/places/limoges.webp","Limoges"),
    new LocationsCard("couzeix","/assets/places/couzeix.webp","Couzeix"),
    new LocationsCard("st-junien","/assets/places/st-junien.webp","St-junien"),
    new LocationsCard("chateauneuf-la-foret","/assets/places/chateauneuf-la-foret.webp","Châteauneuf-la-Forêt"),
    new LocationsCard("neuvic-entier","/assets/places/neuvic-entier.webp","Neuvic-Entier"),
    new LocationsCard("panazol","/assets/places/panazol.webp","Panazol"),
    new LocationsCard("brive","/assets/places/brive.webp","Brive"),
    new LocationsCard("tulle","/assets/places/tulle.webp","Tulle"),
    new LocationsCard("gueret","/assets/places/gueret.webp","Guéret"),
    new LocationsCard("la-souterraine","/assets/places/la-souterraine.webp","La Souterraine"),
   ] 
  }
}
