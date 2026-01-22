import { CategoriesService } from './../../../../../services/Categories.service';
import { UsersDashboardDataService } from './../../../../../../core/services/UsersDashboard.service';
import { Injectable } from '@angular/core';
import { UsersDataLinkModel } from '../../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../../datas-Back-end/models/UserData-pdf.model';
import { UsersDataSongModel } from '../../../../../../datas-Back-end/models/UsersData-song.model';
import { UserDataContentModel } from '../../../../../../datas-Back-end/models/UserData-content.model';
import { CateogriesModel } from '../../../models/Categories.model';

@Injectable({
  providedIn: 'root',
})
export class ManageResourcesFormService {
  title!: string;
  categoriesData!: CateogriesModel[];

  // Content
  subtitle!: string;
  description!: string;
  categoriesContent!: CateogriesModel[];
  typeLinkText: string = 'Sélectionner';
  contentCreated: UserDataContentModel[] = [];
  links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[] = [];

  // Id for Update
  idUpdateData!: string | null;
  idUpdateContent!: string | null;

  // Display Message form fieldset
  isSubmittedContent: boolean = false;
  isSubmittedLink: boolean = false;

  constructor(
    public usersDashboardDataService: UsersDashboardDataService,
    public categoriesService: CategoriesService,
  ) {}

  convertString(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (typeof reader.result === 'string') {
          resolve(reader.result);
        } else {
          reject(new Error('Résultat invalide'));
        }
      };

      reader.onerror = () => {
        reject(reader.error);
      };

      reader.readAsDataURL(file);
    });
  }

  updateResource(id: string | undefined) {
    if (id) {
      this.idUpdateData = id;

      const dataUpdate = this.usersDashboardDataService
        .UsersDashboardDataService()
        .find((data) => data.id === id);

      if (dataUpdate) {
        this.title = dataUpdate.title;
        this.categoriesData = this.categoriesService.generateCategoriesData(dataUpdate.categories);
        this.contentCreated = dataUpdate.content.map((content) => ({
          ...content,
          categories: this.categoriesService.changeCategoriesValue(content.categories, false),
        }));
      }
    }
  }

  deleteResource(id: string | undefined) {
    if (id) {
      this.usersDashboardDataService.UsersDashboardDataService.set(
        this.usersDashboardDataService.UsersDashboardDataService().filter((data) => data.id !== id),
      );

      sessionStorage.setItem(
        'usersDashboard',
        JSON.stringify(this.usersDashboardDataService.UsersDashboardDataService()),
      );
    }
  }
}
