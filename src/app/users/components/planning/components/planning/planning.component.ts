import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';
import { PlanningFiltersComponent } from '../planning-filters/planning-filters.component';
import { PlanningCalendarComponent } from "../planning-calendar/planning-calendar.component";

@Component({
  selector: 'app-planning',
  imports: [PlanningFiltersComponent, PlanningCalendarComponent],
  templateUrl: './planning.component.html',
  styleUrl: './planning.component.scss',
})
export class PlanningComponent implements OnInit {
  user!: UsersModel;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'teacher' && this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
