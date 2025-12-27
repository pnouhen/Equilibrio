import { UserDashboardSlideVideoComponent } from './user-dashboard-slide-video.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('UserDashboardSlidesVideosComponent', () => {
  let component: UserDashboardSlideVideoComponent;
  let fixture: ComponentFixture<UserDashboardSlideVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardSlideVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardSlideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
