import { RedirectionPage } from '../../services/redirectionPage.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayNavService } from '../../services/displayNav.service';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  constructor(
    public displayNavService: DisplayNavService,
    private redirectionPage: RedirectionPage
  ) {}

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();
  }

  routerLink(): string {
    return this.redirectionPage.routerLink();
  }
}
