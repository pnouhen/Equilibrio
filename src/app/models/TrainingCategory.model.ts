import { TrainingSchedule } from './TrainingSchedule.model';

export class TrainingCategory {
  constructor(
    public title: string,
    public trainingSchedule: TrainingSchedule[] = [],
  ) {}
}
