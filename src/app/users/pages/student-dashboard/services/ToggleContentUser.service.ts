
import { Injectable, signal } from '@angular/core';
import { UsersDataModel } from '../../../../datas-Back-end/models/UserData.model';
import { StudentDashboardData } from '../../../../datas-Back-end/data/UserDashboard.data';

@Injectable({ providedIn: 'root' })
export class ToggleContentUser {
  contentRoute = signal<string>('presentation');
  contentArray = signal<UsersDataModel | undefined>(StudentDashboardData[0]);

  toggleContent(newcontentRoute: string) {
    this.contentRoute.set(newcontentRoute);

    const newContent = StudentDashboardData.find(
      (content) => content.id === newcontentRoute
    );

    this.contentArray.set(newContent);
  }
}


