import { Injectable } from '@angular/core';
import { CategoriesData } from '../pages/admin-pages/datas/Categories.data';
import { CateogriesModel } from '../pages/admin-pages/models/Categories.model';

@Injectable({ providedIn: 'root' })
export class CategoriesService {
  changeCategoriesValue(categories: string[], isForData: boolean): string[] {
    return CategoriesData.map((item) => ({
      ...item,
    }))
      .filter((category) => categories.includes(isForData ? category.value : category.id))
      .map((category) => (isForData ? category.id : category.value));
  }

  generateCategoriesData(categories: string[]): CateogriesModel[] {
    return CategoriesData.map((category) => ({
      ...category,
      add: categories.includes(category.id),
    }));
  }
}
