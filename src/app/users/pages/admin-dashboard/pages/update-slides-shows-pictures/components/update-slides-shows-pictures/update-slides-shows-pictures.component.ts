import { Component, OnInit } from '@angular/core';
import { HomeSlides } from '../../../../../../../core/services/homeSlides.service';
import { ReturnAdminDashboardComponent } from '../../../../components/return-admin-dashboard/return-admin-dashboard.component';
import { FormsModule, NgForm } from '@angular/forms';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { PicturesInitialModel } from '../../../../../../../landing/pages/home/models/PicturesInitial.model';

@Component({
  selector: 'app-update-slides-shows-pictures',
  imports: [ReturnAdminDashboardComponent, FormsModule, MessageFormComponent],
  templateUrl: './update-slides-shows-pictures.component.html',
  styleUrl: './update-slides-shows-pictures.component.scss',
})
export class UpdateSlidesShowsPicturesComponent implements OnInit {
  imageSlidesShow!: PicturesInitialModel[];
  selectedFiles: (File | null)[] = []; // Table for storing files

  isSubmittedArray!: boolean[];
  isFormValidArray!: boolean[];

  formMessages: MessageForm[] = [
    new MessageForm("L'image a été mise à jour", 'messageFromTrue'),
    new MessageForm('Au moins un des champs est incorrect', 'messageFormFalse'),
  ];

  constructor(public homeSlides: HomeSlides) {}

  ngOnInit(): void {
    const isPicturesSessionStorage = this.homeSlides.allPicturesLink.filter((link) =>
      sessionStorage.getItem(link)
    );

    if (isPicturesSessionStorage.length !== 4) {
      this.homeSlides.initializePictures();
    }

    this.imageSlidesShow = this.homeSlides.imageSlideShow();

    // Initializes the file array
    this.selectedFiles = new Array(this.imageSlidesShow.length).fill(null);

    // Initialize boolean MessageForm
    this.isSubmittedArray = new Array(this.imageSlidesShow.length).fill(false);
    this.isFormValidArray = new Array(this.imageSlidesShow.length).fill(false);
  }

  onDownloadImg(event: Event, index: number) {
    const input = event.target as HTMLInputElement;
    const img = document.getElementById(`img-${index}`) as HTMLImageElement | null;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];

    // Stores the file for this index
    this.selectedFiles[index] = file;

    const reader = new FileReader();
    reader.onload = () => {
      if (img) {
        img.src = reader.result as string;
      }
    };

    reader.readAsDataURL(file);
  }

  onSubmit(form: NgForm, index: number, title: string) {
    const file = this.selectedFiles[index]; // Retrieve the stored file
    const description = form.value.description;

    this.isSubmittedArray[index] = true;
    console.log(this.isSubmittedArray);
    if (file && description) {
      this.homeSlides.convertAndSaveImage(file, description, title);

      this.isFormValidArray[index] = true;
      console.log(this.isFormValidArray);
    } else {
      this.isFormValidArray[index] = false;
      console.log(this.isFormValidArray);
    }
  }
}
