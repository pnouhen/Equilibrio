import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { UserService } from '../../../../services/user.service';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersMembers } from '../../../../../datas-Back-end/models/Users-members';
import { DisplayUserMembers } from '../../../../services/displayUserMembers.service';
import { StudentDashboardMenuComponent } from '../student-dashboard-menu/student-dashboard-menu.component';
import { StudentDashboardContentComponent } from '../student-dashboard-content/student-dashboard-content.component';
import { LinkUserMenuData } from '../../datas/linkUserMenu.data';

@Component({
  selector: 'app-student-dashboard',
  imports: [StudentDashboardMenuComponent, StudentDashboardContentComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
})
export class StudentDashboardComponent implements OnInit {
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
      this.data?.members.find((member) => member.memberName === this.member) || undefined;

    // For the category in the menu
    const urlCategory = this.route.snapshot.paramMap.get('category') || null;

    if (urlCategory) {
      const found = LinkUserMenuData.find((link) => link.route === urlCategory);
      this.category = found ? found.route : null;
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

    if (this.data?.members) {
      // Send the member name and other member name in header
      this.userService.setUser(this.userMember);

      if (this.data?.members.length > 1) {
        this.userService.setOtherUser();

        this.displayUserMembers.isUserMembers.set(false);
      }
    }
  }
}
