import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCommunicationComponent } from './visit-communication.component';

describe('VisitCommunicationComponent', () => {
  let component: VisitCommunicationComponent;
  let fixture: ComponentFixture<VisitCommunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitCommunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
