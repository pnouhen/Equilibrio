import { LocationsCard } from '../models/LocationsCard.model';
import { TrainingResume } from '../../landing/pages/home/models/TrainingResume.model';
import { Injectable, signal } from '@angular/core';
import { CityInfoModel } from '../models/CityInfo.model';
import { CITIES } from '../../datas-Back-end/data/CitiesInfo.data';

@Injectable({
  providedIn: 'root',
})
export class CitiesService {
  Cities = signal<CityInfoModel[]>(this.downloadCities());
  TrainingResumes = signal<TrainingResume[]>(this.displayTrainingResumes());
  LocationsCards = signal<LocationsCard[]>(this.displayLocationCards());
  Condition = signal<string[]>(this.downloadConditions());

  downloadCities(): CityInfoModel[] {
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

  downloadConditions(): string[] {
    const conditions = [
      ...new Set(
        this.Cities()
          .flatMap((city) =>
            city.TrainingCategory.flatMap((cat) =>
              cat.trainingSchedule.flatMap((sch) => sch.condition)
            )
          )
          .filter((cond) => cond !== undefined)
      ),
    ];
    return conditions;
  }
}
