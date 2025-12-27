import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSlidesComponent } from './user-dashboard-slides.component';

describe('UserDashboardSlidesComponent', () => {
  let component: UserDashboardSlidesComponent;
  let fixture: ComponentFixture<UserDashboardSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
