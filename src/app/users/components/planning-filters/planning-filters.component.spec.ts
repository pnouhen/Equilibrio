import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningFiltersComponent } from './planning-filters.component';

describe('PlanningFiltersComponent', () => {
  let component: PlanningFiltersComponent;
  let fixture: ComponentFixture<PlanningFiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanningFiltersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanningFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
