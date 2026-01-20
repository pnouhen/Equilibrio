import { ManageResourcesService } from './../../services/ManageResources.service';
import { Component, OnInit } from '@angular/core';
import { ReturnAdminDashboardComponent } from "../../../../components/return-admin-dashboard/return-admin-dashboard.component";
import { ManageResourcesAllResourcesComponent } from "../manage-resources-all-resources/manage-resources-all-resources.component";
import { ManageResourcesFormComponent } from "../manage-resources-form/manage-resources-form.component";

@Component({
  selector: 'app-manage-resources',
  imports: [ReturnAdminDashboardComponent, ManageResourcesAllResourcesComponent, ManageResourcesFormComponent],
  templateUrl: './manage-resources.component.html',
  styleUrl: './manage-resources.component.scss',
})
export class ManageResourcesComponent implements OnInit {

  constructor(public manageResourcesService: ManageResourcesService) {}

  ngOnInit(): void {
    this.manageResourcesService.isAdmin = true
  }
}
