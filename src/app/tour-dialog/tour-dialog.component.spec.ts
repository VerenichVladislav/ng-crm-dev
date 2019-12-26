import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDialogComponent } from './tour-dialog.component';

describe('TourDialogComponent', () => {
  let component: TourDialogComponent;
  let fixture: ComponentFixture<TourDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
