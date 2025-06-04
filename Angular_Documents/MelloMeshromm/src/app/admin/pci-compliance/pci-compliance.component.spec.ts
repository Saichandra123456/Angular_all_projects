import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PciComplianceComponent } from './pci-compliance.component';

describe('PciComplianceComponent', () => {
  let component: PciComplianceComponent;
  let fixture: ComponentFixture<PciComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PciComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PciComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
