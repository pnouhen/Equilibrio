import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagePlacesTimesComponent } from './manage-places-times.component';

describe('ManagePlacesTimesComponent', () => {
  let component: ManagePlacesTimesComponent;
  let fixture: ComponentFixture<ManagePlacesTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePlacesTimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagePlacesTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
