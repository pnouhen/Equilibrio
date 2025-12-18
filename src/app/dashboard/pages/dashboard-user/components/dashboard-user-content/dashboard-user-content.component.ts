import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { UserService } from './../../../../services/user.service';
import { ToggleContentUser } from './../../services/ToggleContentUser.service';
import { Component, effect, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('content') content!: ElementRef<HTMLDivElement>;

  innerWidth: number = window.innerWidth;
  category!: string | undefined;
  grade!: string | undefined;
  dashboardUserData!: UsersDataModel | undefined;

  constructor(public toggleContentUser: ToggleContentUser, private userService: UserService) {
  effect(() => {
    this.category = this.userService.category();
    this.grade = this.userService.grade();
    this.dashboardUserData = this.updateContent();

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
    // A teen can have a child's or adult's rope
    if (
      this.grade?.includes('cinza') &&
      (originalData.id === 'fiches-examen' || originalData.id === 'mouvements') &&
      this.category === 'teen'
    )
      this.category = 'child';

    // Filters category associated
    const filters = UserDataFilterCategoryData.find(
      (categories) => categories.id === this.category
    );

    return (
      filters?.categories.flatMap((category) =>
        originalData.content.filter((item) => item.category === category)
      ) ?? []
    );
  }

  displaySuggestions(originalData: UsersDataModel): UserDataContentModel | null {
    const suggestionsContent: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[] = originalData.content
      .flatMap((item) => item.links)
      .filter((link) => this.comparedGrade(link.grade));

      if (suggestionsContent.length > 0) {
      return new UserDataContentModel('Suggestions', '', 'all', suggestionsContent);
    } else {
      return null;
    }
  }

  comparedGrade(linkGrade: string): boolean {
    if(this.category === "adult") {
      return linkGrade === this.grade
    } else {
     return linkGrade.includes(this.grade || '')
    }
  }
}
