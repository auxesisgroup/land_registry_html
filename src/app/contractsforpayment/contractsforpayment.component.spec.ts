import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractsforpaymentComponent } from './contractsforpayment.component';

describe('ContractsforpaymentComponent', () => {
  let component: ContractsforpaymentComponent;
  let fixture: ComponentFixture<ContractsforpaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractsforpaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractsforpaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
