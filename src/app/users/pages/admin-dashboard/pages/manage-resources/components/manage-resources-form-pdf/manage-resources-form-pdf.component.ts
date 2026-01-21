import { PdfService } from '../../../../../../../core/services/PdfService.service';
import { Component, Input, OnInit } from '@angular/core';
import { SelectedGrade } from '../../services/SelectedGradeservice';
import { ManageResourcesFormService } from '../../services/ManageResources-form.service';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { UsersDataPdfModel } from '../../../../../../../datas-Back-end/models/UserData-pdf.model';

@Component({
  selector: 'app-manage-resources-form-pdf',
  imports: [InputSelectedComponent, FormMessageComponent],
  templateUrl: './manage-resources-form-pdf.component.html',
  styleUrl: './manage-resources-form-pdf.component.scss',
})
export class ManageResourcesFormPdfComponent implements OnInit {
  gradeText: string = 'Sélectionner';
  @Input() gradeData!: string[];
  file!: File;

  // FormMessage
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel('Le fichier a bien été ajouté', 'formMessageTrue'),
    new FormMessageModel('Au moins un des champs ne correspond pas', 'formMessageFasle'),
  ];

  constructor(
    public selectedLinkGrade: SelectedGrade,
    public manageResourcesFormService: ManageResourcesFormService,
    public pdfService: PdfService
  ) {}

  ngOnInit(): void {
    this.manageResourcesFormService.isSubmittedLink = false;
    this.isFormValid = false;
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.file = input.files[0];
  }

  resetFileSelected(input: HTMLInputElement) {
    input.value = '';
    this.file = undefined as unknown as File;
  }

  onSubmit(input: HTMLInputElement) {
    this.manageResourcesFormService.isSubmittedLink = true;

    const isFormTrue = this.gradeData.includes(this.gradeText) && this.file;

    if (isFormTrue && this.file.type === 'application/pdf') {
      this.isFormValid = true;
      
      // Convert the pdf in string and push resource
      this.manageResourcesFormService.convertString(this.file).then(async (fileString) => {
        const ressource: UsersDataPdfModel = {
          id: `${Date()}`,
          type: 'pdf',
          grade: this.gradeText,
          nameDownLoad: this.file.name,
          linkImage: await this.pdfService.convertFirstPageFromFile(this.file, 2),
          linkPdf: fileString,
        };

        this.manageResourcesFormService.links = [
          ...this.manageResourcesFormService.links,
          ressource,
        ];

        // Reset grade and file
        this.gradeText = 'Sélectionner';
        this.resetFileSelected(input);
      });
    } else {
      this.isFormValid = false;
    }
  }
}
