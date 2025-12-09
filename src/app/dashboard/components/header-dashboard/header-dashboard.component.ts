import { ToggleMember } from './../../services/toggleMember.service';
import { Component, OnInit, effect } from '@angular/core';
import { LogoComponent } from '../../../core/components/logo/logo.component';
import { UsersModel } from '../../../datas-Back-end/models/Users.model';
import { UsersMembers } from '../../../datas-Back-end/models/Users-members';

@Component({
  selector: 'app-header-dashboard',
  imports: [LogoComponent],
  templateUrl: './header-dashboard.component.html',
  styleUrl: './header-dashboard.component.scss',
})
export class HeaderDashboardComponent {
  memberSelect: UsersMembers | null = null;

  constructor(public toggleMember: ToggleMember) {
    // Effect triggered with each change in signal
    effect(() => {
      if (this.toggleMember.memberSelectedActive()) {
        this.memberSelect = this.toggleMember.memberSelected;
        console.log(this.memberSelect);
      } else {
        this.memberSelect = null;
      }
    });
  }

  deconnexionMember() {
    const user = sessionStorage.getItem("user")

    if(user) {
      sessionStorage.removeItem("user")
    }
  }
}
