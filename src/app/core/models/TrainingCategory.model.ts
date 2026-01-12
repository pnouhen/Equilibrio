import { TrainingSchedule } from './TrainingSchedule.model';

export class TrainingCategory {
  constructor(
    public id: string,
    public categories: string[],
    public title: string,
    public trainingSchedule: TrainingSchedule[] = []
  ) {}
}
