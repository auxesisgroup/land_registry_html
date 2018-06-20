import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contractsforpayment',
  templateUrl: './contractsforpayment.component.html',
  styleUrls: ['./contractsforpayment.component.css']
})
export class ContractsforpaymentComponent implements OnInit {
  propertyList:any;
  message:any;
  constructor(public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
  this. getBuyerContactDetailsForSell();
  }




  getBuyerContactDetailsForSell(){
    
     this.http.get(localStorage.getItem("LandRegistryURL")+"getContractDetailsForPayment/"+localStorage.getItem("LandRegistryUserAddress"))
     .subscribe(
       d=>{
         let dt = JSON.parse(JSON.stringify(d));
         console.log(dt)
         let body = JSON.parse(dt._body);
         console.log(body)
        this.propertyList=body.result;
       },
       e=>{
       //  alert("Contract not found");
         this.message = "error";
       }
     )
   }

   payment (ls){
    ///deposit/{ethers}/{contractAddress}
    this.http.get(localStorage.getItem("LandRegistryURL")+"deposit/"
    +ls.confirmPrice+"/"+ls.contractAddress)
    .subscribe(
      d=>{
        let dt = JSON.parse(JSON.stringify(d));
        let body = JSON.parse(dt._body);
        console.log("result  :::",body)
        this.propertyList=body.result;
      },
      e=>{
      //  alert("Contract not found");
        this.message = "error";
      }
    )

   }
}
