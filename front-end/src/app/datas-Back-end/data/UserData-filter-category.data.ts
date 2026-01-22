import { UserDataFilterCategoryModel } from '../models/UserData-filter-category.model';

export const UserDataFilterCategoryData: UserDataFilterCategoryModel[] = [
  new UserDataFilterCategoryModel('baby', ['all', 'Enfants']),
  new UserDataFilterCategoryModel('child', ['all', 'Enfants']),
  new UserDataFilterCategoryModel('teen', ['all', 'Adultes']),
  new UserDataFilterCategoryModel('adult', ['all', 'Adultes']),
];
