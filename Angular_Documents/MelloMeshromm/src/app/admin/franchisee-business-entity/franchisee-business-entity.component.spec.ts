import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FranchiseeBusinessEntityComponent } from './franchisee-business-entity.component';

describe('FranchiseeBusinessEntityComponent', () => {
  let component: FranchiseeBusinessEntityComponent;
  let fixture: ComponentFixture<FranchiseeBusinessEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FranchiseeBusinessEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FranchiseeBusinessEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
