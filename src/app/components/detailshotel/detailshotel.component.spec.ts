import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshotelComponent } from './detailshotel.component';

describe('DetailshotelComponent', () => {
  let component: DetailshotelComponent;
  let fixture: ComponentFixture<DetailshotelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailshotelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailshotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
