import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMoneyComponent } from './no-money.component';

describe('NoMoneyComponent', () => {
  let component: NoMoneyComponent;
  let fixture: ComponentFixture<NoMoneyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoMoneyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMoneyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
