import { ToggleContentUser } from '../services/ToggleContentUser.service';
import { UserService } from '../../../services/user.service';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersMembers } from '../../../../datas-Back-end/models/Users-members';
import { DisplayUserMembers } from '../../../services/displayUserMembers';
import { DashboardUserMenuComponent } from '../components/dashboard-user-menu/dashboard-user-menu.component';
import { DashboardUserContentComponent } from '../components/dashboard-user-content/dashboard-user-content.component';
import { LinkUserMenuData } from '../../../datas/linkUserMenu.data';

@Component({
  selector: 'app-dashboard-user',
  imports: [DashboardUserMenuComponent, DashboardUserContentComponent],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss',
})
export class DashboardUserComponent implements OnInit {
  data!: UsersModel | null;
  member: string = '';
  memberCategory!: string;
  userMember!: UsersMembers | undefined;
  category: string | null = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private displayUserMembers: DisplayUserMembers,
    public toggleContentUser: ToggleContentUser
  ) {}

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem('user')!);
    this.member = this.route.snapshot.paramMap.get('id') || '';

    // URL is bad
    // For the member
    this.userMember =
      this.data?.member.find((member) => member.memberName === this.member) || undefined;

    // For the category in the menu
    const urlCategory = this.route.snapshot.paramMap.get('category') || null;

    if (urlCategory) {
      const found = LinkUserMenuData.find((link) => link.id === urlCategory);
      this.category = found ? found.id : null;
    }

    // Display content by category
    const isCategoryBabyValid =
      this.userMember?.category === 'baby' &&
      this.category !== 'presentation' &&
      this.category !== 'entrainement';

    const isCategoryValidChild =
      this.category === 'instruments' ||
      this.category === 'chants';

    if (!this.userMember || !this.category || isCategoryBabyValid) {
      this.router.navigate(['page-introuvable']);
      return;
    } else if(this.userMember?.category === 'child' && isCategoryValidChild) {
      this.router.navigate(['page-introuvable']);
    } else {
      this.toggleContentUser.toggleContent(this.category);
    }

    if (this.data?.member) {
      // Send the member name and other member name in header
      this.userService.setUser(this.userMember);

      if (this.data?.member.length > 1) {
        this.userService.setOtherUser();

        this.displayUserMembers.toggleUserMember(false);
      }
    }
  }
}
