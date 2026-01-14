import { MemberDisplayModel } from './MemberDisplay.model';

export class UsersDisplay {
  constructor(
    public id: string,
    public email: string,
    public password: string | undefined,
    public type: string,
    public members: MemberDisplayModel[]
  ) {}
}
