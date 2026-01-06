import { TrainingCategory } from './TrainingCategory.model';

export class CityInfo {
  constructor(
    public id: string,
    public city: string,
    public nameRoom: string,
    public comment: string,
    public coord: [number, number],
    public adress: string,
    public postalCode: number,
    public numberPhone: string,
    public img: string,
    public resume: string,
    public TrainingCategory: TrainingCategory[] = [],
  ) {}
}
