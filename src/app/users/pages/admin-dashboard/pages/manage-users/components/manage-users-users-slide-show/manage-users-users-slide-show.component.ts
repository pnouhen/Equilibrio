import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { UsersDataService } from '../../../../../../../core/services/UsersData.service';

@Component({
  selector: 'app-manage-users-users-slide-show',
  imports: [],
  templateUrl: './manage-users-users-slide-show.component.html',
  styleUrl: './manage-users-users-slide-show.component.scss',
})
export class ManageUsersUsersSlideShowComponent implements AfterViewInit {
  @Input() slidesShow!: UsersModel[][];
  @Output() slidesShowChange = new EventEmitter<UsersModel[][]>();

  @Input() users!: UsersModel[];
  @Output() usersChange = new EventEmitter<UsersModel[]>();

  indexSlideShow: number = 0;

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor(public usersDataService: UsersDataService) {}

  ngAfterViewInit(): void {
    const height = this.container.nativeElement.offsetHeight + 1;
    this.container.nativeElement.style.height = height + 'px';
  }

  transformStatutUser(statut: string) {
    const dataToText = [
      {
        id: 'student',
        text: 'Elève',
      },
      {
        id: 'teacher',
        text: 'Enseignant',
      },
    ];

    return dataToText.find((item) => item.id === statut)?.text;
  }

  deleteUser(email: string) {
    this.slidesShow = this.slidesShow.map((slideShow) =>
      slideShow.filter((user) => user.email !== email)
    );

    const newUsers = this.users.filter((user) => user.email !== email);
    this.usersChange.emit(newUsers);
    this.usersDataService.UsersData.set(newUsers);

    const usersSessionsStorage = sessionStorage.getItem('users');
    if (usersSessionsStorage) {
      const newUsersSessionsStorage: UsersModel[] = JSON.parse(usersSessionsStorage);
      sessionStorage.setItem(
        'users',
        JSON.stringify(newUsersSessionsStorage.filter((user) => user.email !== email))
      );
    }
  }

  previousSlide() {
    if (this.indexSlideShow > 0) {
      this.indexSlideShow = this.indexSlideShow - 1;
    }
  }

  nextSlide() {
    if (this.indexSlideShow < this.slidesShow.length - 1) {
      this.indexSlideShow = this.indexSlideShow + 1;
    }
  }
}
