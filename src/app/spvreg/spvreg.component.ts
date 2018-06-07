import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-spvreg',
  templateUrl: './spvreg.component.html',
  styleUrls: ['./spvreg.component.css']
})
export class SpvregComponent implements OnInit {


  public balance: number;
  public address: string;
  public spv_ether_value:number;
  angForm:FormGroup;  
  constructor(public spv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService,private fb:FormBuilder)
  {
     spv.getAccount().then(address=>this.address=address);
     this.createForm();
  }
  createForm() 
  {
   this.angForm = this.fb.group({
      amt: ['', Validators.required ]
   });
 }
  cancel()
{
  this.router.navigate(['home']);
}
  spv_reg(a)
  {
    //alert("hai");
    this.spinner.show();
    this.spv.spv_reg(a).then((res)=>{
     // alert("second")
     console.log("Hash :"+res);
     if(res === 0)
       {  
         this.spinner.hide();
       }
       else
       this.spv.hash(res).then((result) =>
       {
         console.log("result : "+ result );  
         this.spinner.hide();
         this.router.navigate(['SPV']);
       })
    });
  }

  ngOnInit() {
  }

}
