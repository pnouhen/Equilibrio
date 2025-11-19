import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { DisplayNavService } from '../services/displayNav.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent,RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public displayNavService: DisplayNavService) {} // inject service

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();
  }
}
