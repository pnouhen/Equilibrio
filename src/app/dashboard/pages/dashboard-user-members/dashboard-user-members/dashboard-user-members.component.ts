import { ToggleMember } from './../../../services/toggleMember.service';
import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UsersMembers } from '../../../../datas-Back-end/models/Users-members';

@Component({
  selector: 'app-dashboard-user-members',
  imports: [RouterLink],
  templateUrl: './dashboard-user-members.component.html',
  styleUrl: './dashboard-user-members.component.scss',
})
export class DashboardUserMembersComponent implements OnInit {
  constructor(
    public toggleMember: ToggleMember,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  user!: UsersModel;

  ngOnInit(): void {
    this.toggleMember.resetMember();
    this.user = JSON.parse(sessionStorage.getItem('user')!);
    
    // URL is bad
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== this.user.email) {
      this.router.navigate(['page-introuvable']);
      return;
    }
  }

  selectedMember(memberSelected: UsersMembers): void {
    this.toggleMember.selectedMember(memberSelected);
  }
}
