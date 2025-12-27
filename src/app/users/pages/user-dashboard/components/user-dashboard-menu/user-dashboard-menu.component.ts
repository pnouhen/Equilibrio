import { UserService } from '../../../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LinkUserMenuData } from '../../../../datas/linkUserMenu.data';
import { LinkUserMenuModel } from '../../models/LinkUserMenuModel.model';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { Component, effect } from '@angular/core';

@Component({
  selector: 'app-user-dashboard-menu',
  imports: [],
  templateUrl: './user-dashboard-menu.component.html',
  styleUrl: './user-dashboard-menu.component.scss',
})
export class UserDashboardMenuComponent {
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

  displayContentUser(id: string) {
    this.toggleContentUser.toggleContent(id);

    this.memberName = this.route.snapshot.paramMap.get('id') || null;
    this.router.navigate(['/espace-utilisateur', this.memberName, id]);

    this.displayMenu()
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
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
