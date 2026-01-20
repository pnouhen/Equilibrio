import { computed, Injectable, signal } from '@angular/core';
import { UsersDashboardData } from '../../../../core/services/UsersDashboard.service';
import { UsersDataModel } from '../../../../datas-Back-end/models/UserData.model';

@Injectable({ providedIn: 'root' })
export class ToggleContentUser {
  constructor(public usersDashboardData: UsersDashboardData) {}

  contentRoute = signal<string>('Présentation');

  // Computed that automatically finds content based on contentRoute
  contentArray = computed<UsersDataModel>(() => {
    const route = this.contentRoute();
    const allData = this.usersDashboardData.UsersDashboardData();

    const foundContent = allData.find((content) => content.title === route);

    // If no content is found, return the first element by default
    return foundContent || allData[0];
  });

  toggleContent(newcontentRoute: string) {
    // Simply change the route; the computed will automatically update contentArray
    this.contentRoute.set(newcontentRoute);
  }
}
