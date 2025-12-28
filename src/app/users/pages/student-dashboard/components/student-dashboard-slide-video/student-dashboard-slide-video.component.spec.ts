import { StudentDashboardSlideVideoComponent } from './student-dashboard-slide-video.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('StudentDashboardSlidesVideosComponent', () => {
  let component: StudentDashboardSlideVideoComponent;
  let fixture: ComponentFixture<StudentDashboardSlideVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardSlideVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardSlideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
