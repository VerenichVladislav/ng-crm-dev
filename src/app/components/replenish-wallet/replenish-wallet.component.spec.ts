import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReplenishWalletComponent } from './replenish-wallet.component';

describe('ReplenishWalletComponent', () => {
  let component: ReplenishWalletComponent;
  let fixture: ComponentFixture<ReplenishWalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReplenishWalletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReplenishWalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
