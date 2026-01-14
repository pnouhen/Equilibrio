import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { UsersDataService } from '../../../../../../../core/services/UsersData.service';
import { ManageUsersService } from '../../services/ManageUsers.service';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { MemberDisplayModel } from '../../models/MemberDisplay.model';
import { UserDataTrainingModel } from '../../../../../../../datas-Back-end/models/UserData-training.model';
import { TrainingSchedule } from '../../../../../../../core/models/TrainingSchedule.model';

@Component({
  selector: 'app-manage-users-users-slide-show',
  imports: [],
  templateUrl: './manage-users-users-slide-show.component.html',
  styleUrl: './manage-users-users-slide-show.component.scss',
})
export class ManageUsersUsersSlideShowComponent implements OnInit, AfterViewInit {
  @Output() userUpdate = new EventEmitter<{}>();

  indexSlideShow: number = 0;

  @ViewChild('container') container!: ElementRef<HTMLDivElement>;

  constructor(
    public usersDataService: UsersDataService,
    public manageUsersService: ManageUsersService
  ) {}

  ngOnInit(): void {
    this.manageUsersService.chunkArray(this.manageUsersService.users());
  }

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

  updateUser(user: UsersModel) {
    // Convert elements in database for to display in form
    const statutText = user.type === 'student' ? 'Elève' : 'Enseignant';
    const membersDisplay: MemberDisplayModel[] = user.members.map((member, index) => ({
      id: `${index}`,
      memberName: member.memberName,
      category: member.category,
      grade: member.grade,
      trainings: this.formatTrainingScheduleCity(member.training),
    }));

    this.manageUsersService.idForm = user.id;
    this.manageUsersService.emailForm = user.email;
    this.manageUsersService.statutTextForm = statutText;
    this.manageUsersService.membersDisplayForm = membersDisplay;
  }

  formatTrainingScheduleCity(training: UserDataTrainingModel): TrainingScheduleCityModel[] {
    // Groups the cities
    const cities = [...new Set(training.citySchedules.map((item) => item.city))];

    return cities.map((city) => ({
      city: city,
      trainingSchedule: training.citySchedules
        .filter((item) => item.city === city)
        .map((item) => this.formatSchedule(item.schedule)),
    }));
  }

  formatSchedule(schedule: string): TrainingSchedule {
    // Separate the date and times
    const [dayPart, hourlyPart] = schedule.split(':');
    const day = dayPart.trim();

    // Separate times
    const [start, end] = hourlyPart.split('-').map((h) => h.trim());

    return {
      day: day,
      startTime: start,
      endTime: end,
      condition: '',
    };
  }

  deleteUser(email: string) {
    const newUsers = this.manageUsersService.users().filter((user) => user.email !== email);

    // Udpate array and data base
    this.usersDataService.UsersData.set(newUsers);
    sessionStorage.setItem('users', JSON.stringify(newUsers));

    // Udpate SlidesShow
    this.manageUsersService.chunkArray(newUsers);
  }

  previousSlide() {
    if (this.indexSlideShow > 0) {
      this.indexSlideShow = this.indexSlideShow - 1;
    }
  }

  nextSlide() {
    if (this.indexSlideShow < this.manageUsersService.slidesShow.length - 1) {
      this.indexSlideShow = this.indexSlideShow + 1;
    }
  }
}
