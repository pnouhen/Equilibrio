import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthpageConnexionFormComponent } from './authpage-connexion-form.component';

describe('AuthpageConnexionFormComponent', () => {
  let component: AuthpageConnexionFormComponent;
  let fixture: ComponentFixture<AuthpageConnexionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthpageConnexionFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthpageConnexionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
