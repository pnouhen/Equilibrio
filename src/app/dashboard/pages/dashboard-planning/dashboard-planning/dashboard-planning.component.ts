import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../services/user.service';
import { Router } from '@angular/router';
import { DashboardPlanningFiltersComponent } from '../../../components/dashboard-planning-filters/dashboard-planning-filters.component';
import { DashboardPlanningCalendarComponent } from "../../../components/dashboard-planning-calendar/dashboard-planning-calendar.component";

@Component({
  selector: 'app-dashboard-planning',
  imports: [DashboardPlanningFiltersComponent, DashboardPlanningCalendarComponent],
  templateUrl: './dashboard-planning.component.html',
  styleUrl: './dashboard-planning.component.scss',
})
export class DashboardPlanningComponent implements OnInit {
  user!: UsersModel;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'teacher') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
