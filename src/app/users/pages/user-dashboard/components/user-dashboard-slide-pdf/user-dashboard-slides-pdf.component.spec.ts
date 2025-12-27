import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardSlidesPdfComponent } from './user-dashboard-slides-pdf.component';

describe('UserDashboardSlidesPdfComponent', () => {
  let component: UserDashboardSlidesPdfComponent;
  let fixture: ComponentFixture<UserDashboardSlidesPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardSlidesPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardSlidesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
