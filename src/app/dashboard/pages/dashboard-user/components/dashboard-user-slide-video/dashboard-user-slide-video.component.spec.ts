import { DashboardUserSlideVideoComponent } from './dashboard-user-slide-video.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('DashboardUserSlidesVideosComponent', () => {
  let component: DashboardUserSlideVideoComponent;
  let fixture: ComponentFixture<DashboardUserSlideVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSlideVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSlideVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
