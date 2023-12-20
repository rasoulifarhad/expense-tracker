import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BriefingCardsComponent } from './briefing-cards.component';

describe('BriefingCardsComponent', () => {
  let component: BriefingCardsComponent;
  let fixture: ComponentFixture<BriefingCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BriefingCardsComponent]
    });
    fixture = TestBed.createComponent(BriefingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
