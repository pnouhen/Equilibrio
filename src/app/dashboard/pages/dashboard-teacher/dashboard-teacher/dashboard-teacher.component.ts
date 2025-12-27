import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';

@Component({
  selector: 'app-dashboard-teacher',
  imports: [RouterLink],
  templateUrl: './dashboard-teacher.component.html',
  styleUrl: './dashboard-teacher.component.scss',
})
export class DashboardTeacherComponent implements OnInit {
  user!: UsersModel

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
        this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'teacher') {
      this.router.navigate(['page-introuvable']);
    }
  }

  navigateEspaceMember(): string {
     return `/dashboard/espace-membres/${this.user.email}`;
  }

  navigatePlanning(): string {
     return `/dashboard/espace-professeur/${this.user.email}/planning`
  }
}
