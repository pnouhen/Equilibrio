import { Injectable } from '@angular/core';
import { TrainingCategoryDisplayModel } from '../models/TrainingCategory-display.model';
import { TrainingCategory } from '../models/TrainingCategory.model';

@Injectable({
  providedIn: 'root',
})
export class UpdateCategoriesLocationService {
  update(data: TrainingCategory[]): TrainingCategoryDisplayModel[] {
    // Build categories
    let categories = data.map((category) => {
      const conditions = category.trainingSchedule
        // Keep only the objects that have a defined condition
        .filter((schedule) => Boolean(schedule.condition))
        // Transform the list to retrieve only the condition value
        .map((schedule) => schedule.condition!)
        // Remove duplicates
        .filter((condition, index, self) => self.findIndex((c) => c === condition) === index);

      return {
        id: category.id,
        title: category.title,
        trainingSchedule: category.trainingSchedule.map((s) => ({ ...s })),
        conditions: [...conditions],
      };
    });

    // Add stars to each schedule
    categories = categories.map((category) => {
      // Transforming the conditions → adding the stars
      const conditionsStars = category.conditions.map((condi, index) => ({
        condition: condi,
        stars: this.getStarCountByConditionIndex(index),
      }));

      // Transforming schedules → replace the condition with asterisks
      const newTrainingSchedule = category.trainingSchedule.map((schedule) => {
        if (!schedule.condition) return { ...schedule };

        // Search for matching under Stars conditions
        const found = conditionsStars.find((c) => c.condition === schedule.condition);
        return { ...schedule, condition: found?.stars || schedule.condition };
      });

      return {
        ...category,
        trainingSchedule: newTrainingSchedule,
      };
    });

    // Transform conditions into text
    categories = categories.map((category) => ({
      ...category,
      conditions: category.conditions.map((conditionCategory, index) => {
        return `${this.getStarCountByConditionIndex(index)} ${conditionCategory}`;
      }),
    }));

    return categories;
  }

  private getStarCountByConditionIndex(index: number): string {
    return '*'.repeat(index + 1);
  }
}
