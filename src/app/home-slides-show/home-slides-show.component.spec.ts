import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSlidesShowComponent } from './home-slides-show.component';

describe('HomeSlidesShowComponent', () => {
  let component: HomeSlidesShowComponent;
  let fixture: ComponentFixture<HomeSlidesShowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSlidesShowComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSlidesShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
