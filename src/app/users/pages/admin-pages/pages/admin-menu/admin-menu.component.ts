import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { UserService } from '../../../../services/User.service';
import { Router, RouterLink } from '@angular/router';
import { LinkMenuModel } from '../../../../../core/models/LinkMenu.model';
import { LinkAdminMenuData } from '../../datas/LinkAdminMenu.datas';

@Component({
  selector: 'app-admin-menu',
  imports: [RouterLink],
  templateUrl: './admin-menu.component.html',
  styleUrl: './admin-menu.component.scss',
})
export class AdminMenuComponent implements OnInit {
  allButtons: LinkMenuModel[] = LinkAdminMenuData;
  user!: UsersModel;

  constructor(
    public userService: UserService,
    public router: Router,
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    if (this.userService.type() !== 'admin') {
      this.router.navigate(['page-introuvable']);
    }
  }
}
