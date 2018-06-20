import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http } from '@angular/http';
import { Router,ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  myForm:FormGroup;
  message:any;

  public ngxloading = false;

  constructor(
    public fb:FormBuilder,
    public http:Http,
    public route:ActivatedRoute,
    public router:Router,
    private toastr: ToastrService,
  ) { 
    this.myForm = fb.group({
      username:['',Validators.compose([Validators.required])],
      password:['',Validators.compose([Validators.required,Validators.min(8)])],
      optradio:['',Validators.required]
    });
  }

  ngOnInit() {
    // this.myForm.get("email").setValue("mymail@angular.io");
    this.ckeck();
  }


  ckeck(){
    this.ngxloading = true;
   
      this.http.get("http://192.81.215.180:8080/AirpayBlockchain/api/airpay/getKeyPair"
      )
      .subscribe(
        d=>{
   console.log("result  ::",d);
        },
        e=>{
          this.ngxloading = false;
          // this.toastr.error("Invalid user", null,{timeOut:4000});
          this.message = "Invalid user";
        }
      )
   
  }


  submit(){
    this.ngxloading = true;
    if(this.myForm.valid){
      this.http.post(localStorage.getItem("LandRegistryURL")+"login",{
        "username": this.myForm.value.username, 
        "password":  this.myForm.value.password, 
        "role":  this.myForm.value.optradio
      })
      .subscribe(
        d=>{
          this.ngxloading = false;
          localStorage.setItem("userRole", this.myForm.value.optradio)
          let dt = JSON.parse(JSON.stringify(d));
          console.log(dt)
          let body = JSON.parse(dt._body);
          console.log(body)
          let address = body.result.address;
          console.log(address)
          localStorage.setItem("LandRegistryUserAddress",address)
          this.toastr.success("Logged In Successful", null,{timeOut:4000});
          if(this.myForm.value.optradio==0)   
          this.router.navigate(["/addcontract"]);
          if(this.myForm.value.optradio==1)   
          this.router.navigate(["/brokercontract"]);
          if(this.myForm.value.optradio==2)   
          this.router.navigate(["/buyercontract"]);
        },
        e=>{
          this.ngxloading = false;
          // this.toastr.error("Invalid user", null,{timeOut:4000});
          this.message = "Invalid user";
        }
      )
    }else{
      this.ngxloading = false;
      // this.toastr.error("Invalid credentials", null,{timeOut:4000});
      this.message = "Invalid credentials";
    }
  }

}
