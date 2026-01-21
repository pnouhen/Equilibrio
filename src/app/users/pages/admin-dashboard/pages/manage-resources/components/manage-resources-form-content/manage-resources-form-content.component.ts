import { ManageResourcesFormService } from './../../services/ManageResources-form.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { SelectedCategoryUserDataContent } from '../../services/SelectedCategoryUserDataContent.service';
import { SelectedTypeUserDataContent } from '../../services/SelectedTypeUserDataContent.service';
import { ManageResourcesFormVideoComponent } from '../manage-resources-form-video/manage-resources-form-video.component';
import { ManageResourcesFormPdfComponent } from '../manage-resources-form-pdf/manage-resources-form-pdf.component';
import { ManageResourcesFormSongComponent } from '../manage-resources-form-song/manage-resources-form-song.component';
import { StudentDashboardSlideVideoComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-video/student-dashboard-slide-video.component';
import { GradesData } from '../../../manage-users/datas/Grade.data';
import { StudentDashboardSlidesPdfComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-pdf/student-dashboard-slides-pdf.component';
import { SelectedGrade } from '../../services/SelectedGradeservice';
import { StudentDashboardSlideSongComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-song/student-dashboard-slide-song.component';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { UserDataContentModel } from '../../../../../../../datas-Back-end/models/UserData-content.model';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { ManageResourcesFormContentCreatedComponent } from '../manage-resources-form-content-created/manage-resources-form-content-created.component';
import { CategoriesData } from '../../../../datas/Categories.data';
import { SlidesResourcesService } from '../../../../../../../core/services/SlidesResources.service';

@Component({
  selector: 'app-manage-resources-form-content',
  imports: [
    FormsModule,
    InputSelectedComponent,
    ManageResourcesFormVideoComponent,
    ManageResourcesFormPdfComponent,
    ManageResourcesFormSongComponent,
    StudentDashboardSlideVideoComponent,
    StudentDashboardSlidesPdfComponent,
    StudentDashboardSlideSongComponent,
    FormMessageComponent,
    ManageResourcesFormContentCreatedComponent,
  ],
  templateUrl: './manage-resources-form-content.component.html',
  styleUrl: './manage-resources-form-content.component.scss',
})
export class ManageResourcesFormContentComponent implements OnInit {
  typeLinkData: string[] = [];
  gradeData!: string[];

  // Form Message
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel('La création a fonctionné', 'formMessageTrue'),
    new FormMessageModel('Au moins un des éléments est manquant', 'formMessageFalse'),
  ];

  isSubmittedLink: boolean = false;

  constructor(
    public selectedCategoryUserDataContent: SelectedCategoryUserDataContent,
    public selectedTypeUserDataContent: SelectedTypeUserDataContent,
    public manageResourcesFormService: ManageResourcesFormService,
    public selectedLinkGrade: SelectedGrade,
    public slidesResourcesService: SlidesResourcesService,
  ) {}

  ngOnInit(): void {
    this.gradeData = ['Aucun', 'novato', ...GradesData.flatMap((category) => category.grades)];

    this.manageResourcesFormService.categoriesContent = CategoriesData.map((item) => ({
      ...item,
    }));

    this.typeLinkData = ['PDF', 'Vidéo', 'Musique'];
  }

  deleteResource = (id: string) => {
    this.manageResourcesFormService.links = this.manageResourcesFormService.links.filter(
      (link) => link.id !== id,
    );
  };

  changeTypeResource = () => {
    this.selectedLinkGrade.isSelectedDisplay = false;
  };

  onSubmitContent() {
    this.manageResourcesFormService.isSubmittedContent = true;

    const isCategoriesContent = this.manageResourcesFormService.categoriesContent.filter(
      (category) => category.add === true,
    );

    const isFormCompleted =
      this.manageResourcesFormService.subtitle !== '' &&
      this.manageResourcesFormService.links.length > 0 &&
      isCategoriesContent.length > 0;

    if (isFormCompleted) {
      this.isFormValid = true;

      // For add / update a content
      if (!this.manageResourcesFormService.idUpdateContent) {
        const newContent: UserDataContentModel = {
          id: `${Date()}`,
          subTitle: this.manageResourcesFormService.subtitle,
          description: this.manageResourcesFormService.description,
          categories: isCategoriesContent.map((categorie) => categorie.value),
          links: this.manageResourcesFormService.links,
        };

        this.manageResourcesFormService.contentCreated = [
          ...this.manageResourcesFormService.contentCreated,
          newContent,
        ];
      } else {
        const updateContent = this.manageResourcesFormService.contentCreated.find(
          (content) => content.id === this.manageResourcesFormService.idUpdateContent,
        );

        if (updateContent) {
          ((updateContent.id = this.manageResourcesFormService.idUpdateContent),
            (updateContent.subTitle = this.manageResourcesFormService.subtitle),
            (updateContent.description = this.manageResourcesFormService.description),
            (updateContent.categories = isCategoriesContent.map((categorie) => categorie.value)),
            (updateContent.links = this.manageResourcesFormService.links));

          this.formMessage[0].text = 'La modification a fonctionné';
        } else {
          this.isFormValid = false;
        }

        this.manageResourcesFormService.idUpdateContent = null;
      }

      // Reset all
      this.manageResourcesFormService.subtitle = '';
      this.manageResourcesFormService.description = '';
      this.manageResourcesFormService.categoriesContent = CategoriesData.map((item) => ({
        ...item,
      }));
      this.manageResourcesFormService.links = [];
      this.manageResourcesFormService.isSubmittedLink = false;
    } else {
      this.isFormValid = false;
    }
  }
}
