import { ToggleContentUser } from './../../services/ToggleContentUser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-menu',
  imports: [],
  templateUrl: './dashboard-user-menu.component.html',
  styleUrl: './dashboard-user-menu.component.scss',
})
export class DashboardUserMenuComponent implements OnInit {
  allButtons!: string[];
  innerWidth: number = window.innerWidth;
  isMenu: boolean = false;

  constructor(public toggleContentUser: ToggleContentUser) {}

  ngOnInit(): void {
    this.allButtons = [
      'Présentation',
      'Entraînement',
      'Fiches d’examen',
      'Mouvements',
      'Instruments',
      'Chants',
    ];
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
  }
}
