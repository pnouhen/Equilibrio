import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserMembersComponent } from './dashboard-user-members.component';

describe('DashboardUserMembersComponent', () => {
  let component: DashboardUserMembersComponent;
  let fixture: ComponentFixture<DashboardUserMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
