import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterUsersComponent } from './footer-users.component';

describe('FooterUsersComponent', () => {
  let component: FooterUsersComponent;
  let fixture: ComponentFixture<FooterUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterUsersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
