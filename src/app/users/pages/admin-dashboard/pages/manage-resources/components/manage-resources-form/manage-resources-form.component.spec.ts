import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormComponent } from './manage-resources-form.component';

describe('ManageResourcesFormComponent', () => {
  let component: ManageResourcesFormComponent;
  let fixture: ComponentFixture<ManageResourcesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
