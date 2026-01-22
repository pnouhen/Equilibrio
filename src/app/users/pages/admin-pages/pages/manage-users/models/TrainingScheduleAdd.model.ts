import { TrainingSchedule } from './../../../../../../core/models/TrainingSchedule.model';

export class TrainingScheduleAddModel {
  constructor(
    public add: boolean,
    public trainingSchedule: TrainingSchedule,
  ) {}
}
