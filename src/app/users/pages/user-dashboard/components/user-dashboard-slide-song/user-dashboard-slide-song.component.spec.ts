import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSlideSongComponent } from './user-dashboard-slide-song.component';

describe('UserDashboardSlideSongComponent', () => {
  let component: UserDashboardSlideSongComponent;
  let fixture: ComponentFixture<UserDashboardSlideSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardSlideSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardSlideSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
