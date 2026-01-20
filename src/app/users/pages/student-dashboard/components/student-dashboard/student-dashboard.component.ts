import { UsersDashboardData } from './../../../../../core/services/UsersDashboard.service';
import { ManageResourcesService } from './../../../admin-dashboard/pages/manage-resources/services/ManageResources.service';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { UserService } from '../../../../services/user.service';
import { UsersModel } from '../../../../../datas-Back-end/models/Users.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersMembers } from '../../../../../datas-Back-end/models/Users-members';
import { DisplayUserMembers } from '../../../../services/displayUserMembers.service';
import { StudentDashboardMenuComponent } from '../student-dashboard-menu/student-dashboard-menu.component';
import { StudentDashboardContentComponent } from '../student-dashboard-content/student-dashboard-content.component';

@Component({
  selector: 'app-student-dashboard',
  imports: [StudentDashboardMenuComponent, StudentDashboardContentComponent],
  templateUrl: './student-dashboard.component.html',
  styleUrl: './student-dashboard.component.scss',
})
export class StudentDashboardComponent implements OnInit {
  user!: UsersModel | null;
  member: string = '';
  memberCategory!: string;
  userMember!: UsersMembers | undefined;
  category: string | null = '';

  constructor(
    private route: ActivatedRoute,
    public usersDashboardData: UsersDashboardData,
    private router: Router,
    public userService: UserService,
    private displayUserMembers: DisplayUserMembers,
    public toggleContentUser: ToggleContentUser,
    public manageResourcesService: ManageResourcesService,
  ) {}

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    this.member = this.route.snapshot.paramMap.get('id') || '';

    // URL is bad
    // For the member
    this.userMember =
      this.user?.members.find((member) => member.memberName === this.member) || undefined;

    // For the category in the menu
    const urlCategory = this.route.snapshot.paramMap.get('category') || null;

    if (urlCategory) {
      const found = this.usersDashboardData
        .UsersDashboardData()
        .find((data) => data.title === urlCategory);

      if (found) {
        this.category = found ? found.title : null;
      }
    }

    // Display content by category
    const dataForMember = this.usersDashboardData.UsersDashboardData().map((data) => ({
      title: data.title,
      categories: data.categories,
    }));
    let contentFilters: string[] = [];

    if (this.userMember) {
      const category = this.userMember.category

      contentFilters = dataForMember
        .filter((data) => data.categories.includes(category))
        .map((data) => data.title);
    }

    if (!this.userMember || !this.category || !contentFilters.includes(this.category)) {
      this.router.navigate(['page-introuvable']);
      return;
    }  else {
      this.toggleContentUser.toggleContent(this.category);
    }

    if (this.user?.members) {
      // Send the member name and other member name in header
      this.userService.setUser(this.userMember);

      if (this.user?.members.length > 1) {
        this.userService.setOtherUser();

        this.displayUserMembers.isUserMembers.set(true);
      }
    }

    // For the admin
    this.manageResourcesService.isAdmin = false;
  }
}
