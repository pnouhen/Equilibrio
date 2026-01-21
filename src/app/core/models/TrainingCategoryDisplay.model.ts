import { TrainingSchedule } from './TrainingSchedule.model';

export class TrainingCategoryDisplayModel {
  constructor(
    public id: string,
    public title: string,
    public categories: string[],
    public trainingSchedule: TrainingSchedule[],
    public conditions: string[]
  ) {}
}
