import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalfiComponent } from './totalfi.component';

describe('TotalfiComponent', () => {
  let component: TotalfiComponent;
  let fixture: ComponentFixture<TotalfiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalfiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
