import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-get-buyer-contact-details-for-sell',
  templateUrl: './get-buyer-contact-details-for-sell.component.html',
  styleUrls: ['./get-buyer-contact-details-for-sell.component.css']
})
export class GetBuyerContactDetailsForSellComponent implements OnInit {
  message:any;
  propertyList:any;
  constructor( public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router) { }

  ngOnInit() {
    this.getBuyerContactDetailsForSell();
  }


  getBuyerContactDetailsForSell(){
   
    this.http.get(localStorage.getItem("LandRegistryURL")+"getOwnedContactDetails/"+localStorage.getItem("LandRegistryUserAddress"))
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


  sellProperty(ls){
    localStorage.setItem("contractAddressForSell",ls.contractAddress);
    this.router.navigate(["/sellpropertybybuyer"]);
  }
}
