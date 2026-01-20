import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormContentCreatedComponent } from './manage-resources-form-content-created.component';

describe('ManageResourcesFormContentCreatedComponent', () => {
  let component: ManageResourcesFormContentCreatedComponent;
  let fixture: ComponentFixture<ManageResourcesFormContentCreatedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormContentCreatedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormContentCreatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
