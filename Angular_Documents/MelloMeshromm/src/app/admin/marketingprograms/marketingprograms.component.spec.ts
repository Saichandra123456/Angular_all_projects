import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingprogramsComponent } from './marketingprograms.component';

describe('MarketingprogramsComponent', () => {
  let component: MarketingprogramsComponent;
  let fixture: ComponentFixture<MarketingprogramsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketingprogramsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketingprogramsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
