import { TrainingSchedule } from '../../../../../../core/models/TrainingSchedule.model';

export class TrainingScheduleCityModel{
    constructor(public city: string, public trainingSchedule: TrainingSchedule[]){}
}