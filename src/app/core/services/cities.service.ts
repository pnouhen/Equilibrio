import { TrainingResume } from './../../landing/pages/home/models/TrainingResume.model';
import { Injectable, signal } from '@angular/core';
import { CityInfo } from '../../landing/pages/locations-times/models/CityInfo.model';
import { CITIES } from '../../datas-Back-end/data/CitiesInfo.data';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  Cities = signal<CityInfo[]>(this.downloadCities());
  TrainingResumes = signal<TrainingResume[]>(this.displayTrainingResumes());

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
}
