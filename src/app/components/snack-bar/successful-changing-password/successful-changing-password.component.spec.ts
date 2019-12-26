import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessfulChangingPasswordComponent } from './successful-changing-password.component';

describe('SuccessfulChangingPasswordComponent', () => {
  let component: SuccessfulChangingPasswordComponent;
  let fixture: ComponentFixture<SuccessfulChangingPasswordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessfulChangingPasswordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessfulChangingPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
