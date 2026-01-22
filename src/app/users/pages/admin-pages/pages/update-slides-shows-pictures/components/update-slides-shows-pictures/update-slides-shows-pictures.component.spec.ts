import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSlidesShowsPicturesComponent } from './update-slides-shows-pictures.component';

describe('UpdateSlidesShowsPicturesComponent', () => {
  let component: UpdateSlidesShowsPicturesComponent;
  let fixture: ComponentFixture<UpdateSlidesShowsPicturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateSlidesShowsPicturesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSlidesShowsPicturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
