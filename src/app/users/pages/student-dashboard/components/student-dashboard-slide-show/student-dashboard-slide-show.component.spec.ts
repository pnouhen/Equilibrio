import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSlideShowComponent } from './student-dashboard-slide-show.component';

describe('StudentDashboardSlideShowComponent', () => {
  let component: StudentDashboardSlideShowComponent;
  let fixture: ComponentFixture<StudentDashboardSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardSlideShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
