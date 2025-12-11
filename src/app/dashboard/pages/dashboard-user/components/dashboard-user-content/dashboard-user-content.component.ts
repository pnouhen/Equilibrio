import { ToggleContentUser } from './../../services/ToggleContentUser.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard-user-content',
  imports: [],
  templateUrl: './dashboard-user-content.component.html',
  styleUrl: './dashboard-user-content.component.scss',
})
export class DashboardUserContentComponent {  
  constructor(public toggleContentUser: ToggleContentUser) {}

}
