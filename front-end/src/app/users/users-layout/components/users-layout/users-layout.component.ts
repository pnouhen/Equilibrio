import { Component, OnInit } from '@angular/core';
import { HeaderUsersComponent } from '../../../components/header-users/header-users.component';
import { FooterUsersComponent } from '../../../components/footer-users/footer-users.component';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../../services/User.service';

@Component({
  selector: 'app-users-page',
  imports: [HeaderUsersComponent, RouterOutlet, FooterUsersComponent],
  templateUrl: './users-layout.component.html',
  styleUrl: './users-layout.component.scss',
})
export class UsersLayoutComponent implements OnInit {
  user!: UsersModel;

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    // Security if url is bad
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    this.userService.type.set(this.user.type);

    if (this.user.members.length > 1 && this.userService.user() === '') {
      this.router.navigate([`espace-utilisateur/espace-membres/${this.user.email}`]);
    } else if (this.user.members.length === 1) {
      this.router.navigate([`espace-utilisateur/${this.user.members[0].memberName}/Présentation`]);
    }
  }
}
