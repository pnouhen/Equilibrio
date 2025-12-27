import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDashboardMenuComponent } from './user-dashboard-menu.component';

describe('UserDashboardMenuComponent', () => {
  let component: UserDashboardMenuComponent;
  let fixture: ComponentFixture<UserDashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserDashboardMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
