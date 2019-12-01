import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFindHotelComponent } from './map-find-hotel.component';

describe('MapFindHotelComponent', () => {
  let component: MapFindHotelComponent;
  let fixture: ComponentFixture<MapFindHotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFindHotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFindHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
