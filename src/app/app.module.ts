import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HashLocationStrategy, LocationStrategy, Location } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { LoadingModule, ANIMATION_TYPES } from 'ngx-loading';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component'; 

import { RouterModule , Routes } from '@angular/router';
import { AppRoutingModule } from './app.routes';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { SellercontractlistComponent } from './sellercontractlist/sellercontractlist.component';
import { BrokercontractlistComponent } from './brokercontractlist/brokercontractlist.component';
import { BuyercontractlistComponent } from './buyercontractlist/buyercontractlist.component';
import { GetbuyerbiddetailsComponent } from './getbuyerbiddetails/getbuyerbiddetails.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AlertModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { ContractdetailsComponent } from './contractdetails/contractdetails.component';
import { GetBuyerContactDetailsForSellComponent } from './get-buyer-contact-details-for-sell/get-buyer-contact-details-for-sell.component';
import { SellPropertyByBuyerComponent } from './sell-property-by-buyer/sell-property-by-buyer.component';
import { SellernavbarComponent } from './sellernavbar/sellernavbar.component';
import { BuyernavbarComponent } from './buyernavbar/buyernavbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginheaderComponent } from './layout/loginheader/loginheader.component';
import { HomenavbarComponent } from './layout/homenavbar/homenavbar.component';
import { HomefooterComponent } from './layout/homefooter/homefooter.component';
import { ContractsforpaymentComponent } from './contractsforpayment/contractsforpayment.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WelcomeComponent, 
    ViewuserComponent,
    LoginComponent,
    AddContractComponent,
    NavbarComponent,
    SellercontractlistComponent,
    BrokercontractlistComponent,
    BuyercontractlistComponent,
    GetbuyerbiddetailsComponent,
    ContractdetailsComponent,
    GetBuyerContactDetailsForSellComponent,
    SellPropertyByBuyerComponent,
    SellernavbarComponent,
    BuyernavbarComponent,
    FooterComponent,
    LoginheaderComponent,
    HomenavbarComponent,
    HomefooterComponent,
    ContractsforpaymentComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    HttpModule,   ModalModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    LoadingModule.forRoot({
      animationType: ANIMATION_TYPES.threeBounce,
      backdropBackgroundColour: 'rgba(0,0,0,0.5)', 
      backdropBorderRadius: '0px',
      primaryColour: '#c2e9f9', 
      secondaryColour: '#c2e9f9', 
      tertiaryColour: '#c2e9f9',
      fullScreenBackdrop:true,
      positionClass: 'toast-bottom-right',
    }),
    ToastrModule.forRoot({
      maxOpened:1,
      preventDuplicates:true
    })
  ], 
  providers: [
    {
      provide:LocationStrategy,
      useClass:HashLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
