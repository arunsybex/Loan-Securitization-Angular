import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpvpackdetailComponent } from './spvpackdetail.component';

describe('SpvpackdetailComponent', () => {
  let component: SpvpackdetailComponent;
  let fixture: ComponentFixture<SpvpackdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpvpackdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpvpackdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
