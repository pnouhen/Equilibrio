import { ToggleContentUser } from '../../student-dashboard/services/ToggleContentUser.service';
import { DisplayUserMembersService } from '../../../../core/services/DisplayUserMembers.service';
import { Component, OnInit } from '@angular/core';
import { UsersModel } from '../../../../datas-Back-end/models/Users.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-student-managment',
  imports: [RouterLink],
  templateUrl: './student-managment.component.html',
  styleUrl: './student-managment.component.scss',
})
export class StudentManagmentComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private displayUserMembersService: DisplayUserMembersService,
    private toggleContentUser: ToggleContentUser
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
      this.displayUserMembersService.isUserMembers.set(false);
      this.toggleContentUser.toggleContent('Présentation')
    }
  }
}
