import { UsersDataService } from '../../../../../core/services/UsersData.service';
import { StudentRegularity } from '../../../../services/StudentRegularityService.service';
import { PlanningService } from '../../../../services/PlanningService.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MessageForm } from '../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../core/components/message-form/message-form.component';

@Component({
  selector: 'app-planning-calendar',
  imports: [FormsModule, MessageFormComponent],
  templateUrl: './planning-calendar.component.html',
  styleUrl: './planning-calendar.component.scss',
})
export class PlanningCalendarComponent implements OnInit {
  dateDisplay!: string;
  attendanceStates: boolean[] = [];

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm("L'enregistrement du planning a reussi", 'messageFormTrue'),
    new MessageForm("L'enregistrement du planning a échoué", 'messageFormFalse'),
  ];

  constructor(
    public planningService: PlanningService,
    public studentRegularity: StudentRegularity,
    public usersDataService: UsersDataService
  ) {}

  ngOnInit(): void {
    this.generateDate(this.planningService.date);
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
    this.planningService.date.setDate(this.planningService.date.getDate() - 1);
    this.generateDate(this.planningService.date);
    this.planningService.updateUsersSchedule(this.planningService.scheduleSelected);
  }

  nextDate() {
    this.planningService.date.setDate(this.planningService.date.getDate() + 1);
    this.generateDate(this.planningService.date);
    this.planningService.updateUsersSchedule(this.planningService.scheduleSelected);
  }

  onSubmit() {
    // Retrieve the values ​​of the checkboxes linked to the members.
    const attendanceData = this.planningService.users().map((user, index) => ({
      name: user.memberName,
      present: this.attendanceStates[index] ?? user.present,
    }));

    // MessageForm display
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
          (item) => item.city === this.planningService.citySelected()
        );
        const matchesSchedule = member.training.citySchedules.some(
          (item) => item.schedule === this.planningService.scheduleSelected
        );

        // Select the members where the checkbox is true
        const matchingAttendance = attendanceData.find(
          (att) => att.name === member.memberName && att.present === true
        );

        if (matchesCity && matchesSchedule && matchingAttendance) {
          // Check if the training date has already been recorded.
          const isTrainingSessionToday = this.planningService.findTodayTrainingSessionDate(
            member.training.trainingSessions
          );
          if (!isTrainingSessionToday)
            return {
              ...member,
              training: {
                ...member.training,
                trainingSessions: [
                  ...member.training.trainingSessions,
                  `${this.planningService.date}`,
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
