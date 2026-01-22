import { LogoComponent } from '../../../core/components/logo/logo.component';
import { Component, OnInit } from '@angular/core';
import { NavItem } from './models/NavItem.model';
import { Router, RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { DisplayNavService } from '../../../core/services/DisplayNav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  headerLinks!: NavItem[];
  menuBurger!: boolean;

  constructor(public displayNavService: DisplayNavService, private router: Router) {}

  ngOnInit(): void {
    this.headerLinks = [
      new NavItem('assets/icons/home.svg', 'Acceuil', 'home', ''),
      new NavItem('assets/icons/berimbau.svg', 'La capoeira', 'capoeira', '/la-capoeira'),
      new NavItem('assets/icons/map.svg', 'Lieux & Horaires', 'timePlace', '/lieux-et-horaires'),
      new NavItem(
        'assets/icons/capoeira-fight.svg',
        'Prestations et Animations',
        'prestations',
        '/prestations-et-animations'
      ),
      new NavItem('assets/icons/auth-page.svg', 'Espace adhérents', 'authPage', '/espace-adherents'),
    ];

    // Display menuBurger for tablet and mobile
    this.menuBurger = window.innerWidth <= 1024;
  }

  get navigationIcon() {
    return this.displayNavService.navigationIcon;
  }

  get isNavOpen() {
    return this.displayNavService.isNavOpen;
  }

  toggleMenuBurger(): void {
    this.displayNavService.toggleMenuBurger();
  }

  removeMenuBurger(): void {
    this.displayNavService.removeMenuBurger();
  }

  // Active routerLinkActive for paths : lieux-et-horaires/:city
  shouldUseExactMatch(path: string): boolean {
    if (path === 'lieux-et-horaires') {
      return false;
    } else {
      return true;
    }
  }
}
