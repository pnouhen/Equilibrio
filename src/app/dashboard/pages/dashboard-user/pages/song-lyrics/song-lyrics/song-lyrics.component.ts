import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { dashboardUserData } from '../../../../../../datas-Back-end/data/DashboardUser.data';
import { UsersDataSongModel } from '../../../../../../datas-Back-end/models/UsersData-song.model';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MusicPlayerComponent } from "../components/music-player/music-player.component";

@Component({
  selector: 'app-song-lyrics',
  imports: [MusicPlayerComponent, RouterLink],
  templateUrl: './song-lyrics.component.html',
  styleUrl: './song-lyrics.component.scss',
})
export class SongLyricsComponent implements OnInit {
  @ViewChild('audioPlayer') audioPlayer!: ElementRef<HTMLAudioElement>;

  song!: UsersDataSongModel | undefined;

  constructor(public routes: ActivatedRoute, public router: Router) {}
  ngOnInit(): void {
    const songId = this.routes.snapshot.paramMap.get('song') || null;

    this.song =
      dashboardUserData
        .find((category) => category.id === 'chants')
        ?.content.flatMap((content) =>
          content.links
            // Filter to keep only the elements with an id
            .filter((link): link is UsersDataSongModel => 'id' in link)
            .find((link) => link.id === songId)
        )
        .find((link) => link !== undefined) || undefined;

    if (!this.song) {
      this.router.navigate(['page-introuvable']);
    }
  }

  returnDashboard() { 
    const memberName = this.routes.snapshot.paramMap.get('id') || null;
    return['/dashboard', memberName, "chants"];
  }
}
