import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestorePasswordDialogComponent } from './restore-password-dialog.component';

describe('RestorePasswordDialogComponent', () => {
  let component: RestorePasswordDialogComponent;
  let fixture: ComponentFixture<RestorePasswordDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestorePasswordDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestorePasswordDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
