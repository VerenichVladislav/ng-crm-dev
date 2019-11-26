import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourIndexComponent } from './tour-index.component';

describe('TourIndexComponent', () => {
  let component: TourIndexComponent;
  let fixture: ComponentFixture<TourIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
