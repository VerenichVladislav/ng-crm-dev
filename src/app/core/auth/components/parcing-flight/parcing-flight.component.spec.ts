import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcingFlightComponent } from './parcing-flight.component';

describe('ParcingFlightComponent', () => {
  let component: ParcingFlightComponent;
  let fixture: ComponentFixture<ParcingFlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParcingFlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcingFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
