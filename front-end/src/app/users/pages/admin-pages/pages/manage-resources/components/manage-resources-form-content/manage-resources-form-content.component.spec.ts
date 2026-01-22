import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormContentComponent } from './manage-resources-form-content.component';

describe('ManageResourcesFormContentComponent', () => {
  let component: ManageResourcesFormContentComponent;
  let fixture: ComponentFixture<ManageResourcesFormContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
