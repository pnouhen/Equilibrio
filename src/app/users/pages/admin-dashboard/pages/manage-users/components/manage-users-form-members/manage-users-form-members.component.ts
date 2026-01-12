import { FormsModule } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { InputSelectedComponent } from '../../../../../../../core/components/input-selected/input-selected.component';
import { GradesData } from '../../datas/Grade.data';
import { SelectedCategory } from '../../services/SelectedCategory.service';
import { SelectedGrade } from '../../services/SelectedGrade.service';
import { ManageUsersFormMembersTrainingComponent } from '../manage-users-form-members-training/manage-users-form-members-training.component';
import { TrainingSchedule } from '../../../../../../../core/models/TrainingSchedule.model';
import { TrainingScheduleCityModel } from '../../models/TrainingScheduleCity.model';
import { UsersMembers } from '../../../../../../../datas-Back-end/models/Users-members';
import { CategoriesScheduleData } from '../../../../datas/CategoriesSchedule.data';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MemberDisplayModel } from '../../models/MemberDisplay.model';

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
  @Input() members: UsersMembers[] = [];
  @Input() membersDisplay: MemberDisplayModel[] = [
    {
      memberName: 'Pierre Nnouhen',
      category: 'Adult',
      grade: 'novato',
      trainings: [
        {
          city: 'Limoges',
          trainingSchedule: [
            new TrainingSchedule('Mercredi', '11h', '12h'),
            new TrainingSchedule('Mercredi', '15h', '16h'),
            new TrainingSchedule('Samedi', '10h', '11h'),
            new TrainingSchedule('Samedi', '15h', '16h'),
          ],
        },

        {
          city: 'Couzeix',
          trainingSchedule: [
            new TrainingSchedule('Mercredi', '11h', '12h'),
            new TrainingSchedule('Mercredi', '15h', '16h'),
            new TrainingSchedule('Samedi', '10h', '11h'),
            new TrainingSchedule('Samedi', '15h', '16h'),
          ],
        },
      ],
    },
  ];

  memberName!: string;
  categoryText: string = 'Sélectionner';
  categoryData!: string[];

  gradeText: string = 'Sélectionner';
  gradeData: string[] = [];

  trainingsDisplay: TrainingScheduleCityModel[] = [];

  // Message when the form is submitted
  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessage: MessageForm[] = [
    new MessageForm('Le membre a bien été ajouté', 'messageFormTrue'),
    new MessageForm('Au moins un des élements est manquant', 'messageFormFalse'),
  ];

  constructor(public selectedCategory: SelectedCategory, public selectedGrade: SelectedGrade) {}

  ngOnInit(): void {
    this.categoryData = ['Baby', 'Enfant', 'Ados', 'Adulte'];
  }

  activeCategory(event: Event) {
    this.selectedGrade.closeSelected();

    this.selectedCategory.toggleSelected(event);
  }

  toggleSelectionAndUpdateGradeData(category: string) {
    this.categoryText = category;

    const gradeCategory = GradesData.filter((grade) => grade.category.includes(category));

    let newGrades: string[] = ['novato'];
    if (gradeCategory.length > 1) {
      newGrades = [...newGrades, ...gradeCategory.flatMap((grade) => grade.grades)];
    } else if (gradeCategory.length === 1) {
      newGrades = [...newGrades, ...gradeCategory[0].grades];
    }

    this.gradeData = newGrades;
    this.gradeText = 'Sélectionner';
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
      const category = CategoriesScheduleData.find((item) => item.value === this.categoryText);
      const cities = this.trainingsDisplay.flatMap((training) => training.city);
      const schedules = this.trainingsDisplay.flatMap((training) =>
        training.trainingSchedule.flatMap((schedule) => {
          return schedule.day + ' : ' + schedule.startTime + ' - ' + schedule.endTime;
        })
      );

      if (category) {
        this.isFormValid = true;

        // Update member
        const newMember: UsersMembers = {
          memberName: this.memberName,
          category: category?.value,
          grade: this.gradeText,
          training: {
            cities: cities,
            schedules: schedules,
            trainingSessions: [],
          },
        };
        this.members = [...this.members, newMember];

        // UpdateMemberDisplay
        const newMemberDisplay: MemberDisplayModel = {
          memberName: this.memberName,
          category: this.categoryText,
          grade: this.gradeText,
          trainings: this.trainingsDisplay,
        };
        this.membersDisplay = [...this.membersDisplay, newMemberDisplay];

        // Reset all
        this.memberName = '';
        this.categoryText = 'Sélectionner';
        this.gradeText = 'Sélectionner';
        this.gradeData = [];
        this.trainingsDisplay = [];
        this.selectedGrade.closeSelected();
      } else {
        this.isFormValid = false;
      }
    } else {
      this.isFormValid = false;
    }
  }
}
