import { RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { ViewuserComponent } from './viewuser/viewuser.component';
import { LoginComponent } from './login/login.component';
import { AddContractComponent } from './add-contract/add-contract.component';
import { SellercontractlistComponent } from './sellercontractlist/sellercontractlist.component';
import { BuyercontractlistComponent } from './buyercontractlist/buyercontractlist.component';
import { BrokercontractlistComponent } from './brokercontractlist/brokercontractlist.component';
import { GetbuyerbiddetailsComponent } from './getbuyerbiddetails/getbuyerbiddetails.component';
import { ContractdetailsComponent } from './contractdetails/contractdetails.component';
import { GetBuyerContactDetailsForSellComponent } from './get-buyer-contact-details-for-sell/get-buyer-contact-details-for-sell.component';
import { SellPropertyByBuyerComponent } from './sell-property-by-buyer/sell-property-by-buyer.component';
import { ContractsforpaymentComponent } from './contractsforpayment/contractsforpayment.component';


const routes:Routes = [
    {
        path:"",
        component: LoginComponent,
        pathMatch:"full",
        data:{
            title:"Welcome"
        }
    },
    {
        path:"home",
        component: HomeComponent,
        data:{
            title:"Home"
        }
    },
    {
        path:"user/:id",
        component:ViewuserComponent,
        data:{
            title:"View User"
        }
    },
    {
        path:"login",
        component:LoginComponent,
        data:{
            title:"Login"
        }
    },
    {
        path:"addcontract",
        component:AddContractComponent,
        data:{
            title:"Add-contract"
        }
    },
    {
        path:"sellercontract",
        component:SellercontractlistComponent,
        data:{
            title:"Seller-contract"
        }
    },
    
    {
        path:"brokercontract",
        component:BrokercontractlistComponent,
        data:{
            title:"Broker-contract"
        }
    },
    {
        path:"buyercontract",
        component:BuyercontractlistComponent,
        data:{
            title:"Broker-contract"
        }
    },
    {
        path:"getbuyerbiddetails",
        component:GetbuyerbiddetailsComponent,
        data:{
            title:"Seller-contract"
        }
    },
    {
        path:"contractdetails",
        component:ContractdetailsComponent,
        data:{
            title:"Seller-contract"
        }
    },
    {
        path:"getbuyercontractdetailsforsell",
        component:GetBuyerContactDetailsForSellComponent,
        data:{
            title:"Seller-contract"
        }
    },
    {
        path:"sellpropertybybuyer",
        component:SellPropertyByBuyerComponent,
        data:{
            title:"Seller-contract"
        }
    },
    {
        path:"contractsforpayment",
        component:ContractsforpaymentComponent,
        data:{
            title:"Seller-contract"
        }
    },
    
    {
        path: "**",
        component: WelcomeComponent,
        data:{
            title: "Page not found"
        }
    }
];

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[RouterModule]
})

export class AppRoutingModule {}