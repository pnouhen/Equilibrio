import { TeacherManagmentComponent } from './teacher-managment.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('TeacherManagmentComponent', () => {
  let component: TeacherManagmentComponent;
  let fixture: ComponentFixture<TeacherManagmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherManagmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeacherManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
