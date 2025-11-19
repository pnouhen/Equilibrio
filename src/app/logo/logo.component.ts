import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { DisplayNavService } from '../services/displayNav.service';

@Component({
  selector: 'app-logo',
  imports: [RouterLink],
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.scss',
})
export class LogoComponent {
    constructor(public displayNavService: DisplayNavService) {}

removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();
  }
}
