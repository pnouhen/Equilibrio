import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSlidesComponent } from './dashboard-user-slides.component';

describe('DashboardUserSlidesComponent', () => {
  let component: DashboardUserSlidesComponent;
  let fixture: ComponentFixture<DashboardUserSlidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSlidesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSlidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
