import { Component } from '@angular/core';
import { LogoComponent } from '../../../core/components/logo/logo.component';
import { DisplayNavService } from '../../../core/services/DisplayNav.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent, RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  standalone: true,
})
export class FooterComponent {
  constructor(public displayNavService: DisplayNavService) {} 

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();
  }
}
