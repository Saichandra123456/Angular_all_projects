import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketprogramsComponent } from './marketprograms.component';

describe('MarketprogramsComponent', () => {
  let component: MarketprogramsComponent;
  let fixture: ComponentFixture<MarketprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketprogramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
