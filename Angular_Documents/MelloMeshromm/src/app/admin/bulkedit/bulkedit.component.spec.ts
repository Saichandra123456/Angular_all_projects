import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkeditComponent } from './bulkedit.component';

describe('BulkeditComponent', () => {
  let component: BulkeditComponent;
  let fixture: ComponentFixture<BulkeditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BulkeditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
