import { RedirectionPageService } from '../../services/RedirectionPage.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayNavService } from '../../services/displayNav.service';
import { DisplayUserMembers } from '../../../users/services/displayUserMembers.service';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
  constructor(
    public displayNavService: DisplayNavService,
    private redirectionPageService: RedirectionPageService,
    public displayUserMembers: DisplayUserMembers,
  ) {}

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();

    // For user :
    this.displayUserMembers.isUserMembers.set(null);
  }

  routerLink(): string {
    return this.redirectionPageService.routerLink();
  }
}
