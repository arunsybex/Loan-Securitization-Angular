import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseloanComponent } from './purchaseloan.component';

describe('PurchaseloanComponent', () => {
  let component: PurchaseloanComponent;
  let fixture: ComponentFixture<PurchaseloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
