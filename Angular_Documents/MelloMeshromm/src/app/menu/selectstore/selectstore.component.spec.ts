import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectstoreComponent } from './selectstore.component';

describe('SelectstoreComponent', () => {
  let component: SelectstoreComponent;
  let fixture: ComponentFixture<SelectstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectstoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
