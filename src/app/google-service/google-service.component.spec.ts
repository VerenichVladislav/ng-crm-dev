import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoogleServiceComponent } from './google-service.component';

describe('GoogleServiceComponent', () => {
  let component: GoogleServiceComponent;
  let fixture: ComponentFixture<GoogleServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoogleServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoogleServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
