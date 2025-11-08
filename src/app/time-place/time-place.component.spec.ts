import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePlaceComponent } from './time-place.component';

describe('TimePlaceComponent', () => {
  let component: TimePlaceComponent;
  let fixture: ComponentFixture<TimePlaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TimePlaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimePlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
