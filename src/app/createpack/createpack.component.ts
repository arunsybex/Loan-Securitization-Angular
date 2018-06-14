import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Button } from 'protractor';
import { Z_DEFAULT_STRATEGY } from 'zlib';
@Component({
    selector: 'app-createpack',
    templateUrl: './createpack.component.html',
    styleUrls: ['./createpack.component.css']
  })
  export class CreatepackComponent implements OnInit
{

  public loan:number;
  public balance: number;
  public address: string;
  public spv_ether_value:number;
  public loanid=[];
  public button;
  ids = [];
  details = [];
  detail = [];
  loandetails=[];
  purdetails=[];
  packdetails=[];
  constructor(public spv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService)
  {
     spv.getAccount().then(address=>this.address=address);
  }
  choosefi(bank_address:string)
  {
    this.spv.bank_reg(bank_address).then((val)=>{
     
      for(var j=val[3].toNumber();j<val[4].toNumber();j++){
        this.spv.loandetails(val[9],j).then(result=> {
        if(result[0]>0)
        {
          this.purdetails.push({"loanid":result[0],"tokenaddress":result[7],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
        }
        })
      }
        });
      
  }
  selectloan(loanid) {
    var ii=this.ids.length;
    var i;
    
    if(ii==0)
    {
      this.ids.push(loanid);
    }
    else
    {
    for( i=0;i<this.ids.length;i++) {
       if(parseInt(this.ids[i])==loanid) {
        break;
       }
    }
    if(i==this.ids.length)
    {
      this.ids.push(loanid);
    }
  }
    
  }

  clear(a) 
  {
    this.ids.length=0;
    
    
   a=this.ids;

  }
  createPack(a)
  {
    if(this.ids.length>0)
    {
      this.button=false;
    this.spinner.show();
    let value=a.split(",");
    
    for(var i=0;i <value.length;i++)
    {
      
      this.loanid.push(parseInt(value[i]))
    }
      this.spv.createPack(this.loanid).then((res)=>{
        
        
        if(1===res.length)
          {  
            this.spinner.hide();
          }
          else
          this.spv.hash(res).then((result) =>
          {
            
            this.spinner.hide();
            this.router.navigate(['']);
          })
     });
    }
    else
    {
      this.button=true;
    }
    this.button=false;
  }
  pur_loan(loanid,bankaddress)
  {
    this.spv.pur_loan(loanid,bankaddress).then((res)=>{
    });
  }
  ngOnInit()
  {
    this.spv.getAccount().then(address => this.address = address)
    this.spv.getUserBalance().then(balance => this.balance = balance)
   
   
          this.spv.spv_reg1().then(result=> {
          this.details.push({"spvaddress":this.address,"totalamount":result[0],"totalloan":result[1],"availablepack":result[2]});
      })
     
     
   
    this.spv.borrower_view_fi().then(obj=>{
      obj.forEach(item => {
          this.spv.bank_reg(item).then(result=> { 
          this.detail.push({"bank_address":result[9],"bank_name":result[10],"deposit_amount":result[0],"loan_interest":result[2]});
      })
      })
     
    })
    this.spv.borrower_view_fi().then(obj=>{
      obj.forEach(item => {
       
          this.spv.bank_reg(item).then(val=> {
            for(var j=val[3].toNumber();j<val[4].toNumber();j++){
              var a=j;
              this.spv.loandetails(item,a).then(result=> {
              
              this.spv.spv_loanid(result[0]).then(result1=> {   
              if(this.address==result1[0]&&result1[3]!=1&&result[6]>result[5])
              {
                this.loandetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
              }
            })
              })
              this.spv.investortable1(this.address).then(result1=> { 
                this.loan=result1[3];
                
                 })
            }
      })
      })
      
  })
this.spv.borrower_view_fi().then(obj=>{
  obj.forEach(item => {
      this.spv.bank_reg(item).then(val=> {
        for(var j=val[3].toNumber();j<val[4].toNumber();j++){
          this.spv.loandetails(item,j).then(result=> {
        
          if(this.address==result[3])
          {
           
            this.purdetails.push({"loanid":result[0],"tokenaddress":result[7],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
          }
          })
        }
  })
  })
  
})
this.spv.spv_reg1().then((res)=>{
   
  for(var i=res[5].toNumber();i<=res[6].toNumber();i++){
    this.spv.loandetails(res[7],i).then((result)=>{
      let a=result[1]/1000000000000000000;
      if(a>0)
      {
      this.packdetails.push({"packid":result[0],"tokenvalue":a});
      }
  })
}
});
   
}

}

