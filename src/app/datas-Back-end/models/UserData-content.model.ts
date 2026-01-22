import { CateogriesModel } from '../../users/pages/admin-pages/models/Categories.model';
import { UsersDataLinkModel } from './UserData-link.model';
import { UsersDataPdfModel } from './UserData-pdf.model';
import { UsersDataSongModel } from './UsersData-song.model';

export class UserDataContentModel {
  constructor(
    public id: string,
    public subTitle: string,
    public description: string,
    public categories: string[],
    public links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[]
  ) {}
}

