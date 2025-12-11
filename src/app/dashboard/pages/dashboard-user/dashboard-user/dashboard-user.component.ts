import { UserService } from './../../../services/user.service';
import { UsersModel } from './../../../../datas-Back-end/models/Users.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersMembers } from '../../../../datas-Back-end/models/Users-members';
import { DisplayUserMembers } from '../../../services/displayUserMembers';
import { DashboardUserMenuComponent } from '../components/dashboard-user-menu/dashboard-user-menu.component';
import { DashboardUserContentComponent } from "../components/dashboard-user-content/dashboard-user-content.component";

@Component({
  selector: 'app-dashboard-user',
  imports: [DashboardUserMenuComponent, DashboardUserContentComponent],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss',
})
export class DashboardUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public userService: UserService,
    private displayUserMembers: DisplayUserMembers
  ) {}

  data!: UsersModel | null;
  member: string = '';
  userMember!: UsersMembers | null;

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem('user')!);
    this.member = this.route.snapshot.paramMap.get('id') || '';

    // URL is bad
    this.userMember = this.data?.member.find((member) => member.memberName === this.member) || null;
    if (!this.userMember) {
      this.router.navigate(['page-introuvable']);
      return;
    } else if (this.data?.member) {
      // Send the member name and other member name in header
      this.userService.setUser(this.member);

      if (this.data?.member.length > 1) {
        this.userService.setOtherUser();

        this.displayUserMembers.toggleUserMember(false);
      }
    }
  }
}
