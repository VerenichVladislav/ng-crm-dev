import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponentComponent } from './search-result-component.component';

describe('SearchResultComponentComponent', () => {
  let component: SearchResultComponentComponent;
  let fixture: ComponentFixture<SearchResultComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
