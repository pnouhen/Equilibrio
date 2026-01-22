import { ImagesService } from './../../../../../../../core/services/Images.service';
import { FormMessageService } from '../../../../../../../core/services/FormMessage.service';
import { Component, OnInit } from '@angular/core';
import { ReturnAdminMenuComponent } from '../../../../components/return-admin-menu/return-admin-menu.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { ImageModel } from '../../../../../../../core/models/Image.model';
import { SlideShowHomeService } from '../../../../../../../core/services/SlideShowHome.service';

@Component({
  selector: 'app-update-slides-shows-pictures',
  imports: [ReturnAdminMenuComponent, FormsModule, FormMessageComponent],
  templateUrl: './update-slides-shows-pictures.component.html',
  styleUrl: './update-slides-shows-pictures.component.scss',
})
export class UpdateSlidesShowsPicturesComponent implements OnInit {
  imageSlidesShow!: ImageModel[];
  selectedFiles: (File | null)[] = []; // Table for storing files
  isSubmittedArray!: boolean[];
  isFormValidArray!: boolean[];

  formMessages: FormMessageModel[] = [
    new FormMessageModel("L'image a été mise à jour", 'formMessageTrue'),
    new FormMessageModel('Au moins un des champs est incorrect', 'formMessageFalse'),
  ];

  constructor(
    public slideShowHomeService: SlideShowHomeService,
    public imagesService: ImagesService,
    public formMessageService: FormMessageService,
  ) {}

  ngOnInit(): void {
    this.imageSlidesShow = this.slideShowHomeService.SlideShowHomeData();

    // Initializes the file array
    this.selectedFiles = new Array(this.imageSlidesShow.length).fill(null);

    // Initialize boolean formMessage
    this.isSubmittedArray = this.formMessageService.createArrayBoolean(this.imageSlidesShow.length);
    this.isFormValidArray = this.formMessageService.createArrayBoolean(this.imageSlidesShow.length);
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

  onSubmit(form: NgForm, index: number) {
    const file = this.selectedFiles[index]; // Retrieve the stored file
    const description = form.value.description;

    this.isSubmittedArray[index] = true;
    if (file && description) {
      this.isFormValidArray[index] = true;

      let imageUpdate = this.slideShowHomeService.SlideShowHomeData()[index];
      if (imageUpdate) {
        this.imagesService.convertAndSaveImage(file).then((img) => {
          imageUpdate = {
            src: img,
            alt: description,
          };

          this.slideShowHomeService.SlideShowHomeData()[index] = imageUpdate;
          sessionStorage.setItem(
            'slideShowHomeImg',
            JSON.stringify(this.slideShowHomeService.SlideShowHomeData()),
          );
        });
      }
    } else {
      this.isFormValidArray[index] = false;
    }
  }
}
