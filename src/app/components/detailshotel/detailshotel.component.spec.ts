import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailshotelComponentComponent } from './detailshotel.component';

describe('DetailshotelComponent', () => {
  let component: DetailshotelComponentComponent;
  let fixture: ComponentFixture<DetailshotelComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailshotelComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailshotelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
