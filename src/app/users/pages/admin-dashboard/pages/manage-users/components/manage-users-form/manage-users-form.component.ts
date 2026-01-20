import { ManageUsersService } from './../../services/ManageUsers.service';
import { UsersDataService } from './../../../../../../../core/services/UsersData.service';
import { SelectedStatut } from './../../services/SelectedStatut.service';
import { Component, OnInit } from '@angular/core';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { ManageUsersFormMembersComponent } from '../manage-users-form-members/manage-users-form-members.component';
import { FormsModule } from '@angular/forms';
import { checkEmail } from '../../../../../../../landing/services/checkEmail';
import { UsersModel } from '../../../../../../../datas-Back-end/models/Users.model';
import { CategoriesData } from '../../../../datas/Categories.data';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { UserDataTrainingModel } from '../../../../../../../datas-Back-end/models/UserData-training.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { UserDataCityScheduleModel } from '../../../../../../../datas-Back-end/models/UserData-city-schedule.model';

@Component({
  selector: 'app-manage-users-form',
  imports: [
    FormsModule,
    InputSelectedComponent,
    ManageUsersFormMembersComponent,
    FormsModule,
    MessageFormComponent,
  ],
  templateUrl: './manage-users-form.component.html',
  styleUrl: './manage-users-form.component.scss',
})
export class ManageUsersFormComponent implements OnInit {
  statutData!: string[];

  // Disappears when form is valid
  isSubmittedMembers: boolean = false;

  // Message Form
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  messageForm: MessageForm[] = [
    new MessageForm("L'adhérant a bien été ajouté", 'messageFormTrue'),
    new MessageForm('Au moins un des élément(s) est manquant', 'messageFormFalse'),
  ];

  constructor(
    public selectedStatut: SelectedStatut,
    public usersDataService: UsersDataService,
    public manageUsersService: ManageUsersService
  ) {}

  ngOnInit(): void {
    this.statutData = ['Elève', 'Enseignant'];
    this.resetForm();
  }

  onSubmitForm() {
    this.isSubmitted = true;

    const isSubmitFormValid =
      checkEmail.test(this.manageUsersService.emailForm) &&
      this.statutData.includes(this.manageUsersService.statutTextForm) &&
      this.manageUsersService.membersDisplayForm.length > 0;

    if (isSubmitFormValid) {
      this.isFormValid = true;
      this.isSubmittedMembers = false;

      // Transform elements for database
      const statut = this.manageUsersService.statutTextForm === 'Elève' ? 'student' : 'teacher';
      const membersUser = this.manageUsersService.membersDisplayForm.map((member) => ({
        memberName: member.memberName,
        category: this.formatCategory(member.category),
        grade: member.grade,
        training: this.formatTrainings(member.trainings),
      }));

      // Udpate / Create the user
      if (this.manageUsersService.idForm) {
        const userUdpate = this.manageUsersService
          .users()
          .find((user) => user.id === this.manageUsersService.idForm);

        if (userUdpate) {
          userUdpate.email = this.manageUsersService.emailForm;
          userUdpate.type = statut;
          userUdpate.members = membersUser;

          // Udpate database
          sessionStorage.setItem('users', JSON.stringify(this.manageUsersService.users()));
        }

        // Message form
        this.messageForm[0].text = 'La mise à jour a fonctionné';
      } else {
        const newUser: UsersModel = {
          id: `${Date()}`,
          email: this.manageUsersService.emailForm,
          password: undefined,
          type: statut,
          members: membersUser,
        };

        // Udpate display and database
        const newUsersData = [newUser, ...this.usersDataService.UsersData()];
        this.manageUsersService.chunkArray(newUsersData);
        this.usersDataService.UsersData.set(newUsersData);
        sessionStorage.setItem('users', JSON.stringify(newUsersData));

        // Message form
        this.messageForm[0].text = "L'adhérant a bien été ajouté";
      }

      this.resetForm();
    } else {
      this.isFormValid = false;
    }
  }

  formatCategory(categorieDisplay: string): string {
    const categoryCorrespondent = CategoriesData.find(
      (cateogry) => cateogry.value === categorieDisplay
    );

    if (categoryCorrespondent) {
      return categoryCorrespondent.id;
    }

    return '';
  }

  formatTrainings(trainings: TrainingScheduleCityModel[]): UserDataTrainingModel {
    const citySchedules: UserDataCityScheduleModel[] = trainings.flatMap((training) => {
      return training.trainingSchedule.map((schedule) => ({
        city: training.city,
        schedule: schedule.day + ' : ' + schedule.startTime + ' - ' + schedule.endTime,
      }));
    });

    return {
      citySchedules: citySchedules,
      trainingSessions: [],
    };
  }

  resetForm() {
    this.manageUsersService.idForm = undefined;
    this.manageUsersService.emailForm = '';
    this.manageUsersService.statutTextForm = 'Sélectionner';
    this.manageUsersService.membersDisplayForm = [];
  }

  cancelForm(){
    this.resetForm()
    this.isSubmitted = false
  }
}
