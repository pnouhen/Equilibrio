import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAttendanceFilterComponent } from './training-attendance-filters.component';

describe('TrainingAttendanceFilterComponent', () => {
  let component: TrainingAttendanceFilterComponent;
  let fixture: ComponentFixture<TrainingAttendanceFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingAttendanceFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingAttendanceFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
