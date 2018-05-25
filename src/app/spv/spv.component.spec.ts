import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SPVComponent } from './spv.component';

describe('SPVComponent', () => {
  let component: SPVComponent;
  let fixture: ComponentFixture<SPVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SPVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
