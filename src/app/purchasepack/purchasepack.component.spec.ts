import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchasepackComponent } from './purchasepack.component';

describe('PurchasepackComponent', () => {
  let component: PurchasepackComponent;
  let fixture: ComponentFixture<PurchasepackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchasepackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchasepackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
