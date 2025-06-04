import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesChaneelComponent } from './sales-chaneel.component';

describe('SalesChaneelComponent', () => {
  let component: SalesChaneelComponent;
  let fixture: ComponentFixture<SalesChaneelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesChaneelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesChaneelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
