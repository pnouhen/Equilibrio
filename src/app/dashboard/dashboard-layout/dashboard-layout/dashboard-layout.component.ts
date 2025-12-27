import { Component, OnInit } from '@angular/core';
import { HeaderDashboardComponent } from '../../components/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from '../../components/footer-dashboard/footer-dashboard.component';
import { UsersModel } from '../../../datas-Back-end/models/Users.model';
import { Router, RouterOutlet } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dashboard-page',
  imports: [HeaderDashboardComponent, RouterOutlet, FooterDashboardComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent implements OnInit {
  user!: UsersModel;

  constructor(private router: Router, public userService: UserService) {}

  ngOnInit(): void {
    // Security if url is bad
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    this.userService.type.set(this.user.type);

    if (this.user.members.length > 1 && this.userService.user() === '') {
      this.router.navigate([`dashboard/espace-membres/${this.user.email}`]);
    } else if (this.user.members.length === 1) {
      this.router.navigate([`dashboard/${this.user.members[0].memberName}/presentation`]);
    }
  }
}
