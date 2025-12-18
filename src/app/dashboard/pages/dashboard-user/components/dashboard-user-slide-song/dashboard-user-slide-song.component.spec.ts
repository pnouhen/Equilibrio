import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSlideSongComponent } from './dashboard-user-slide-song.component';

describe('DashboardUserSlideSongComponent', () => {
  let component: DashboardUserSlideSongComponent;
  let fixture: ComponentFixture<DashboardUserSlideSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSlideSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSlideSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
