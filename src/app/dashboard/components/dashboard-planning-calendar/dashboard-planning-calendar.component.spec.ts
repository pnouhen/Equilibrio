import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlanningCalendarComponent } from './dashboard-planning-calendar.component';

describe('DashboardPlanningCalendarComponent', () => {
  let component: DashboardPlanningCalendarComponent;
  let fixture: ComponentFixture<DashboardPlanningCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPlanningCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPlanningCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
