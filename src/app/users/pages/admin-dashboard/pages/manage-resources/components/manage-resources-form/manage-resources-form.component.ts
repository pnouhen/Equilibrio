import { CategoriesData } from './../../../../datas/Categories.data';
import { ManageResourcesFormService } from './../../services/ManageResources-form.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageResourcesFormContentComponent } from '../manage-resources-form-content/manage-resources-form-content.component';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { UsersDataModel } from '../../../../../../../datas-Back-end/models/UserData.model';
import { UsersDashboardDataService } from '../../../../../../../core/services/UsersDashboard.service';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { CategoriesService } from '../../../../../../services/Categories.service';
import { UserDataContentModel } from '../../../../../../../datas-Back-end/models/UserData-content.model';

@Component({
  selector: 'app-manage-resources-form',
  imports: [FormsModule, ManageResourcesFormContentComponent, FormMessageComponent],
  templateUrl: './manage-resources-form.component.html',
  styleUrl: './manage-resources-form.component.scss',
})
export class ManageResourcesFormComponent implements OnInit {
  constructor(
    public manageResourcesFormService: ManageResourcesFormService,
    public usersDashboardDataService: UsersDashboardDataService,
    public categoriesService: CategoriesService,
  ) {}

  // Form Message 
 // Managing the display of the message after submit
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: FormMessageModel[] = [
    new FormMessageModel('La création a fonctionné', 'formMessageTrue'),
    new FormMessageModel('Au moins un des éléments est manquant', 'formMessageFalse'),
  ];

  ngOnInit(): void {
    this.manageResourcesFormService.categoriesData =
      this.manageResourcesFormService.categoriesData = CategoriesData.map((item) => ({
        ...item,
      }));
  }

  onSubmit() {
    this.isSubmitted = true;

    // Check if at least one category is checked
    const isCategoriesData = this.manageResourcesFormService.categoriesData.filter(
      (category) => category.add === true,
    );

    const isFormCompleted =
      this.manageResourcesFormService.title !== '' &&
      this.manageResourcesFormService.contentCreated.length > 0 &&
      isCategoriesData.length > 0;

    if (isFormCompleted) {
      this.isFormValid = true;
      this.manageResourcesFormService.isSubmittedContent = false;

      // Transform the content categories for the data
      const contentWidthCategoriesData: UserDataContentModel[] =
        this.manageResourcesFormService.contentCreated.map((content) => ({
          ...content,
          categories: this.categoriesService.changeCategoriesValue(content.categories, true),
        }));

      // For add / update a data
      if (!this.manageResourcesFormService.idUpdateData) {
        const newData: UsersDataModel = {
          id: `${Date()}`,
          title: this.manageResourcesFormService.title,
          categories: isCategoriesData.map((categorie) => categorie.id),
          content: contentWidthCategoriesData,
        };

        this.usersDashboardDataService.UsersDashboardDataService.set([
          ...this.usersDashboardDataService.UsersDashboardDataService(),
          newData,
        ]);
      } else {
        // Replace the data so that the dashboard updates immediately.
        const newUsersDashboard = this.usersDashboardDataService.UsersDashboardDataService().map((item) =>
          item.id === this.manageResourcesFormService.idUpdateData
            ? {
                ...item,
                title: this.manageResourcesFormService.title,
                categories: isCategoriesData.map((categorie) => categorie.id),
                content: contentWidthCategoriesData,
              }
            : item,
        );

        this.usersDashboardDataService.UsersDashboardDataService.set(newUsersDashboard);

        this.formMessage[0].text = 'La modification a fonctionné';
      }

      sessionStorage.setItem(
        'usersDashboard',
        JSON.stringify(this.usersDashboardDataService.UsersDashboardDataService()),
      );

      this.resetAll();
    } else {
      this.isFormValid = false;
    }
  }

  resetAll() {
    this.manageResourcesFormService.title = '';
    this.manageResourcesFormService.categoriesData = CategoriesData.map((item) => ({
      ...item,
    }));
    this.manageResourcesFormService.contentCreated = [];
  }
}
