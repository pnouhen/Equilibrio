import { Component, OnInit } from '@angular/core';
import { HeaderDashboardComponent } from '../components/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from '../components/footer-dashboard/footer-dashboard.component';
import { UsersModel } from '../../datas-Back-end/models/Users.model';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  imports: [HeaderDashboardComponent, RouterOutlet, FooterDashboardComponent],
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.scss',
})
export class DashboardLayoutComponent implements OnInit {
  user!: UsersModel;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    if (this.user.member.length > 1)
      this.router.navigate([`dashboard/espace-membres/${this.user.email}`]);
  }
}
