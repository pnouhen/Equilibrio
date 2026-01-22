import { TrainingScheduleCityModel } from './TrainingScheduleCity.model';

export class MemberDisplayModel {
  constructor(
    public id: string,
    public memberName: string,
    public category: string,
    public grade: string,
    public trainings: TrainingScheduleCityModel[]
  ) {}
}
