import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageResourcesFormSongComponent } from './manage-resources-form-song.component';

describe('ManageResourcesFormSongComponent', () => {
  let component: ManageResourcesFormSongComponent;
  let fixture: ComponentFixture<ManageResourcesFormSongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageResourcesFormSongComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageResourcesFormSongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
