import { LogoComponent } from './../logo/logo.component';
import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/NavItem';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';
import { DisplayNavService } from '../services/displayNav.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [LogoComponent, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // correction
})
export class HeaderComponent implements OnInit {
  headerLinks!: NavItem[];
  menuBurger!: boolean;

  constructor(public displayNavService: DisplayNavService) {} // inject service

  ngOnInit(): void {
    this.headerLinks = [
      new NavItem('assets/home.svg', 'Acceuil', 'home', ''),
      new NavItem('assets/berimbau.svg', 'La capoeira', 'capoeira', 'la-capoeira'),
      new NavItem('assets/map.svg', 'Lieux & Horaires', 'timePlace', 'lieux-et-horaires'),
      new NavItem(
        'assets/capoeira-fight.svg',
        'Prestations et Animations',
        'prestations',
        'prestations-et-animations'
      ),
      new NavItem('assets/auth-page.svg', 'Espace adhérents', 'authPage', 'espace-adherents'),
    ];

    this.updateMenuBurger();
    window.addEventListener('resize', () => this.updateMenuBurger());
  }

  updateMenuBurger(): void {
    this.menuBurger = window.innerWidth < 768;
  }

  addNav(): void {
    this.displayNavService.addNav();
  }

  removeNav(): void {
    this.displayNavService.removeNav();
  }
}
