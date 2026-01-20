import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormPdfComponent } from './manage-resources-form-pdf.component';

describe('ManageResourcesFormPdfComponent', () => {
  let component: ManageResourcesFormPdfComponent;
  let fixture: ComponentFixture<ManageResourcesFormPdfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormPdfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormPdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
