import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashboardMenuComponent } from './student-dashboard-menu.component';

describe('StudentDashboardMenuComponent', () => {
  let component: StudentDashboardMenuComponent;
  let fixture: ComponentFixture<StudentDashboardMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentDashboardMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashboardMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
