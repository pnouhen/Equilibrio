import { TrainingCategory } from './TrainingCategory.model';

export class CityInfo {
  constructor(
    public id: string,
    public title: string,
    public nameRoom: string,
    public comment: string,
    public coord: [number, number],
    public adress: string,
    public numberPhone: string,
    public TrainingCategory: TrainingCategory[] = [],
    public conditions: string[] = []
  ) {}
}
