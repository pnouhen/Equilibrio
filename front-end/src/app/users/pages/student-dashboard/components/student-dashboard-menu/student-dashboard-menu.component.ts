import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { UsersDashboardDataService } from './../../../../../core/services/UsersDashboard.service';
import { UserService } from '../../../../services/User.service';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { ManageResourcesService } from '../../../admin-pages/pages/manage-resources/services/ManageResources.service';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';

@Component({
  selector: 'app-student-dashboard-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-dashboard-menu.component.html',
  styleUrls: ['./student-dashboard-menu.component.scss'],
})
export class StudentDashboardMenuComponent {
  @ViewChild('listButtons') listButtons!: ElementRef<HTMLUListElement>;

  allButtons!: string[];
  innerWidth: number = window.innerWidth;
  isMenu: boolean = false;
  memberName!: string | null;

  constructor(
    public toggleContentUser: ToggleContentUser,
    public router: Router,
    public route: ActivatedRoute,
    public usersDashboardDataService: UsersDashboardDataService,
    public userService: UserService,
    public manageResourcesService: ManageResourcesService,
  ) {
    // Updates the list and scrolls to the top with each change
    effect(() => {
      const data = this.usersDashboardDataService.UsersDashboardDataService();
      this.allButtons = this.filterCategories(data);

      // We are waiting for the DOM to be updated
      setTimeout(() => {
        if (this.listButtons) {
          this.listButtons.nativeElement.scrollTop = 0;
        }
      });
    });
  }

  filterCategories(data: UsersDataModel[]): string[] {
    const category = this.userService.category();
    if (category) {
      return data.filter((data) => data.categories.includes(category)).map((data) => data.title);
    } else if (this.manageResourcesService.isAdmin) {
      return data.map((data) => data.title);
    }
    return [];
  }

  displayContentUser(route: string) {
    this.toggleContentUser.toggleContent(route);
    this.memberName = this.route.snapshot.paramMap.get('id') || null;

    if (!this.manageResourcesService.isAdmin) {
      this.router.navigate(['/espace-utilisateur', this.memberName, route]);
    }

    this.displayMenu();
  }

  displayMenu() {
    this.isMenu = !this.isMenu;
  }
}
