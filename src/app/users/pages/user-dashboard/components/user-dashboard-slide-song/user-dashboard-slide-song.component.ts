import { Component, Input } from '@angular/core';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard-slide-song',
  imports: [],
  templateUrl: './user-dashboard-slide-song.component.html',
  styleUrl: './user-dashboard-slide-song.component.scss',
})
export class UserDashboardSlideSongComponent {
  @Input() link!: UsersDataSongModel;
  @Input() index!: number;

  constructor(public routes: ActivatedRoute, public router: Router) {}

  displayLyrics(songId: string) { 
    const memberName = this.routes.snapshot.paramMap.get('id') || null;
    this.router.navigate(['/espace-utilisateur', memberName, 'chants', songId]);
  }
}
