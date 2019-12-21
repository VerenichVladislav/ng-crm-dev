import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconfirmedEmailDialogComponent } from './unconfirmed-email-dialog.component';

describe('UnconfirmedEmailDialogComponent', () => {
  let component: UnconfirmedEmailDialogComponent;
  let fixture: ComponentFixture<UnconfirmedEmailDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnconfirmedEmailDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnconfirmedEmailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
