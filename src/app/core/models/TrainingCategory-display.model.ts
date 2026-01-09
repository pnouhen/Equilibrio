import { TrainingSchedule } from './TrainingSchedule.model';

export class TrainingCategoryDisplayModel {
  constructor(
    public id: string,
    public title: string,
    public trainingSchedule: TrainingSchedule[],
    public conditions: string[]
  ) {}
}
