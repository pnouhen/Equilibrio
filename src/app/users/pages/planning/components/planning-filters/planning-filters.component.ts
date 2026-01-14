import { CitiesService } from './../../../../../core/services/cities.service';
import { PlanningService } from '../../../../services/PlanningService.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/user.service';
import { SelectedCityPlanning } from '../../../../services/SelectedCityPlanning.service';
import { SelectedSchedules } from '../../../../services/SelectedSchedules.service';
import { CITIES } from '../../../../../datas-Back-end/data/CitiesInfo.data';
import { InputSelectedComponent } from '../../../../../core/components/input-selected/input-selected.component';

@Component({
  selector: 'app-planning-filters',
  imports: [InputSelectedComponent],
  templateUrl: './planning-filters.component.html',
  styleUrl: './planning-filters.component.scss',
})
export class PlanningFiltersComponent implements OnInit {
  @ViewChild('city') city!: ElementRef<HTMLDivElement>;
  @ViewChild('schedule') schedule!: ElementRef<HTMLDivElement>;

  cities!: string[];
  schedules!: string[];

  constructor(
    public citiesService: CitiesService,
    public userService: UserService,
    public planningService: PlanningService,
    public selectedCityPlanning: SelectedCityPlanning,
    public selectedSchedules: SelectedSchedules
  ) {}

  ngOnInit(): void {
    // Filter city
    this.cities = this.citiesService.Cities().map((city) => city.city).sort();
  }

  // Functions for city
  toggleSelectedCity() {
    this.selectedSchedules.closeSelected();

    this.selectedCityPlanning.toggleSelected();

    // Transition CSS
    if (this.selectedCityPlanning.isSelectedDisplay) {
      setTimeout(() => {
        this.city.nativeElement.style.display = 'block';
      }, 10);
    }
  }

  // TODO Refaire
  inputCityChange(newValue: string) {
    this.planningService.citySelected.set(newValue);
    // this.planningService.updateUsersCity(newValue);
    this.planningService.users.set([]);
  }

  // Schedules
  handleScheduleFilter = (newCity: string): void => {
    // Returns the schedules related to the city in question
    const newSchedules = [
      ...new Set(
        this.citiesService.Cities().find((city) => city.city === newCity)?.TrainingCategory.flatMap((category) =>
          category.trainingSchedule.map(
            (schedule) => `${schedule.day} : ${schedule.startTime} - ${schedule.endTime}`
          )
        )
      ),
    ].sort((a, b) => a.localeCompare(b));

    this.schedules = newSchedules ? newSchedules : [];

    this.planningService.scheduleSelected.set('Selectionnez');
  };

  toggleSelectedSchedules() {
    if (this.schedules && this.schedules.length > 0 && !this.selectedCityPlanning.isSelectedDisplay) {
      this.selectedSchedules.toggleSelected();

      // Transition CSS
      if (this.selectedSchedules.isSelectedDisplay) {
        setTimeout(() => {
          this.schedule.nativeElement.style.display = 'block';
        }, 10);
      }
    }
  }

  inputScheduleChange(newValue: string) {
    this.planningService.scheduleSelected.set(newValue);
    this.planningService.updateUsersSchedule(newValue);
  }
}
