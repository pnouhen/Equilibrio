import { ToggleContentUser } from '../../pages/student-dashboard/services/ToggleContentUser.service';
import { Router } from '@angular/router';
import { DisplayUserMembers } from '../../services/displayUserMembers.service';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../../../core/components/logo/logo.component';
import { UsersMembers } from '../../../datas-Back-end/models/Users-members';

@Component({
  selector: 'app-header-users',
  imports: [LogoComponent],
  templateUrl: './header-users.component.html',
  styleUrl: './header-users.component.scss',
})
export class HeaderUsersComponent implements OnInit {
  otherMembers!: UsersMembers[] | null;
  isOtherMembers: boolean = false;

  constructor(
    public userService: UserService,
    public displayUserMembers: DisplayUserMembers,
    public router: Router,
    public toggleContentUser: ToggleContentUser
  ) {}

  ngOnInit(): void {}

  deconnexionMember() {
    const user = sessionStorage.getItem('user');
    if (user) {
      sessionStorage.removeItem('user');
    }

    const users = sessionStorage.getItem('users');
    if (users) {
      sessionStorage.removeItem('users');
    }

    const usersDashboard = sessionStorage.getItem('usersDashboard');
    if (usersDashboard) {
      sessionStorage.removeItem('usersDashboard');
    }
  }

  displayOtherMembers() {
    this.isOtherMembers = !this.isOtherMembers;
  }

  onKeyDownNav(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.displayOtherMembers();
    }
  }

  navigateUser(member: UsersMembers) {
    this.isOtherMembers = false;
    this.router.navigate(['/espace-utilisateur', member.memberName, 'Présentation']);
    this.toggleContentUser.toggleContent('Présentation');
    this.userService.setUser(member);
    this.userService.setOtherUser();
  }

  onKeyDownNavItem(event: KeyboardEvent, index: number, member: UsersMembers) {
    const length = this.userService.otherMembers()?.length ?? 0;
    if (index === length - 1 && event.key === 'Tab') {
      this.isOtherMembers = false;
    }

    if (event.key === 'Enter') this.navigateUser(member);
  }
}
