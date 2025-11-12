import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTimesComponent } from './locations-times.component';

describe('LocationsTimesComponent', () => {
  let component: LocationsTimesComponent;
  let fixture: ComponentFixture<LocationsTimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsTimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsTimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
