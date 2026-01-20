import { Component } from '@angular/core';
import { ManageResourcesFormService } from '../../services/ManageResources-form.service';
import { SlidesResourcesService } from '../../../../../../../core/services/SlidesResources.service';
import { StudentDashboardSlideVideoComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-video/student-dashboard-slide-video.component';
import { StudentDashboardSlidesPdfComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-pdf/student-dashboard-slides-pdf.component';
import { StudentDashboardSlideSongComponent } from '../../../../../student-dashboard/components/student-dashboard-slide-song/student-dashboard-slide-song.component';
import { UserDataContentModel } from '../../../../../../../datas-Back-end/models/UserData-content.model';
import { CategoriesData } from '../../../../datas/Categories.data';

@Component({
  selector: 'app-manage-resources-form-content-created',
  imports: [
    StudentDashboardSlideVideoComponent,
    StudentDashboardSlidesPdfComponent,
    StudentDashboardSlideSongComponent,
  ],
  templateUrl: './manage-resources-form-content-created.component.html',
  styleUrl: './manage-resources-form-content-created.component.scss',
})
export class ManageResourcesFormContentCreatedComponent {
  constructor(
    public manageResourcesFormService: ManageResourcesFormService,
    public slidesResourcesService: SlidesResourcesService,
  ) {}

  deleteContent(id: string) {
    this.manageResourcesFormService.contentCreated =
      this.manageResourcesFormService.contentCreated.filter((newContent) => newContent.id !== id);
  }

  updateContent(content: UserDataContentModel) {
    const categoriesData = CategoriesData.map((category) => ({
      ...category,
      add: content.categories.includes(category.value) ? true : false,
    }));

    this.manageResourcesFormService.idUpdateContent = content.id;
    this.manageResourcesFormService.subtitle = content.subTitle;
    this.manageResourcesFormService.description = content.description;
    this.manageResourcesFormService.categoriesContent = categoriesData;
    this.manageResourcesFormService.typeLinkText = 'Sélectionner';
    this.manageResourcesFormService.links = content.links;
  }
}
