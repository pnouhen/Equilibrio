import { Component } from '@angular/core';
import { LogoComponent } from '../logo/logo.component';
import { DisplayNavService } from '../services/displayNav.service';

@Component({
  selector: 'app-footer',
  imports: [LogoComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  constructor(public displayNavService: DisplayNavService) {} // inject service

  removeNav(): void {
    this.displayNavService.removeNav();
  }
}
