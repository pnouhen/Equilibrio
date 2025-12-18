import { UsersDataLinkModel } from './UserData-link.model';
import { UsersDataPdfModel } from './UserData-pdf.model';
import { UsersDataSongModel } from './UsersData-song.model';

export class UserDataContentModel {
  constructor(
    public subTitle: string,
    public description: string,
    public category: string,
    public links: (UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel)[]
  ) {}
}

