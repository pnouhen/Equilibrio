import { UsersDataService } from '../../../../../core/services/UsersData.service';
import { TrainingAttendanceService } from '../../services/TrainingAttendanceService.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormMessageModel } from '../../../../../core/models/FormMessage.model';
import { FormMessageComponent } from '../../../../../core/components/message-form/message-form.component';

@Component({
  selector: 'app-training-attendance-calendar',
  imports: [FormsModule, FormMessageComponent],
  templateUrl: './training-attendance-calendar.component.html',
  styleUrl: './training-attendance-calendar.component.scss',
})
export class TrainingAttendanceCalendarComponent implements OnInit {
  dateDisplay!: string;
  attendanceStates: boolean[] = [];

  // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: FormMessageModel[] = [
    new FormMessageModel("L'enregistrement du planning a reussi", 'formMessageTrue'),
    new FormMessageModel("L'enregistrement du planning a échoué", 'formMessageFalse'),
  ];

  constructor(
    public trainingAttendanceService: TrainingAttendanceService,
    public usersDataService: UsersDataService,
  ) {}

  ngOnInit(): void {
    this.generateDate(this.trainingAttendanceService.date);
  }

  generateDate(date: Date) {
    const today = date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });

    this.dateDisplay = today.charAt(0).toUpperCase() + today.slice(1);
  }

  previousDate() {
    this.trainingAttendanceService.date.setDate(this.trainingAttendanceService.date.getDate() - 1);
    this.generateDate(this.trainingAttendanceService.date);
    this.trainingAttendanceService.updateUsersSchedule(
      this.trainingAttendanceService.scheduleSelected,
    );
  }

  nextDate() {
    this.trainingAttendanceService.date.setDate(this.trainingAttendanceService.date.getDate() + 1);
    this.generateDate(this.trainingAttendanceService.date);
    this.trainingAttendanceService.updateUsersSchedule(
      this.trainingAttendanceService.scheduleSelected,
    );
  }

  onSubmit() {
    // Retrieve the values ​​of the checkboxes linked to the members.
    const attendanceData = this.trainingAttendanceService.users().map((user, index) => ({
      name: user.memberName,
      present: this.attendanceStates[index] ?? user.present,
    }));

    // Managing the display of the message after submit display
    this.isSubmitted = true;

    if (attendanceData.length > 0) {
      this.isFormValid = true;
    } else {
      this.isFormValid = false;
    }

    // Update TrainingSessions for each members
    const updatedUsersData = this.usersDataService.UsersData().map((user) => ({
      ...user,
      members: user.members.map((member) => {
        // Sort by city and times
        const matchesCity = member.training.citySchedules.some(
          (item) => item.city === this.trainingAttendanceService.citySelected(),
        );
        const matchesSchedule = member.training.citySchedules.some(
          (item) => item.schedule === this.trainingAttendanceService.scheduleSelected,
        );

        // Select the members where the checkbox is true
        const matchingAttendance = attendanceData.find(
          (att) => att.name === member.memberName && att.present === true,
        );

        if (matchesCity && matchesSchedule && matchingAttendance) {
          // Check if the training date has already been recorded.
          const isTrainingSessionToday =
            this.trainingAttendanceService.findTodayTrainingSessionDate(
              member.training.trainingSessions,
            );
          if (!isTrainingSessionToday)
            return {
              ...member,
              training: {
                ...member.training,
                trainingSessions: [
                  ...member.training.trainingSessions,
                  `${this.trainingAttendanceService.date}`,
                ],
              },
            };
        }

        return member;
      }),
    }));

    // Update UsersData
    this.usersDataService.UsersData.set(updatedUsersData);
    sessionStorage.setItem('users', JSON.stringify(updatedUsersData));
  }
}
