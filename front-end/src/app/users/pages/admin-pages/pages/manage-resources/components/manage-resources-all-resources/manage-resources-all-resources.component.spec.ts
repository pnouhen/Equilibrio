import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesAllResourcesComponent } from './manage-resources-all-resources.component';

describe('ManageResourcesAllResourcesComponent', () => {
  let component: ManageResourcesAllResourcesComponent;
  let fixture: ComponentFixture<ManageResourcesAllResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesAllResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesAllResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
