export class UsersDataPdfModel {
  constructor(
    public id: string, 
    public type: string,
    public grade: string,
    public nameDownLoad: string,
    public linkImage: string,
    public linkPdf: string
  ) {}
}
