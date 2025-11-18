import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpageInscriptionFormComponent } from './authpage-inscription-form.component';

describe('AuthpageInscriptionFormComponent', () => {
  let component: AuthpageInscriptionFormComponent;
  let fixture: ComponentFixture<AuthpageInscriptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthpageInscriptionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpageInscriptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
