import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSlidesPdfComponent } from './student-dashboard-slides-pdf.component';

describe('StudentDashboardSlidesPdfComponent', () => {
  let component: StudentDashboardSlidesPdfComponent;
  let fixture: ComponentFixture<StudentDashboardSlidesPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardSlidesPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardSlidesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
