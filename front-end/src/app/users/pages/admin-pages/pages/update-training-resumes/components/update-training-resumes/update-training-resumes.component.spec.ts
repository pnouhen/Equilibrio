import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTrainingResumesComponent } from './update-training-resumes.component';

describe('UpdateTrainingResumesComponent', () => {
  let component: UpdateTrainingResumesComponent;
  let fixture: ComponentFixture<UpdateTrainingResumesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateTrainingResumesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateTrainingResumesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
