import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/User.service';
import { Router, RouterLink } from '@angular/router';
import { UsersRoutingService } from '../../../../services/UsersRouting.service';

@Component({
  selector: 'app-admin-managment',
  imports: [RouterLink],
  templateUrl: './admin-managment.component.html',
  styleUrl: './admin-managment.component.scss',
})
export class AdminManagmentComponent implements OnInit {
  user!: UsersModel;

  constructor(
    public userService: UserService,
    public router: Router,
    public UsersRoutingService: UsersRoutingService,
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
