import { DisplayUserMembers } from './../../../services/displayUserMembers';
import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard-user-members',
  imports: [RouterLink],
  templateUrl: './dashboard-user-members.component.html',
  styleUrl: './dashboard-user-members.component.scss',
})
export class DashboardUserMembersComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private displayUserMembers: DisplayUserMembers
  ) {}

  user!: UsersModel;

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem('user')!);

    // URL is bad
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== this.user.email) {
      this.router.navigate(['page-introuvable']);
      return;
    } else {
      this.displayUserMembers.toggleUserMember(true);
    }
  }
}
