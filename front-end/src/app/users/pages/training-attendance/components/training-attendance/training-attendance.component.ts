import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/User.service';
import { Router } from '@angular/router';
import { TrainingAttendanceFilterComponent } from '../training-attendance-filters/training-attendance-filters.component';
import { TrainingAttendanceCalendarComponent } from '../training-attendance-calendar/training-attendance-calendar.component';

@Component({
  selector: 'app-training-attendance',
  imports: [TrainingAttendanceFilterComponent, TrainingAttendanceCalendarComponent],
  templateUrl: './training-attendance.component.html',
  styleUrl: './training-attendance.component.scss',
})
export class TrainingAttendanceComponent implements OnInit {
  user!: UsersModel;

  constructor(
    public userService: UserService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'teacher' && this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
