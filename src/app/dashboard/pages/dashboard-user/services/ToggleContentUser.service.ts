import { dashboardUserData } from './../../../../datas-Back-end/data/DashboardUser.data';
import { Injectable, signal } from '@angular/core';
import { UsersDataModel } from '../../../../datas-Back-end/models/UserData.model';

@Injectable({ providedIn: 'root' })
export class ToggleContentUser {
  contentId = signal<string>('mouvements');
  contentArray = signal<UsersDataModel | undefined>(dashboardUserData[3]);

  toggleContent(newContentId: string) {
    this.contentId.set(newContentId);

    const newContent = dashboardUserData.find(
      (content) => content.id === newContentId
    );

    this.contentArray.set(newContent);
  }
}


