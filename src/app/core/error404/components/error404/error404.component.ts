import { RedirectionPage } from './../../../services/redirectionPage.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../landing/components/header/header.component';
import { FooterComponent } from '../../../../landing/components/footer/footer.component';
import { HeaderDashboardComponent } from '../../../../dashboard/components/header-dashboard/header-dashboard.component';
import { FooterDashboardComponent } from '../../../../dashboard/components/footer-dashboard/footer-dashboard.component';

@Component({
  selector: 'app-error404',
  imports: [
    RouterLink,
    HeaderComponent,
    HeaderDashboardComponent,
    FooterComponent,
    FooterDashboardComponent,
  ],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component implements OnInit {
  constructor(private redirectionPage: RedirectionPage) {}
  isUser!: boolean;

  ngOnInit(): void {
    this.isUser = this.redirectionPage.chekcedUser()
  }

  routerLink(): string {
    return this.redirectionPage.routerLink();
  }
}
