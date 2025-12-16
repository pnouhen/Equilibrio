import { UserService } from './../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkUserMenuData } from '../../../../datas/linkUserMenu.data';
import { LinkUserMenuModel } from '../../models/LinkUserMenuModel.model';
import { ToggleContentUser } from './../../services/ToggleContentUser.service';
import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-menu',
  imports: [],
  templateUrl: './dashboard-user-menu.component.html',
  styleUrl: './dashboard-user-menu.component.scss',
})
export class DashboardUserMenuComponent {
  allButtons!: LinkUserMenuModel[];
  innerWidth: number = window.innerWidth;
  isMenu: boolean = false;
  memberName!: string | null;

  constructor(
    public toggleContentUser: ToggleContentUser,
    public router: Router,
    public route: ActivatedRoute,
    public userService: UserService
  ) {
    effect(() => {
      this.allButtons = this.filterLinkUserMenuData();
    });
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
  }

  displayContentUser(id: string) {
    this.toggleContentUser.toggleContent(id);

    this.memberName = this.route.snapshot.paramMap.get('id') || null;
    this.router.navigate(['/dashboard', this.memberName, id]);
  }

  filterLinkUserMenuData(): LinkUserMenuModel[] {
    if (this.userService.category() !== undefined && this.userService.category() === 'baby') {
      return LinkUserMenuData.filter((link) => link.id === 'presentation' || link.id === 'entrainement');
    } else if(this.userService.category() !== undefined && this.userService.category() === 'child') {
      return LinkUserMenuData.filter((link) => link.id !== 'instruments' && link.id !== 'chants');
    }
    return LinkUserMenuData;
  }
}
