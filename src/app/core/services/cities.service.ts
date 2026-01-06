import { Condition } from './../../landing/pages/locations-times/models/Condition.model';
import { LocationsCard } from './../../landing/pages/locations-times/models/LocationsCard.model';
import { TrainingResume } from './../../landing/pages/home/models/TrainingResume.model';
import { Injectable, signal } from '@angular/core';
import { CityInfo } from '../../landing/pages/locations-times/models/CityInfo.model';
import { CITIES } from '../../datas-Back-end/data/CitiesInfo.data';
import { CONDITIONSTRAINING } from '../../landing/pages/locations-times/datas/ConditionsTraining.data';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  Cities = signal<CityInfo[]>(this.downloadCities());
  TrainingResumes = signal<TrainingResume[]>(this.displayTrainingResumes());
  LocationsCards = signal<LocationsCard[]>(this.displayLocationCards())
  Condition = signal<Condition[]>(this.downloadConditions())

  downloadCities(): CityInfo[] {
    const citiesStorage = sessionStorage.getItem('cities');

    if (citiesStorage) {
      return JSON.parse(citiesStorage);
    } else {
      sessionStorage.setItem('cities', JSON.stringify(CITIES));
      return CITIES;
    }
  }

  displayTrainingResumes() {
    return this.Cities().map((city) => ({
      place: city.city,
      day: city.resume,
    }));
  }

  displayLocationCards() {
    return this.Cities().map((city) => ({
      id: city.id,
      src: city.img,
      alt: city.city,
    }));
  }

  downloadConditions(): Condition[] {
    const citiesStorage = sessionStorage.getItem('cities_conditions');

    if (citiesStorage) {
      return JSON.parse(citiesStorage);
    } else {
      sessionStorage.setItem('cities_conditions', JSON.stringify(CONDITIONSTRAINING));
      return CONDITIONSTRAINING;
    }
  }
}
