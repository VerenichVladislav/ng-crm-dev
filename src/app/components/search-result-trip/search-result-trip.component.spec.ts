import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultTripComponent } from './search-result-trip.component';

describe('SearchResultTripComponent', () => {
  let component: SearchResultTripComponent;
  let fixture: ComponentFixture<SearchResultTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
