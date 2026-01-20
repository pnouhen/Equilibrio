import { CategoriesData } from './../../../../datas/Categories.data';
import { ManageResourcesFormService } from './../../services/ManageResources-form.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageResourcesFormContentComponent } from '../manage-resources-form-content/manage-resources-form-content.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { UsersDataModel } from '../../../../../../../datas-Back-end/models/UserData.model';
import { UsersDashboardData } from '../../../../../../../core/services/UsersDashboard.service';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { CategoriesService } from '../../../../../../services/Categories.service';
import { UserDataContentModel } from '../../../../../../../datas-Back-end/models/UserData-content.model';

@Component({
  selector: 'app-manage-resources-form',
  imports: [FormsModule, ManageResourcesFormContentComponent, MessageFormComponent],
  templateUrl: './manage-resources-form.component.html',
  styleUrl: './manage-resources-form.component.scss',
})
export class ManageResourcesFormComponent implements OnInit {
  constructor(
    public manageResourcesFormService: ManageResourcesFormService,
    public usersDashboardData: UsersDashboardData,
    public categoriesService: CategoriesService,
  ) {}

  // Form Message
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('La création a fonctionné', 'messageFormTrue'),
    new MessageForm('Au moins un des éléments est manquant', 'messageFormFalse'),
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

        this.usersDashboardData.UsersDashboardData.set([
          ...this.usersDashboardData.UsersDashboardData(),
          newData,
        ]);
      } else {
        // Replace the data so that the dashboard updates immediately.
        const newUsersDashboard = this.usersDashboardData.UsersDashboardData().map((item) =>
          item.id === this.manageResourcesFormService.idUpdateData
            ? {
                ...item,
                title: this.manageResourcesFormService.title,
                categories: isCategoriesData.map((categorie) => categorie.id),
                content: contentWidthCategoriesData,
              }
            : item,
        );

        this.usersDashboardData.UsersDashboardData.set(newUsersDashboard);

        this.formMessages[0].text = 'La modification a fonctionné';
      }

      sessionStorage.setItem(
        'usersDashboard',
        JSON.stringify(this.usersDashboardData.UsersDashboardData()),
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
