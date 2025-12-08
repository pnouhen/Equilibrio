import { ToggleMember } from './../services/toggleMember.service';
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

  constructor(private router: Router, public toggleMember: ToggleMember) {}

  ngOnInit(): void {
  this.user = JSON.parse(sessionStorage.getItem('user')!);
  if (!this.user) {
    this.router.navigate(['page-introuvable']);
    return;
  }

  const currentUrl = this.router.url;

  // Ne redirige que si on est sur le tableau de bord racine
  if (currentUrl === '/dashboard') {
    if (this.user.member.length > 1) {
      this.router.navigate([`dashboard/espace-membres/${this.user.email}`]);
    } else if (this.user.member.length === 1) {
      this.toggleMember.memberSelected = this.user.member[0];
      this.router.navigate([`dashboard/${this.user.member[0].memberName}`]);
    }
  }
}
}
