import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshotelDialogComponent } from './detailshotel-dialog.component';

describe('DetailshotelDialogComponent', () => {
  let component: DetailshotelDialogComponent;
  let fixture: ComponentFixture<DetailshotelDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailshotelDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailshotelDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
