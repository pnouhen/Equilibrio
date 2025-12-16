import { UsersDataLinkModel } from './UserData-link.model';
import { UsersDataPdfModel } from './UserData-pdf.model';

export class UserDataContentModel {
  constructor(
    public subTitle: string,
    public category: string,
    public links: (UsersDataLinkModel | UsersDataPdfModel)[]
  ) {}
}

