import { UserDataTrainingModel } from "./UserData-training.model";

export class UsersMembers {
  constructor(public memberName: string, public category: string, public grade: string,public training: UserDataTrainingModel) {}
}
