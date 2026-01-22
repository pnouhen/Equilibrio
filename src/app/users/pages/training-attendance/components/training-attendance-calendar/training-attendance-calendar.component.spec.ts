import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAttendanceCalendarComponent } from './training-attendance-calendar.component';

describe('TrainingAttendanceCalendarComponent', () => {
  let component: TrainingAttendanceCalendarComponent;
  let fixture: ComponentFixture<TrainingAttendanceCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingAttendanceCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAttendanceCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
