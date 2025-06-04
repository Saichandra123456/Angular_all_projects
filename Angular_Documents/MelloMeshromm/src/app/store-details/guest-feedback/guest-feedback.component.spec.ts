import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestFeedbackComponent } from './guest-feedback.component';

describe('GuestFeedbackComponent', () => {
  let component: GuestFeedbackComponent;
  let fixture: ComponentFixture<GuestFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
