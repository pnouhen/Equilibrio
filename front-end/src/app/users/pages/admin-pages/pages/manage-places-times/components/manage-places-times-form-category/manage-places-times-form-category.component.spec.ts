import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlacesTimesFormCategoryComponent } from './manage-places-times-form-category.component';

describe('ManagePlacesTimesFormCategoryComponent', () => {
  let component: ManagePlacesTimesFormCategoryComponent;
  let fixture: ComponentFixture<ManagePlacesTimesFormCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlacesTimesFormCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlacesTimesFormCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
