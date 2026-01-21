export class TrainingSchedule {
  constructor(
    public day: string,
    public startTime: string,
    public endTime: string,
    public condition?: string,
  ) {}
}
