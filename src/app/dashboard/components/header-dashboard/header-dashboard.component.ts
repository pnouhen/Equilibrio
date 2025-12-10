import { Router } from '@angular/router';
import { DisplayUserMembers } from './../../services/displayUserMembers';
import { UserService } from './../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { LogoComponent } from '../../../core/components/logo/logo.component';
import { UsersMembers } from '../../../datas-Back-end/models/Users-members';

@Component({
  selector: 'app-header-dashboard',
  imports: [LogoComponent],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss',
})
export class HeaderDashboardComponent implements OnInit {
  userMembers!: UsersMembers | null;
  otherMembers!: UsersMembers[] | null;
  isOtherMembers: boolean = false;

  constructor(
    public userService: UserService,
    public displayUserMembers: DisplayUserMembers,
    public router: Router
  ) {}

  ngOnInit(): void {}

  deconnexionMember() {
    const user = sessionStorage.getItem('user');
    if (user) {
      sessionStorage.removeItem('user');
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

  navigateUser(memberName: string) {
    this.isOtherMembers = false;
    this.router.navigate(['/dashboard', memberName]);
    this.userService.setUser(memberName);
    this.userService.setOtherUser();
  }

  onKeyDownNavItem(event: KeyboardEvent, index: number, memberName: string) {
    const length = this.userService.otherMembers()?.length ?? 0;
    if (index === length - 1 && event.key === 'Tab') {
      this.isOtherMembers = false;
    }

    if (event.key === 'Enter') this.navigateUser(memberName);
  }
}
