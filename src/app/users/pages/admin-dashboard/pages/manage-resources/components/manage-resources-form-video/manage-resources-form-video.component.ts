import { ManageResourcesFormService } from '../../services/ManageResources-form.service';
import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { SelectedGrade } from '../../services/SelectedGradeservice';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { UsersDataLinkModel } from '../../../../../../../datas-Back-end/models/UserData-link.model';

@Component({
  selector: 'app-manage-resources-form-video',
  imports: [FormsModule, InputSelectedComponent, MessageFormComponent],
  templateUrl: './manage-resources-form-video.component.html',
  styleUrl: './manage-resources-form-video.component.scss',
})
export class ManageResourcesFormVideoComponent implements OnInit {
  title!: string;
  gradeText: string = 'Sélectionner';
  @Input() gradeData!: string[];
  link!: string;

  // FormMessage
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('La vidéo a bien été ajouté', 'messageFormTrue'),
    new MessageForm('Au moins un des champs ne correspond pas', 'messageFormFasle'),
  ];

  constructor(
    public selectedLinkGrade: SelectedGrade,
    public manageResourcesFormService: ManageResourcesFormService
  ) {}

  ngOnInit(): void {
    this.manageResourcesFormService.isSubmittedLink = false;
    this.isFormValid = false;
  }

  submitLink() {
    this.manageResourcesFormService.isSubmittedLink = true;

    if (this.title !== '' && this.gradeData.includes(this.gradeText) && new URL(this.link)) {
      this.isFormValid = true;

      const link: UsersDataLinkModel = {
        id: `${Date()}`,
        type: 'video',
        title: this.title,
        grade: this.gradeText === "Aucun" ? "": this.gradeText ,
        url: this.link,
      };
      const newLinks = [...this.manageResourcesFormService.links, link];
      this.manageResourcesFormService.links = newLinks;

      // Reset Form
      this.title = '';
      this.gradeText = 'Sélectionner';
      this.link = '';
    } else {
      this.isFormValid = false;
    }
  }
}
