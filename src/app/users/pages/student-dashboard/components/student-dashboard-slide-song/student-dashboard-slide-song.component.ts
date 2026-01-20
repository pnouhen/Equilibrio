import { Component, Input } from '@angular/core';
import { UsersDataSongModel } from '../../../../../datas-Back-end/models/UsersData-song.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ManageResourcesService } from '../../../admin-dashboard/pages/manage-resources/services/ManageResources.service';

@Component({
  selector: 'app-student-dashboard-slide-song',
  imports: [],
  templateUrl: './student-dashboard-slide-song.component.html',
  styleUrl: './student-dashboard-slide-song.component.scss',
})
export class StudentDashboardSlideSongComponent {
  @Input() link!: UsersDataSongModel;
  @Input() index!: number;
  @Input() isCreate: boolean = false;

  constructor(
    public routes: ActivatedRoute,
    public router: Router,
    public manageResourcesService: ManageResourcesService
  ) {}

  displayLyrics(songId: string) {
    const memberName = this.routes.snapshot.paramMap.get('id') || null;

    if (!this.manageResourcesService.isAdmin) {
      this.router.navigate(['/espace-utilisateur', memberName, 'chants', songId]);
    } else {
      this.router.navigate(['/espace-utilisateur', 'admin', 'chants', songId]);
    }
  }
}
