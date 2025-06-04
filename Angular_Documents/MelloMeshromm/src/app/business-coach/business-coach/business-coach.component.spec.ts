import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCoachComponent } from './business-coach.component';

describe('BusinessCoachComponent', () => {
  let component: BusinessCoachComponent;
  let fixture: ComponentFixture<BusinessCoachComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCoachComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCoachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
