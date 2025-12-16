import { UserDataContentModel } from './UserData-content.model';
import { UsersDataLinkModel } from './UserData-link.model';
export class UsersDataModel {
  constructor(
    public id: string,
    public title: string,
    public content: UserDataContentModel[],
  ) {}
}
