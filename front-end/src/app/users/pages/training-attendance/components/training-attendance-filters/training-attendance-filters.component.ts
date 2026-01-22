import { CitiesService } from '../../../../../core/services/Cities.service';
import { TrainingAttendanceService } from '../../services/TrainingAttendanceService.service';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../../../services/User.service';
import { SelectedCityTrainingAttendanceService } from '../../services/SelectedCityTrainingAttendanceService';
import { SelectedSchedulesServices } from '../../services/SelectedSchedules.service';
import { InputSelectedComponent } from '../../../../../core/components/input-selected/input-selected.component';

@Component({
  selector: 'app-training-attendance-filters',
  imports: [InputSelectedComponent],
  templateUrl: './training-attendance-filters.component.html',
  styleUrl: './training-attendance-filters.component.scss',
})
export class TrainingAttendanceFilterComponent implements OnInit {
  @ViewChild('city') city!: ElementRef<HTMLDivElement>;
  @ViewChild('schedule') schedule!: ElementRef<HTMLDivElement>;

  cities!: string[];
  schedules!: string[];

  constructor(
    public citiesService: CitiesService,
    public userService: UserService,
    public trainingAttendanceService: TrainingAttendanceService,
    public selectedCityTrainingAttendanceService: SelectedCityTrainingAttendanceService,
    public selectedSchedulesServices: SelectedSchedulesServices,
  ) {}

  ngOnInit(): void {
    // Filter city
    this.cities = this.citiesService
      .Cities()
      .map((city) => city.city)
      .sort();
  }

  // Functions for city
  toggleSelectedCity() {
    this.selectedSchedulesServices.closeSelected();

    this.selectedCityTrainingAttendanceService.toggleSelected();

    // Transition CSS
    if (this.selectedCityTrainingAttendanceService.isSelectedDisplay) {
      setTimeout(() => {
        this.city.nativeElement.style.display = 'block';
      }, 10);
    }
  }

  inputCityChange(newValue: string) {
    this.trainingAttendanceService.citySelected.set(newValue);
    this.trainingAttendanceService.updateUsersCity(newValue);
    this.trainingAttendanceService.users.set([]);
  }

  // Schedules
  handleScheduleFilter = (newCity: string): void => {
    // Returns the schedules related to the city in question
    const newSchedules = [
      ...new Set(
        this.citiesService
          .Cities()
          .find((city) => city.city === newCity)
          ?.TrainingCategory.flatMap((category) =>
            category.trainingSchedule.map(
              (schedule) => `${schedule.day} : ${schedule.startTime} - ${schedule.endTime}`,
            ),
          ),
      ),
    ].sort((a, b) => a.localeCompare(b));

    this.schedules = newSchedules ? newSchedules : [];

    this.trainingAttendanceService.scheduleSelected = 'Selectionnez';
  };

  toggleSelectedSchedules() {
    if (
      this.schedules &&
      this.schedules.length > 0 &&
      !this.selectedCityTrainingAttendanceService.isSelectedDisplay
    ) {
      this.selectedSchedulesServices.toggleSelected();

      // Transition CSS
      if (this.selectedSchedulesServices.isSelectedDisplay) {
        setTimeout(() => {
          this.schedule.nativeElement.style.display = 'block';
        }, 10);
      }
    }
  }

  inputScheduleChange(newValue: string) {
    this.trainingAttendanceService.scheduleSelected = newValue;
    this.trainingAttendanceService.updateUsersSchedule(newValue);
  }
}
