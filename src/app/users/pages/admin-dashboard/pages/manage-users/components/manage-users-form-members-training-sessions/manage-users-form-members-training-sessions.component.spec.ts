import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersFormMembersTrainingSessionsComponent } from './manage-users-form-members-training-sessions.component';

describe('ManageUsersFormMembersTrainingSessionsComponent', () => {
  let component: ManageUsersFormMembersTrainingSessionsComponent;
  let fixture: ComponentFixture<ManageUsersFormMembersTrainingSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersFormMembersTrainingSessionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersFormMembersTrainingSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
