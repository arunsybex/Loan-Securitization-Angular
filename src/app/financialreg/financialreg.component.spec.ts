import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialregComponent } from './financialreg.component';

describe('FinancialregComponent', () => {
  let component: FinancialregComponent;
  let fixture: ComponentFixture<FinancialregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinancialregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinancialregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
