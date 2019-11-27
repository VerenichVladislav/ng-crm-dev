import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourSearchResComponent } from './tour-search-res.component';

describe('TourSearchResComponent', () => {
  let component: TourSearchResComponent;
  let fixture: ComponentFixture<TourSearchResComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourSearchResComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourSearchResComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
