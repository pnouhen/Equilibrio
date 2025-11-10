import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalesMentionsComponent } from './legales-mentions.component';

describe('LegalesMentionsComponent', () => {
  let component: LegalesMentionsComponent;
  let fixture: ComponentFixture<LegalesMentionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LegalesMentionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegalesMentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
