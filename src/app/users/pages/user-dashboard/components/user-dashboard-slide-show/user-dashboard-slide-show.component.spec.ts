import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSlideShowComponent } from './user-dashboard-slide-show.component';

describe('UserDashboardSlideShowComponent', () => {
  let component: UserDashboardSlideShowComponent;
  let fixture: ComponentFixture<UserDashboardSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardSlideShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
