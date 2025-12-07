import { UsersMembers } from "./Users-members";

export class UsersModel {
  constructor(public email: string, public password: string, public userName: string, public member: UsersMembers[]) {}
}
