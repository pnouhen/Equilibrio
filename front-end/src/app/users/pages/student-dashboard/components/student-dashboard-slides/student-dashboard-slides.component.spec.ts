import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSlidesComponent } from './student-dashboard-slides.component';

describe('StudentDashboardSlidesComponent', () => {
  let component: StudentDashboardSlidesComponent;
  let fixture: ComponentFixture<StudentDashboardSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
