import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorpackdetailComponent } from './investorpackdetail.component';

describe('InvestorpackdetailComponent', () => {
  let component: InvestorpackdetailComponent;
  let fixture: ComponentFixture<InvestorpackdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorpackdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorpackdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
