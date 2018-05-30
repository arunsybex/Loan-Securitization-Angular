import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
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
  constructor(private inv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService )
  {
    inv.getUserBalance().then(balance => this.balance = balance);
    inv.getAccount().then(address=>this.address=address);
  }
  cancel()
  {
    this.router.navigate(['home']);
  }
  inv_reg()
  {
    this.spinner.show();
    console.log(this.inves_ether);
   

   this.inv.Investorether(this.inves_ether).then((res)=>{
     
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
