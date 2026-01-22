import { RedirectionPageService } from '../../services/RedirectionPage.service';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayNavService } from '../../services/DisplayNav.service';
import { DisplayUserMembersService } from '../../services/DisplayUserMembers.service';

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
    public displayUserMembersService: DisplayUserMembersService,
  ) {}

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();

    // For user :
    this.displayUserMembersService.isUserMembers.set(null);
  }

  routerLink(): string {
    return this.redirectionPageService.routerLink();
  }
}
