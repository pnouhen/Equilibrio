import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectedComponent } from './input-selected.component';

describe('InputSelectedComponent', () => {
  let component: InputSelectedComponent;
  let fixture: ComponentFixture<InputSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputSelectedComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
