import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardUserMenuComponent } from './dashboard-user-menu.component';

describe('DashboardUserMenuComponent', () => {
  let component: DashboardUserMenuComponent;
  let fixture: ComponentFixture<DashboardUserMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardUserMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardUserMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
