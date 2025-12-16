import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSlideShowComponent } from './dashboard-user-slide-show.component';

describe('DashboardUserSlideShowComponent', () => {
  let component: DashboardUserSlideShowComponent;
  let fixture: ComponentFixture<DashboardUserSlideShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSlideShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSlideShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
