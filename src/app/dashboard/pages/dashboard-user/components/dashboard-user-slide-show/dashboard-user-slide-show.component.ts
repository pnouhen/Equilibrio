import { Component, Input, OnInit } from '@angular/core';
import { ToggleContentUser } from '../../services/ToggleContentUser.service';
import { UserDataContentModel } from '../../../../../datas-Back-end/models/UserData-content.model';
import { UsersDataModel } from '../../../../../datas-Back-end/models/UserData.model';
import { DashboardUserSlidesComponent } from "../dashboard-user-slides/dashboard-user-slides.component";

@Component({
  selector: 'app-dashboard-user-slide-show',
  imports: [DashboardUserSlidesComponent],
  templateUrl: './dashboard-user-slide-show.component.html',
  styleUrl: './dashboard-user-slide-show.component.scss',
})
export class DashboardUserSlideShowComponent implements OnInit {
  @Input() dashboardUserData!: UsersDataModel | undefined;
  @Input() indexContent!: number;

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
        next: (value.links?.length ?? 0) > 1 ? false : true
      });

      // Update the position so that the display corresponds to index 0
      const index = this.indexContent ?? 0;
      this.updateSlidePosition(value, index);
    }
  }

  get contentData(): UserDataContentModel {
    return this._contentData;
  }

  innerWidth: number = window.innerWidth;

  constructor(public toggleContentUser: ToggleContentUser) {}

  // Map pour stocker l'index courant de chaque carousel
  carouselIndices = new Map<UserDataContentModel, number>();

  // Map pour stocker l'état des boutons de chaque carousel
  carouselButtonStates = new Map<UserDataContentModel, { prev: boolean; next: boolean }>();

  ngOnInit(): void {
    const array = this.toggleContentUser.contentArray();
    array?.content.forEach((content: UserDataContentModel) => {
      // Initialisation des indices et des boutons pour tous les contenus au premier rendu
      this.carouselIndices.set(content, 0);
      this.carouselButtonStates.set(content, { prev: true, next: (content.links?.length ?? 0) > 1 ? false : true });
    });
  }

  scrollPrev(content: UserDataContentModel, index: number) {
    const current = this.carouselIndices.get(content) ?? 0;
    const state = this.carouselButtonStates.get(content)!;

    if (current > 0) {
      this.carouselIndices.set(content, current - 1);
      this.updateSlidePosition(content, index);

      state.next = false;
      state.prev = current - 1 === 0;
    }
  }

  scrollNext(content: UserDataContentModel, index: number) {
    const current = this.carouselIndices.get(content) ?? 0;
    const maxIndex = content.links.length - 2;

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

  updateSlidePosition(content: UserDataContentModel, index: number) {
    const container = document.getElementById(index.toString());
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
