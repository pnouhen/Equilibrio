import { UserService } from './../../../../services/user.service';
import { ToggleContentUser } from './../../services/ToggleContentUser.service';
import { Component, effect } from '@angular/core';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { UserDataFilterCategoryData } from '../../../../../datas-Back-end/data/UserData-filter-category.data';
import { DashboardUserSlideShowComponent } from '../dashboard-user-slide-show/dashboard-user-slide-show.component';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { UserDataContentModel } from '../../../../../datas-Back-end/models/UserData-content.model';

@Component({
  selector: 'app-dashboard-user-content',
  imports: [DashboardUserSlideShowComponent],
  templateUrl: './dashboard-user-content.component.html',
  styleUrl: './dashboard-user-content.component.scss',
})
export class DashboardUserContentComponent {
  innerWidth: number = window.innerWidth;
  user!: string | undefined;
  type!: string | undefined;
  dashboardUserData!: UsersDataModel | undefined;

  constructor(public toggleContentUser: ToggleContentUser, private userService: UserService) {
    effect(() => {
      this.user = this.userService.user();
      this.type = this.userService.type();
      this.dashboardUserData = this.updateContent();
    });
  }

  private updateContent(): UsersDataModel | undefined {
    const originalData = this.toggleContentUser.contentArray();
    if (!originalData) return undefined;

    const contentFilter = this.filterContent(originalData);
    const suggestionData = this.displaySuggestions(originalData);

    const newContent: UserDataContentModel[] = suggestionData
      ? [suggestionData, ...contentFilter]
      : contentFilter;

    const filteredData: UsersDataModel = {
      ...originalData,
      content: newContent,
    };

    return filteredData;
  }

  filterContent(originalData: UsersDataModel): UserDataContentModel[] {
    const filters = UserDataFilterCategoryData.find((categories) => categories.id === this.user);

    return (
      filters?.categories.flatMap((category) =>
        originalData.content.filter((item) => item.category === category)
      ) ?? []
    );
  }

  displaySuggestions(originalData: UsersDataModel): UserDataContentModel | null {
    const suggestionsContent: (UsersDataLinkModel | UsersDataPdfModel)[] = originalData.content
      .flatMap((item) => item.links)
      .filter((link) => link.grade === this.userService.grade());

    if (suggestionsContent.length > 0) {
      return new UserDataContentModel('Suggestions', 'all', suggestionsContent);
    } else {
      return null;
    }
  }
}
