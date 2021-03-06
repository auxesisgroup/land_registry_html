import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-getbuyerbiddetails',
  templateUrl: './getbuyerbiddetails.component.html',
  styleUrls: ['./getbuyerbiddetails.component.css']
})
export class GetbuyerbiddetailsComponent implements OnInit {

  bidlist:any;
  
    myForm:FormGroup;
    message:any;
 
  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router
  ) { 
   
  }
  ngOnInit() {
    this.buyercontractlist()
  }
  buyercontractlist(){
    
       this.http.get(localStorage.getItem("LandRegistryURL")+"getBidDetailsOfContract/"+localStorage.getItem("contractAddress"))
       .subscribe(
         d=>{
           console.log("user contract #########################")
           let dt = JSON.parse(JSON.stringify(d));
           console.log(dt)
           let body = JSON.parse(dt._body);
           console.log(body)
          this.bidlist=body.result;
          console.log(this.bidlist)
         //  alert("Your contract address is:"+body.result);
         },
         e=>{
           alert("Contract not found");
           this.message = "Error";
         }
       )
    
   }

   confirmBid(ls)
   {
    this.http.post(localStorage.getItem("LandRegistryURL")+"confirmBidForProperty/"+localStorage.getItem("contractAddress"),{
      "bidId":ls.bidId,
    })
    .subscribe(
      d=>{
        console.log("user contract #########################")
        let dt = JSON.parse(JSON.stringify(d));
        console.log(dt)
        let body = JSON.parse(dt._body);
        console.log(body)
        console.log("result",body.result);
        alert(body.result);
      },
      e=>{
        alert("Contract not found");
        this.message = "Error";
      }
    )
   }


}
