import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingprogramComponent } from './marketingprogram.component';

describe('MarketingprogramComponent', () => {
  let component: MarketingprogramComponent;
  let fixture: ComponentFixture<MarketingprogramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingprogramComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingprogramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
