export class UsersDataSongModel {
  constructor(
    public type: string,
    public id: string,
    public title: string,
    public author: string,
    public interpreter: string,
    public lyrics: string,
    public link: string
  ) {}
}
