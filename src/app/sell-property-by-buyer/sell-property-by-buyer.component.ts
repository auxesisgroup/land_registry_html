import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sell-property-by-buyer',
  templateUrl: './sell-property-by-buyer.component.html',
  styleUrls: ['./sell-property-by-buyer.component.css']
})
export class SellPropertyByBuyerComponent implements OnInit {
  contractDetails:any;
  message:any;
  price='';
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router
  ) { }

  ngOnInit() {
    this.getContractDetails();
  }



  getContractDetails(){
       this.http.get(localStorage.getItem("LandRegistryURL")+"getPropertyDetailsFromBc/"+localStorage.getItem("contractAddressForSell"))
       .subscribe(
         d=>{
           console.log("user contract #########################");
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.contractDetails=body.result;
         },
         e=>{
           alert("Contract not found");
           this.message = "";
         }
       )
   }



   submit(){
     var dt = {
      "sellerAddress":localStorage.getItem("LandRegistryUserAddress"),
      "description": this.contractDetails.description, 
      "fileHash": this.contractDetails.fileHash, 
      "price": this.price
    };
    console.log("dt:",dt);
    this.http.post(localStorage.getItem("LandRegistryURL")+"propertyContractCreation",dt)
    .subscribe(
      d=>{
        let dt = JSON.parse(JSON.stringify(d));
        console.log(dt)
        let body = JSON.parse(dt._body);
        console.log(body)

        alert("Your contract address is:"+body.result);
        this.message = "Your contract address is:"+body.result;

        setTimeout(()=>{this.message='';},2500);
      },
      e=>{
        this.message = "Invalid user";
      }
    )
   }

}
