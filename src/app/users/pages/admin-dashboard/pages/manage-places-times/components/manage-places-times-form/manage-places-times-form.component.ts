import { TrainingCategoryDisplayModel } from './../../../../../../../core/models/TrainingCategory-display.model';
import { ImagesService } from './../../../../../../../core/services/Images.service';
import { TrainingCategory } from '../../../../../../../core/models/TrainingCategory.model';
import { CitiesService } from './../../../../../../../core/services/cities.service';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { UpdatePhoneNumbers } from '../../../../../../../core/services/allowOnlyNumbers.service';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { ManagePlacesTimesFormCategoryComponent } from '../manage-places-times-form-category/manage-places-times-form-category.component';
import { MessageForm } from '../../../../../../../core/models/MessageForm.model';
import { MessageFormComponent } from '../../../../../../../core/components/message-form/message-form.component';
import { CityInfo } from '../../../../../../../core/models/CityInfo.model';
import { LocationsCard } from '../../../../../../../core/models/LocationsCard.model';
import { UpdateCategoriesLocationService } from '../../../../../../../core/services/updateCategoriesLocation.service';

@Component({
  selector: 'app-manage-places-times-form',
  templateUrl: './manage-places-times-form.component.html',
  styleUrls: ['./manage-places-times-form.component.scss'],
  imports: [
    FormsModule,
    ManagePlacesTimesFormCategoryComponent,
    ReactiveFormsModule,
    MessageFormComponent,
  ],
})
export class ManagePlacesTimesFormComponent implements OnChanges {
  @Output() locationCardsChange = new EventEmitter<LocationsCard[]>();
  @Input() locationCards: LocationsCard[] = [];

  @Output() cityUpdateChange = new EventEmitter<CityInfo>();
  @Input() cityUpdate!: CityInfo | undefined;

  @Output() selectedFileChange = new EventEmitter<File>();
  @Input() selectedFile!: File | null;

  phoneNumber: string = '';
  categories: TrainingCategory[] = [];
  categoriesDisplay: TrainingCategoryDisplayModel[] = [];
  imgUpdate: string = '';

  private formBuilder: FormBuilder = inject(FormBuilder);
  cityForm: FormGroup = this.formBuilder.group({
    nameRoom: ['', [Validators.required]],
    comment: [''],
    adress: ['', [Validators.required]],
    postalCode: ['', [Validators.required]],
    city: ['', [Validators.required]],
    lat: ['', [Validators.required]],
    lng: ['', [Validators.required]],
    numberPhone: ['', [Validators.required]],
    img: [''],
  });

  constructor(
    public updatePhoneNumbers: UpdatePhoneNumbers,
    public citiesService: CitiesService,
    public imagesService: ImagesService,
    public updateCategoriesLocationService: UpdateCategoriesLocationService
  ) {}

  isSubmitted: boolean = false;
  isFormValid: boolean = false;
  formMessages: MessageForm[] = [
    new MessageForm('La création a bien été faite', 'messageFormTrue'),
    new MessageForm("Au moins l'un des champs n'est pas rempli correctement", 'messageFormFalse'),
  ];

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cityUpdate'] && changes['cityUpdate'].currentValue) {
      if (this.cityUpdate) {
        this.phoneNumber = this.cityUpdate.numberPhone;
        this.cityForm.setValue({
          nameRoom: this.cityUpdate.nameRoom,
          comment: this.cityUpdate.comment,
          adress: this.cityUpdate.adress,
          postalCode: this.cityUpdate.postalCode,
          city: this.cityUpdate.city,
          lat: this.cityUpdate.coord[0],
          lng: this.cityUpdate.coord[1],
          numberPhone: this.cityUpdate.numberPhone,
          img: null,
        });
        this.imagesService.updatePicture(this.cityUpdate.img).then((img) => {
          this.imgUpdate = img;
        });
        // Recuperer l'image
        this.categories = this.cityUpdate.TrainingCategory;
        this.categoriesDisplay = this.updateCategoriesLocationService.update(this.categories);
      }
    }
  }

  formatPhoneNumber(event: Event) {
    this.phoneNumber = this.updatePhoneNumbers.formatPhoneNumber(
      (event.target as HTMLInputElement).value
    );
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;

    if (!input.files || input.files.length === 0) {
      return;
    }

    const file = input.files[0];
    this.selectedFile = file;
    this.imgUpdate = '';
  }

  onSubmitForm() {
    this.isSubmitted = true;

    if (this.cityForm.valid && this.categories.length > 0) {
      this.isFormValid = true;

      // Download File
      if (this.selectedFile) {
        this.imagesService.convertAndSaveImage(this.selectedFile).then((img) => {
          this.updateCities(img);
        });
      } else if (this.imgUpdate !== '') {
        this.updateCities(this.imgUpdate);
      }
    } else {
      this.isFormValid = false;
    }
  }

  updateCities(img: string) {
    const newCity: CityInfo = {
      id: `${Date()}`,
      city: this.cityForm.value.city,
      nameRoom: this.cityForm.value.nameRoom,
      comment: this.cityForm.value.comment,
      coord: [this.cityForm.value.lat, this.cityForm.value.lng],
      adress: this.cityForm.value.adress,
      postalCode: Number(this.cityForm.value.postalCode),
      numberPhone: this.cityForm.value.numberPhone,
      img: img,
      resume: this.cityForm.value.resume,
      TrainingCategory: this.categories,
    };

    if (this.cityUpdate) newCity.id = this.cityUpdate.id;

    // Update Cities
    let newCities: CityInfo[] = [];

    // Update LocationCard
    const newLocationCard = {
      id: newCity.id,
      src: newCity.img,
      alt: newCity.city,
    };

    if (this.cityUpdate) {
      // For update Cities
      const cities = this.citiesService.Cities();
      newCities = cities.map((city) => (city.id === newCity.id ? newCity : city));

      // For update LocationCards
      const newLocationCards = this.locationCards.map((card) =>
        card.id === newLocationCard.id ? newLocationCard : card
      );
      this.locationCardsChange.emit(newLocationCards);
    } else {
      // For update Cities
      newCities = [...this.citiesService.Cities(), newCity];

      // For update LocationCards
      this.locationCardsChange.emit([...this.locationCards, newLocationCard]);
    }

    // For update Cities
    this.citiesService.Cities.set(newCities);
    sessionStorage.setItem('cities', JSON.stringify(newCities));

    // Reset all items
    this.cityForm.reset();
    this.categories = [];
    this.categoriesDisplay = [];
    this.selectedFile = null;
    this.cityUpdate = undefined;
    this.imgUpdate = '';
  }
}
