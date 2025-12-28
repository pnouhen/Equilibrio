import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  user!: UsersModel;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
