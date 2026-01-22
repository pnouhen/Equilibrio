import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlacesTimesFormComponent } from './manage-places-times-form.component';

describe('ManagePlacesTimesFormComponent', () => {
  let component: ManagePlacesTimesFormComponent;
  let fixture: ComponentFixture<ManagePlacesTimesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlacesTimesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlacesTimesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
