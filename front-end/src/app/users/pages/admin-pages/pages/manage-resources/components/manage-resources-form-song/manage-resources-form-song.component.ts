import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ManageResourcesFormService } from '../../services/ManageResources-form.service';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { UsersDataSongModel } from '../../../../../../../datas-Back-end/models/UsersData-song.model';

@Component({
  selector: 'app-manage-resources-form-song',
  imports: [FormsModule, FormMessageComponent],
  templateUrl: './manage-resources-form-song.component.html',
  styleUrl: './manage-resources-form-song.component.scss',
})
export class ManageResourcesFormSongComponent implements OnInit {
  titleSong!: string;
  author!: string;
  interpreter!: string;
  song!: File;
  lyrics!: string;

  // Managing the display of the message after submit
  isFormValid: boolean = false;
  formMessages: FormMessageModel[] = [
    new FormMessageModel('La musique a bien été ajouté', 'formMessageTrue'),
    new FormMessageModel('Au moins un des champs ne correspond pas', 'formMessageFasle'),
  ];

  constructor(public manageResourcesFormService: ManageResourcesFormService) {}

  ngOnInit(): void {
    this.manageResourcesFormService.isSubmittedLink = false
    this.isFormValid = false
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (!input.files?.length) return;
    this.song = input.files[0];
  }

  resetFileSelected(input: HTMLInputElement) {
    input.value = '';
    this.song = undefined as unknown as File;
  }

  onSubmit(input: HTMLInputElement) {
    this.manageResourcesFormService.isSubmittedLink = true;
    const isFormTrue =
      this.titleSong !== '' &&
      this.author !== '' &&
      this.interpreter !== '' &&
      this.song &&
      this.lyrics !== undefined;

    if (isFormTrue && this.song.type.startsWith('audio/')) {
      this.isFormValid = true;

      // Convert the pdf in string and push resource
      this.manageResourcesFormService.convertString(this.song).then(async (fileString) => {
        const resource: UsersDataSongModel = {
          id: this.titleSong.replace(/ /g, '-'),
          type: 'song',
          title: this.titleSong,
          author: this.author,
          interpreter: this.interpreter,
          lyrics: this.lyrics.replace(/\n/g, '<br>'),
          link: fileString,
        };

        this.manageResourcesFormService.links = [
          ...this.manageResourcesFormService.links,
          resource,
        ];

        // Create song in sessionStorage
        sessionStorage.setItem(this.titleSong, JSON.stringify(resource));

        // Reset all
        this.titleSong = '';
        this.author = '';
        this.interpreter = '';
        this.lyrics = '';
        this.resetFileSelected(input);
      });
    } else {
      this.isFormValid = false;
    }
  }
}
