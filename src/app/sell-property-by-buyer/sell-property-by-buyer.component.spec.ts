import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SellPropertyByBuyerComponent } from './sell-property-by-buyer.component';

describe('SellPropertyByBuyerComponent', () => {
  let component: SellPropertyByBuyerComponent;
  let fixture: ComponentFixture<SellPropertyByBuyerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SellPropertyByBuyerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SellPropertyByBuyerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
