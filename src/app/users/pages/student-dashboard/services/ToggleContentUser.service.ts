
import { Injectable, signal } from '@angular/core';
import { UsersDataModel } from '../../../../datas-Back-end/models/UserData.model';
import { StudentDashboardData } from '../../../../datas-Back-end/data/UserDashboard.data';

@Injectable({ providedIn: 'root' })
export class ToggleContentUser {
  contentId = signal<string>('presentation');
  contentArray = signal<UsersDataModel | undefined>(StudentDashboardData[0]);

  toggleContent(newContentId: string) {
    this.contentId.set(newContentId);

    const newContent = StudentDashboardData.find(
      (content) => content.id === newContentId
    );

    this.contentArray.set(newContent);
  }
}


