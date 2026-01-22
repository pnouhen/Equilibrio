import { RedirectionPageService } from '../../../../services/RedirectionPage.service';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../../../../../landing/components/header/header.component';
import { FooterComponent } from '../../../../../landing/components/footer/footer.component';
import { HeaderUsersComponent } from '../../../../../users/components/header-users/header-users.component';
import { FooterUsersComponent } from '../../../../../users/components/footer-users/footer-users.component';

@Component({
  selector: 'app-error404',
  imports: [
    RouterLink,
    HeaderComponent,
    HeaderUsersComponent,
    FooterComponent,
    FooterUsersComponent,
  ],
  templateUrl: './error404.component.html',
  styleUrl: './error404.component.scss',
})
export class Error404Component implements OnInit {
  constructor(private redirectionPageService: RedirectionPageService) {}
  isUser!: boolean;

  ngOnInit(): void {
    this.isUser = this.redirectionPageService.chekcedUser();
  }

  routerLink(): string {
    return this.redirectionPageService.routerLink();
  }
}
