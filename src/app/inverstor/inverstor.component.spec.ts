import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InverstorComponent } from './inverstor.component';

describe('InverstorComponent', () => {
  let component: InverstorComponent;
  let fixture: ComponentFixture<InverstorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InverstorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InverstorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
