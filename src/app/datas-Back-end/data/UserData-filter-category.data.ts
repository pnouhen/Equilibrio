import { UserDataFilterCategoryModel } from '../models/UserData-filter-category.model';

export const UserDataFilterCategoryData: UserDataFilterCategoryModel[] = [
  new UserDataFilterCategoryModel('Baby', ['all', 'Enfants']),
  new UserDataFilterCategoryModel('Enfants', ['all', 'Enfants']),
  new UserDataFilterCategoryModel('Ados', ['all', 'Adultes']),
  new UserDataFilterCategoryModel('Adulte', ['all', 'Adultes']),
];
