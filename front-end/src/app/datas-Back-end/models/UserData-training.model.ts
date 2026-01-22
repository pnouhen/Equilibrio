import { UserDataCityScheduleModel } from "./UserData-city-schedule.model";

export class UserDataTrainingModel {
  constructor(
    public citySchedules: UserDataCityScheduleModel[],
    public trainingSessions: string[],
  ) {}
}
