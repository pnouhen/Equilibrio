import { Injectable } from '@angular/core';
import { UsersDataLinkModel } from '../../datas-Back-end/models/UserData-link.model';
import { UsersDataPdfModel } from '../../datas-Back-end/models/UserData-pdf.model';
import { UsersDataSongModel } from '../../datas-Back-end/models/UsersData-song.model';

@Injectable({
  providedIn: 'root',
})
export class SlidesResourcesService {
  isVideo(
    link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel,
  ): link is UsersDataLinkModel {
    return link.type === 'video';
  }

  isPdf(
    link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel,
  ): link is UsersDataPdfModel {
    return link.type === 'pdf';
  }

  isSong(
    link: UsersDataLinkModel | UsersDataPdfModel | UsersDataSongModel,
  ): link is UsersDataSongModel {
    return link.type === 'song';
  }
}
