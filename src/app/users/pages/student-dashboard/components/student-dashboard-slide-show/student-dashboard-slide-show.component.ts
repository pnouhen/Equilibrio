import { ManageResourcesService } from './../../../admin-pages/pages/manage-resources/services/ManageResources.service';
import { Component, Input, OnInit } from '@angular/core';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { UserDataContentModel } from '../../../../../datas-Back-end/models/UserData-content.model';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { StudentDashboardSlidesComponent } from '../student-dashboard-slides/student-dashboard-slides.component';

@Component({
  selector: 'app-student-dashboard-slide-show',
  imports: [StudentDashboardSlidesComponent],
  templateUrl: './student-dashboard-slide-show.component.html',
  styleUrl: './student-dashboard-slide-show.component.scss',
})
export class StudentDashboardSlideShowComponent implements OnInit {
  @Input() dashboardData!: UsersDataModel | undefined;
  @Input() indexContent!: string;

  private _contentData!: UserDataContentModel;

  @Input()
  set contentData(value: UserDataContentModel) {
    this._contentData = value;
    if (value) {
      // Resets the index to 0 for this content
      this.carouselIndices.set(value, 0);

      // Resets the state of the buttons
      this.carouselButtonStates.set(value, {
        prev: true,
        next: (value.links?.length ?? 0) > 1 ? false : true,
      });

      // Update the position so that the display corresponds to index 0
      this.updateSlidePosition(value, this.indexContent);
    }
  }

  get contentData(): UserDataContentModel {
    return this._contentData;
  }

  innerWidth: number = window.innerWidth;

  constructor(
    public toggleContentUser: ToggleContentUser,
    public manageResourcesService: ManageResourcesService
  ) {}

  // Map to store the current index of each carousel
  carouselIndices = new Map<UserDataContentModel, number>();

  // Map to store the state of the buttons in each carousel
  carouselButtonStates = new Map<UserDataContentModel, { prev: boolean; next: boolean }>();

  // For admin
  choiceEndSlidesShow!: number

  ngOnInit(): void {
    const array = this.toggleContentUser.contentArray();
    array?.content.forEach((content: UserDataContentModel) => {
      // Initialize hints and buttons for all content on first render
      this.carouselIndices.set(content, 0);
      this.carouselButtonStates.set(content, {
        prev: true,
        next: (content.links?.length ?? 0) > 1 ? false : true,
      });
    });

    // If admin, change the end of slides show
    this.choiceEndSlidesShow = this.manageResourcesService.isAdmin ? 1 : 2
  }

  scrollPrev(content: UserDataContentModel, index: string) {
    const current = this.carouselIndices.get(content) ?? 0;
    const state = this.carouselButtonStates.get(content)!;

    if (current > 0) {
      this.carouselIndices.set(content, current - 1);
      this.updateSlidePosition(content, index);

      state.next = false;
      state.prev = current - 1 === 0;
    }
  }

  scrollNext(content: UserDataContentModel, index: string) {
    const current = this.carouselIndices.get(content) ?? 0;
    
    const maxIndex = content.links.length - this.choiceEndSlidesShow;

    if (!this.carouselButtonStates.has(content)) {
      this.carouselButtonStates.set(content, { prev: true, next: false });
    }

    const state = this.carouselButtonStates.get(content)!;

    if (current < maxIndex) {
      this.carouselIndices.set(content, current + 1);
      this.updateSlidePosition(content, index);
      state.prev = false;
      state.next = current + 1 === maxIndex;
    }
  }

  updateSlidePosition(content: UserDataContentModel, index: string) {
    const container = document.getElementById(index);
    if (container) {
      // Retrieves the width of the first slide + gap to calculate the offset
      const slide = container.querySelector('.slide') as HTMLElement;
      const slideWidth = slide.offsetWidth + parseInt(getComputedStyle(container).gap);
      const current = this.carouselIndices.get(content) ?? 0;

      container.style.transform = `translateX(-${current * slideWidth}px)`;
      container.style.transition = 'transform 0.4s ease';
    }
  }
}
