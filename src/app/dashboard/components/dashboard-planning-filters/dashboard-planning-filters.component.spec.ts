import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPlanningFiltersComponent } from './dashboard-planning-filters.component';

describe('DashboardPlanningFiltersComponent', () => {
  let component: DashboardPlanningFiltersComponent;
  let fixture: ComponentFixture<DashboardPlanningFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPlanningFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPlanningFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
