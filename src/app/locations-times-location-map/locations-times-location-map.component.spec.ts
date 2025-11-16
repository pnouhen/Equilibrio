import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationsTimesLocationMapComponent } from './locations-times-location-map.component';

describe('LocationsTimesLocationMapComponent', () => {
  let component: LocationsTimesLocationMapComponent;
  let fixture: ComponentFixture<LocationsTimesLocationMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocationsTimesLocationMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationsTimesLocationMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
