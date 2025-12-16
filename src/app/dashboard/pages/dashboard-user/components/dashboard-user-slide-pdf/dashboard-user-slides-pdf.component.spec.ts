import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserSlidesPdfComponent } from './dashboard-user-slides-pdf.component';

describe('DashboardUserSlidesPdfComponent', () => {
  let component: DashboardUserSlidesPdfComponent;
  let fixture: ComponentFixture<DashboardUserSlidesPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserSlidesPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserSlidesPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
