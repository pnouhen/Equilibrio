import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlacesTimesFormScheduleComponent } from './manage-places-times-form-schedule.component';

describe('ManagePlacesTimesFormScheduleComponent', () => {
  let component: ManagePlacesTimesFormScheduleComponent;
  let fixture: ComponentFixture<ManagePlacesTimesFormScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlacesTimesFormScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlacesTimesFormScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
