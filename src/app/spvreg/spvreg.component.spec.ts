import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvregComponent } from './spvreg.component';

describe('SpvregComponent', () => {
  let component: SpvregComponent;
  let fixture: ComponentFixture<SpvregComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvregComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvregComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
