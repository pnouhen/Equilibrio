import { LogoComponent } from './../logo/logo.component';
import { Component, OnInit } from '@angular/core';
import { NavItem } from '../models/NavItem';
import { RouterLink, RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [LogoComponent, RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  headerLinks!: NavItem[];
  menuBurger!: boolean;
  displayNav: boolean = false;

  ngOnInit(): void {
    this.headerLinks = [
      new NavItem('assets/home.svg', 'Acceuil', 'home', ''),
      new NavItem('assets/berimbau.svg', 'La capoeira', 'capoeira', 'la-capoeira'),
      new NavItem('assets/map.svg', 'Lieux & Horaires', 'timePlace', 'lieux-et-horaires'),
      new NavItem(
        'assets/capoeira-fight.svg',
        'Prestations et Animations',
        'services',
        'prestations-et-animations'
      ),
      new NavItem('assets/auth-page.svg', 'Espace adhérents', 'authPage', 'espace-adherents'),
    ];

    this.updateMenuBurger();
  }

  updateMenuBurger(): void {
    this.menuBurger = window.innerWidth < 768;
  }

  handleDisplayNav(): void {
    this.displayNav = !this.displayNav
    const nav = document.getElementById("nav")
    if(this.displayNav) {
      nav?.classList.add('display')
    } else {
      nav?.classList.remove('display')
    }
  }
}
