import { ManageResourcesService } from './../../../admin-pages/pages/manage-resources/services/ManageResources.service';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { UserService } from '../../../../services/User.service';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { Component, effect, ElementRef, ViewChild } from '@angular/core';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { UserDataFilterCategoryData } from '../../../../../datas-Back-end/data/UserData-filter-category.data';
import { StudentDashboardSlideShowComponent } from '../student-dashboard-slide-show/student-dashboard-slide-show.component';
import { UsersDataLinkModel } from '../../../../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../../../../datas-Back-end/models/UserData-pdf.model';
import { UserDataContentModel } from '../../../../../datas-Back-end/models/UserData-content.model';
import { ManageResourcesFormService } from '../../../admin-pages/pages/manage-resources/services/ManageResources-form.service';

@Component({
  selector: 'app-student-dashboard-content',
  imports: [StudentDashboardSlideShowComponent],
  templateUrl: './student-dashboard-content.component.html',
  styleUrl: './student-dashboard-content.component.scss',
})
export class StudentDashboardContentComponent {
  @ViewChild('content') content!: ElementRef<HTMLDivElement>;

  innerWidth: number = window.innerWidth;
  category!: string | undefined;
  grade!: string | undefined;
  dashboardData!: UsersDataModel | undefined;

  constructor(
    public toggleContentUser: ToggleContentUser,
    private userService: UserService,
    public manageResourcesService: ManageResourcesService,
    public manageResourcesFormService: ManageResourcesFormService,
  ) {
    effect(() => {
      this.category = this.userService.category();
      this.grade = this.userService.grade();
      this.dashboardData = this.updateContent();
      // Scroll during the content change
      setTimeout(() => {
        if (this.content?.nativeElement) {
          this.content.nativeElement.scrollTop = 0;
        }
      }, 0);
    });
  }

  private updateContent(): UsersDataModel | undefined {
    const originalData = this.toggleContentUser.contentArray();
    if (!originalData) return undefined;

    const contentFilter = originalData.content;
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

  displaySuggestions(originalData: UsersDataModel): UserDataContentModel | null {
    const suggestionsContent = originalData.content
      .flatMap((item) => item.links)
      .filter(
        (link): link is UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel =>
          this.hasGrade(link) && this.comparedGrade(link.grade),
      );

    if (suggestionsContent.length > 0 && !this.manageResourcesService.isAdmin) {
      return new UserDataContentModel(
        'suggestions',
        'Suggestions',
        '',
        ['child', 'teen', 'adult'],
        suggestionsContent,
      );
    } else {
      return null;
    }
  }

  hasGrade(
    link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel,
  ): link is UsersDataLinkModel | UsersDataPdfModel {
    return 'grade' in link && typeof (link as any).grade === 'string';
  }

  comparedGrade(linkGrade: string): boolean {
    if (this.category === 'adult') {
      return linkGrade === this.grade;
    } else {
      return linkGrade.includes(this.grade || '');
    }
  }
}
