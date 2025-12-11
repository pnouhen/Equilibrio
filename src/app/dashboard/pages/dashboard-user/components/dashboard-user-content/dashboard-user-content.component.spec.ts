import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserContentComponent } from './dashboard-user-content.component';

describe('DashboardUserContentComponent', () => {
  let component: DashboardUserContentComponent;
  let fixture: ComponentFixture<DashboardUserContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
