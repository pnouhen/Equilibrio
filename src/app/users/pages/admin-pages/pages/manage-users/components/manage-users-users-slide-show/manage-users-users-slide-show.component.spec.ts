import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageUsersUsersSlideShowComponent } from './manage-users-users-slide-show.component';

describe('ManageUsersUsersSlideShowComponent', () => {
  let component: ManageUsersUsersSlideShowComponent;
  let fixture: ComponentFixture<ManageUsersUsersSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageUsersUsersSlideShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageUsersUsersSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
