import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardSlideSongComponent } from './student-dashboard-slide-song.component';

describe('StudentDashboardSlideSongComponent', () => {
  let component: StudentDashboardSlideSongComponent;
  let fixture: ComponentFixture<StudentDashboardSlideSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardSlideSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardSlideSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
