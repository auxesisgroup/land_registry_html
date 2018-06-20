import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetBuyerContactDetailsForSellComponent } from './get-buyer-contact-details-for-sell.component';

describe('GetBuyerContactDetailsForSellComponent', () => {
  let component: GetBuyerContactDetailsForSellComponent;
  let fixture: ComponentFixture<GetBuyerContactDetailsForSellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetBuyerContactDetailsForSellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetBuyerContactDetailsForSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
