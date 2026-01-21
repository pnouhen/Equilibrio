import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/user.service';
import { Router, RouterLink } from '@angular/router';
import { LinkMenuModel } from '../../../../../core/models/LinkMenu.model';
import {LinkAdminMenuData} from "../../datas/LinkAdminMenu.datas"

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent implements OnInit {
  allButtons: LinkMenuModel[] = LinkAdminMenuData
  user!: UsersModel;

  constructor(public userService: UserService, public router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
  
}
