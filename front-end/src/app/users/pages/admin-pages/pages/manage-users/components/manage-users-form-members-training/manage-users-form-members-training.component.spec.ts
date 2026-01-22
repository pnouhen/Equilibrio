import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersFormMembersTrainingComponent } from './manage-users-form-members-training.component';

describe('ManageUsersFormMembersTrainingComponent', () => {
  let component: ManageUsersFormMembersTrainingComponent;
  let fixture: ComponentFixture<ManageUsersFormMembersTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersFormMembersTrainingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersFormMembersTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
