import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorregComponent } from './investorreg.component';

describe('InvestorregComponent', () => {
  let component: InvestorregComponent;
  let fixture: ComponentFixture<InvestorregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestorregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
