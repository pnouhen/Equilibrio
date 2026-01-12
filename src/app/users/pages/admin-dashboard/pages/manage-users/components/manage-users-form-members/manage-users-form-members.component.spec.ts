import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersFormMembersComponent } from './manage-users-form-members.component';

describe('ManageUsersFormMembersComponent', () => {
  let component: ManageUsersFormMembersComponent;
  let fixture: ComponentFixture<ManageUsersFormMembersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersFormMembersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersFormMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
