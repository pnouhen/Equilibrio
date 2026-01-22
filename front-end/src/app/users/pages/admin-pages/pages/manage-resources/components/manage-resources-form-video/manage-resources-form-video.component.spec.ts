import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormVideoComponent } from './manage-resources-form-video.component';

describe('ManageResourcesFormVideoComponent', () => {
  let component: ManageResourcesFormVideoComponent;
  let fixture: ComponentFixture<ManageResourcesFormVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormVideoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
