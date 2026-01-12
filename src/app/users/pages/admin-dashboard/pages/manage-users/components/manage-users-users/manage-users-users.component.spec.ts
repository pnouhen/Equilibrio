import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersUsersComponent } from './manage-users-users.component';

describe('ManageUsersUsersComponent', () => {
  let component: ManageUsersUsersComponent;
  let fixture: ComponentFixture<ManageUsersUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
