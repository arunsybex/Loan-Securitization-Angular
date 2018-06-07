import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder,Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-investorreg',
  templateUrl: './investorreg.component.html',
  styleUrls: ['./investorreg.component.css']
})
export class InvestorregComponent implements OnInit 
{

  public balance;
  public address;
  public inves_ether;
  angForm:FormGroup;
  constructor(private inv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService,private fb:FormBuilder)
  {
    inv.getUserBalance().then(balance => this.balance = balance);
    inv.getAccount().then(address=>this.address=address);
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
  inv_reg(a)
  {
    this.spinner.show();
    console.log(a);
   this.inv.Investorether(a).then((res)=>{
      console.log("Hash :"+res);
      if(res === 0)
        {  
          this.spinner.hide();
        }
        else
        this.inv.hash(res).then((result) =>
        {
          console.log("result : "+ result );  
          this.spinner.hide();
          this.router.navigate(['Investor']);
        })
   });
 
  }

  ngOnInit() 
  {
  }

}
