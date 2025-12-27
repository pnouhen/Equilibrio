
import { Injectable, signal } from '@angular/core';
import { UsersDataModel } from '../../../../datas-Back-end/models/UserData.model';
import { UserDashboardData } from '../../../../datas-Back-end/data/UserDashboard.data';

@Injectable({ providedIn: 'root' })
export class ToggleContentUser {
  contentId = signal<string>('presentation');
  contentArray = signal<UsersDataModel | undefined>(UserDashboardData[0]);

  toggleContent(newContentId: string) {
    this.contentId.set(newContentId);

    const newContent = UserDashboardData.find(
      (content) => content.id === newContentId
    );

    this.contentArray.set(newContent);
  }
}


