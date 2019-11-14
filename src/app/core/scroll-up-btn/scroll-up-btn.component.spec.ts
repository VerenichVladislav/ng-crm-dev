import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollUpBtnComponent } from './scroll-up-btn.component';

describe('ScrollUpBtnComponent', () => {
  let component: ScrollUpBtnComponent;
  let fixture: ComponentFixture<ScrollUpBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollUpBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollUpBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
