import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsindexComponent } from './flightsindex.component';

describe('FlightsindexComponent', () => {
  let component: FlightsindexComponent;
  let fixture: ComponentFixture<FlightsindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightsindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightsindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
