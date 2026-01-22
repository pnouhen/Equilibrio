import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTimesLocationComponent } from './locations-times-location.component';

describe('LocationsTimesLocationComponent', () => {
  let component: LocationsTimesLocationComponent;
  let fixture: ComponentFixture<LocationsTimesLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsTimesLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsTimesLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
