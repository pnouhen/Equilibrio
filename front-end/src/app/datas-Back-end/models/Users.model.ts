import { UsersMembers } from './Users-members';

export class UsersModel {
  constructor(
    public id: string,
    public email: string,
    public password: string | undefined,
    public type: string,
    public members: UsersMembers[]
  ) {}
}
