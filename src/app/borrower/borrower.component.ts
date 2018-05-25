import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import {ContactserviceService } from '../service/contactservice.service';
@Component({
  selector: 'app-borrower',
  templateUrl: './borrower.component.html',
  styleUrls: ['./borrower.component.css']
})
export class BorrowerComponent implements OnInit {
 
  public balance: number;
  public address: string;
  public Token_address:string;
  public loan_address:string;
  public loan_amount:number;
  public _address:any;
  public alldetails=[]
  loandetails=[]
  
  constructor(public get:ContactserviceService)
  {
    
    get.getAccount().then(address=>this.address=address);
    get.borrower_view_fi();
  }
  choosefi(bank_address) {

    this._address=bank_address;

  }
  req_loan(loan_address){
   
    
    this.get.request_loan(this.Token_address,loan_address,this.loan_amount).then((res)=>{


    });
  }
 
  
  MonthlyPayment(loanid:any,bankaddress:string,balanceins:any)
  {
    this.get.MonthlyPayment(loanid,bankaddress,balanceins).then((res)=>{
      
            
        });
   
        
   
    
  }
  ngOnInit() {
    this.get.getAccount().then(address => this.address = address)
    this.get.getUserBalance().then(balance => this.balance = balance)

    
    this.get.borrower_view_fi().then(obj=>{
      obj.forEach(item => {

          this.get.bank_reg(item).then(result=> {
     
          this.alldetails.push({"bank_address":result[9],"bank_name":result[10],"deposit_amount":result[0],"loan_interest":result[2]});
      })
      })
      
    })

    this.get.borrower_view_fi().then(obj=>{
      obj.forEach(item => {
       
  
          this.get.bank_reg(item).then(val=> {
            for(var j=val[3].toNumber();j<val[4].toNumber();j++){
              this.get.loandetails(item,j).then(result=> {
              var e=result[4]/val[1];
              var f=result[6]-result[5];
              var c=e*f
              if(this.address==result[3])
              {
                this.loandetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4],"totalpaidins":result[5],"totalmonth":result[6],"balanceloan":c,"balanceins":e});
              }
              })
            }
      })
      })
      
    })
  }


}
