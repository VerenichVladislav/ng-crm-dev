import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketMapComponent } from './ticket-map.component';

describe('TicketMapComponent', () => {
  let component: TicketMapComponent;
  let fixture: ComponentFixture<TicketMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicketMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicketMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
