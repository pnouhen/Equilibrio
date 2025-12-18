import { Component, Input } from '@angular/core';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-user-slide-song',
  imports: [],
  templateUrl: './dashboard-user-slide-song.component.html',
  styleUrl: './dashboard-user-slide-song.component.scss',
})
export class DashboardUserSlideSongComponent {
  @Input() link!: UsersDataSongModel;
  @Input() index!: number;

  constructor(public routes: ActivatedRoute, public router: Router) {}

  displayLyrics(songId: string) { 
    const memberName = this.routes.snapshot.paramMap.get('id') || null;
    this.router.navigate(['/dashboard', memberName, 'chants', songId]);
  }
}
