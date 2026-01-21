import { ImagesService } from './../../../../../../../core/services/Images.service';
import { FormMessageService} from '../../../../../../../core/services/FormMessage.service';
import { Component, OnInit } from '@angular/core';
import { HomeSlides } from '../../../../../../../core/services/homeSlides.service';
import { ReturnAdminDashboardComponent } from '../../../../components/return-admin-dashboard/return-admin-dashboard.component';
import { FormsModule, NgForm } from '@angular/forms';
import { FormMessageModel } from '../../../../../../../core/models/FormMessage.model';
import { FormMessageComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { PicturesInitialModel } from '../../../../../../../landing/pages/home/models/PicturesInitial.model';

@Component({
  selector: 'app-update-slides-shows-pictures',
  imports: [ReturnAdminDashboardComponent, FormsModule, FormMessageComponent],
  templateUrl: './update-slides-shows-pictures.component.html',
  styleUrl: './update-slides-shows-pictures.component.scss',
})
export class UpdateSlidesShowsPicturesComponent implements OnInit {
  imageSlidesShow!: PicturesInitialModel[];
  selectedFiles: (File | null)[] = []; // Table for storing files

  isSubmittedArray!: boolean[];
  isFormValidArray!: boolean[];

  formMessage: FormMessageModel[] = [
    new FormMessageModel("L'image a été mise à jour", 'messageFromTrue'),
    new FormMessageModel('Au moins un des champs est incorrect', 'formMessageFalse'),
  ];

  constructor(
    public homeSlides: HomeSlides,
    public imagesService: ImagesService,
    public formMessageService: FormMessageService
  ) {}

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
      this.imagesService.convertAndSaveImage(file).then((img) => {
        const image = {
          title: this.imageSlidesShow[index].title,
          src: img,
          alt: description,
        };

        sessionStorage.setItem(image.title, JSON.stringify(image));
      });
      this.isFormValidArray[index] = true;
    } else {
      this.isFormValidArray[index] = false;
    }
  }
}
