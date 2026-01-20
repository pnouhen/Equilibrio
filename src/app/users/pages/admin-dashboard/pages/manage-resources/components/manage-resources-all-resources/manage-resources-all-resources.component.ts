import { Component } from '@angular/core';
import { StudentDashboardMenuComponent } from '../../../../../student-dashboard/components/student-dashboard-menu/student-dashboard-menu.component';
import { StudentDashboardContentComponent } from '../../../../../student-dashboard/components/student-dashboard-content/student-dashboard-content.component';

@Component({
  selector: 'app-manage-resources-all-resources',
  imports: [StudentDashboardMenuComponent, StudentDashboardContentComponent],
  templateUrl: './manage-resources-all-resources.component.html',
  styleUrl: './manage-resources-all-resources.component.scss',
})
export class ManageResourcesAllResourcesComponent {
}
