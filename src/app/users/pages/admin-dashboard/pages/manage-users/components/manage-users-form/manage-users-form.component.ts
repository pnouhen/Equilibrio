import { SelectedStatut } from './../../services/SelectedStatut.service';
import { Component, OnInit } from '@angular/core';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { ManageUsersFormMembersComponent } from "../manage-users-form-members/manage-users-form-members.component";

@Component({
  selector: 'app-manage-users-form',
  imports: [InputSelectedComponent, ManageUsersFormMembersComponent],
  templateUrl: './manage-users-form.component.html',
  styleUrl: './manage-users-form.component.scss',
})
export class ManageUsersFormComponent implements OnInit {
  statutText: string = 'Sélectionner';
  statutData!: string[];

  constructor(public selectedStatut: SelectedStatut){}
  
  ngOnInit(): void {
    this.statutData = ['Elève', 'Enseignant'];
  }
}
