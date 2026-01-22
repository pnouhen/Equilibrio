import { UsersRoutingService } from '../../../services/UsersRouting.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/User.service';
import { Router, RouterLink } from '@angular/router';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';

@Component({
  selector: 'app-dashboard-teacher',
  imports: [RouterLink],
  templateUrl: './teacher-managment.component.html',
  styleUrl: './teacher-managment.component.scss',
})
export class TeacherManagmentComponent implements OnInit {
  user!: UsersModel;

  constructor(
    public userService: UserService,
    public router: Router,
    public UsersRoutingService: UsersRoutingService
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'teacher') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
