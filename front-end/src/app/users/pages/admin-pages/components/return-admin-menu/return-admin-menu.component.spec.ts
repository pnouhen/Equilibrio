import { ReturnAdminMenuComponent } from './return-admin-menu.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ReturnAdminMenuComponent', () => {
  let component: ReturnAdminMenuComponent;
  let fixture: ComponentFixture<ReturnAdminMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReturnAdminMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnAdminMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
