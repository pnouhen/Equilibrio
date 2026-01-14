import { ManageUsersService } from './../../services/ManageUsers.service';
import { SelectedCityUsers } from './../../services/SelectedCityUsers.service';
import { CitiesService } from './../../../../../../../core/services/cities.service';
import { FormsModule } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { GradesData } from '../../datas/Grade.data';
import { SelectedCategory } from '../../services/SelectedCategory.service';
import { SelectedGrade } from '../../services/SelectedGrade.service';
import { ManageUsersFormMembersTrainingComponent } from '../manage-users-form-members-training/manage-users-form-members-training.component';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MemberDisplayModel } from '../../models/MemberDisplay.model';
import { CategoriesScheduleData } from '../../../../datas/CategoriesSchedule.data';

@Component({
  selector: 'app-manage-users-form-members',
  imports: [
    FormsModule,
    InputSelectedComponent,
    ManageUsersFormMembersTrainingComponent,
    MessageFormComponent,
  ],
  templateUrl: './manage-users-form-members.component.html',
  styleUrl: './manage-users-form-members.component.scss',
})
export class ManageUsersFormMembersComponent implements OnInit {
  memberName!: string;
  categoryText: string = 'Sélectionner';
  categoryData!: string[];

  // Sort by category
  citiesName!: string[];
  gradeText: string = 'Sélectionner';
  gradeData: string[] = [];
  trainingsDisplay: TrainingScheduleCityModel[] = [];

  idUdpate: string = '';

  // Disappears when category is valid
  isSubmittedTraining: boolean = false;

  // Message when the form is submitted
  @Input() isSubmitted: boolean = false;
  @Output() isSubmittedChange = new EventEmitter<boolean>();
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('Le membre a bien été ajouté', 'messageFormTrue'),
    new MessageForm('Au moins un des élements est manquant', 'messageFormFalse'),
  ];

  constructor(
    public selectedCategory: SelectedCategory,
    public selectedGrade: SelectedGrade,
    public manageUsersService: ManageUsersService,
    public citiesService: CitiesService,
    public selectedCityUsers: SelectedCityUsers
  ) {}

  ngOnInit(): void {
    this.categoryData = ['Baby', 'Enfant', 'Ados', 'Adulte'];
  }

  activeCategory(event: Event) {
    this.selectedCategory.toggleSelected(event);

    this.selectedGrade.closeSelected();
    this.selectedCityUsers.closeSelected();
  }

  changeCategory(category: string) {
    this.categoryText = category;

    // For grades
    const gradeCategory = GradesData.filter((grade) => grade.category.includes(category));
    let newGrades: string[] = ['novato'];
    if (gradeCategory.length > 1) {
      newGrades = [...newGrades, ...gradeCategory.flatMap((grade) => grade.grades)];
    } else if (gradeCategory.length === 1) {
      newGrades = [...newGrades, ...gradeCategory[0].grades];
    }
    this.gradeData = newGrades;

    // For Cities
    const categoryId = CategoriesScheduleData.find((cate) => cate.value === category)?.id;

    const citiesSelected = this.citiesService
      .Cities()
      .filter((city) =>
        city.TrainingCategory.some((trainingCategory) =>
          trainingCategory.categories.some((item) => item === categoryId)
        )
      );
    this.citiesName = citiesSelected.map((city) => city.city);
  }

  toggleGrade(event: Event) {
    event.preventDefault();

    if (this.gradeData.length > 0) this.selectedGrade.toggleSelected(event);
  }

  onSubmitMember() {
    this.isSubmitted = true;

    const isSubmitValid =
      this.memberName !== '' &&
      this.categoryData.includes(this.categoryText) &&
      this.gradeData.includes(this.gradeText) &&
      this.trainingsDisplay.length > 0;

    if (isSubmitValid) {
      this.isFormValid = true;
      this.isSubmittedTraining = false;
      this.isSubmittedChange.emit(true);

      if (this.idUdpate !== '') {
        const memberUpdate = this.manageUsersService.membersDisplayForm.find(
          (member) => member.id === this.idUdpate
        );

        // Udpate / Create member
        if (memberUpdate) {
          memberUpdate.id = this.idUdpate;
          memberUpdate.memberName = this.memberName;
          memberUpdate.category = this.categoryText;
          memberUpdate.grade = this.gradeText;
          memberUpdate.trainings = this.trainingsDisplay;

          // Message Form
          this.formMessage[0].text = 'La mise à jour a fonctionné';
        }
      } else {
        const newMemberDisplay: MemberDisplayModel = {
          id: `${Date()}`,
          memberName: this.memberName,
          category: this.categoryText,
          grade: this.gradeText,
          trainings: this.trainingsDisplay,
        };
        this.manageUsersService.membersDisplayForm = [
          ...this.manageUsersService.membersDisplayForm,
          newMemberDisplay,
        ];

        // Message Form
        this.formMessage[0].text = 'Le membre a bien été ajouté';
      }
      // Reset all
      this.memberName = '';
      this.categoryText = 'Sélectionner';
      this.gradeText = 'Sélectionner';
      this.gradeData = [];
      this.trainingsDisplay = [];
      this.selectedGrade.closeSelected();
      this.idUdpate = '';
    } else {
      this.isFormValid = false;
    }
  }

  updateMember(memberUpdate: MemberDisplayModel) {
    this.idUdpate = memberUpdate.id;
    this.memberName = memberUpdate.memberName;
    this.categoryText = memberUpdate.category;
    this.gradeText = memberUpdate.grade;
    this.changeCategory(memberUpdate.category);
    this.trainingsDisplay = memberUpdate.trainings;
  }

  deleteMember(memberDelete: MemberDisplayModel) {
    this.manageUsersService.membersDisplayForm = this.manageUsersService.membersDisplayForm.filter(
      (member) => member !== memberDelete
    );
  }
}
