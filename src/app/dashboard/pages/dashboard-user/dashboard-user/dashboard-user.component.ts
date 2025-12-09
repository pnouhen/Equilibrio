import { UsersModel } from './../../../../datas-Back-end/models/Users.model';
import { ToggleMember } from './../../../services/toggleMember.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersMembers } from '../../../../datas-Back-end/models/Users-members';

@Component({
  selector: 'app-dashboard-user',
  imports: [],
  templateUrl: './dashboard-user.component.html',
  styleUrl: './dashboard-user.component.scss',
})
export class DashboardUserComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public toggleMember: ToggleMember
  ) {}

  data!: UsersModel | null;
  userMember!: UsersMembers | null;

  ngOnInit(): void {
    this.data = JSON.parse(sessionStorage.getItem('user')!);
    const id = this.route.snapshot.paramMap.get('id');

    // URL is bad
    this.userMember = this.data?.member.find((member) => member.memberName === id) || null;
    if (!this.userMember) {
      this.router.navigate(['page-introuvable']);
      return;
    }
  }
}
