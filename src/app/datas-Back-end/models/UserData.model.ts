import { UserDataContentModel } from './UserData-content.model';

export class UsersDataModel {
  constructor(
    public id: string,
    public title: string,
    public content: UserDataContentModel[],
  ) {}
}
