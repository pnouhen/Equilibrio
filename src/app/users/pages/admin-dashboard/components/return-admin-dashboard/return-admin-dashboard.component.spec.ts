import { ReturnAdminDashboardComponent } from './return-admin-dashboard.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnAdminDashboardComponent', () => {
  let component: ReturnAdminDashboardComponent;
  let fixture: ComponentFixture<ReturnAdminDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnAdminDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAdminDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
