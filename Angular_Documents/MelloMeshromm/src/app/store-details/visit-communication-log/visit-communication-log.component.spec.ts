import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitCommunicationLogComponent } from './visit-communication-log.component';

describe('VisitCommunicationLogComponent', () => {
  let component: VisitCommunicationLogComponent;
  let fixture: ComponentFixture<VisitCommunicationLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitCommunicationLogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisitCommunicationLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
