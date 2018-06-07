import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// declare let window: any;
// import * as Web3 from 'web3';
import {ContactserviceService } from '../service/contactservice.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-monthlypayment',
  templateUrl: './monthlypayment.component.html',
  styleUrls: ['./monthlypayment.component.css']
})
export class MonthlypaymentComponent implements OnInit {
  public balance: number;
  public address: string;
  public Token_address:string;
  public loan_address:string;
  public loan_amount:number;
  public _address:any;
  public alldetails=[]
  loandetails=[]
  private isButtonVisible = true;
 
  constructor(public get:ContactserviceService,private router:Router,private spinner: NgxSpinnerService) 
  {
    get.getAccount().then(address=>this.address=address);
    get.borrower_view_fi();
   }
   
   MonthlyPayment(loanid:any,bankaddress:string,balanceins:any)
   {
    this.spinner.show();

     this.get.MonthlyPayment(loanid,bankaddress,balanceins).then((res)=>{
     console.log(res);
              

      console.log("Hash :"+res);
      if(res === 0)
        {  
          this.spinner.hide();
        }
        else
        this.get.hash(res).then((result) =>
        {
          console.log("result : "+ result );  
          this.spinner.hide();
          this.get.loandetails(bankaddress,loanid).then(result=> {
            if(result[5]==result[6])
            {
              alert("The Loan Process is completed and the respected Token is delivered to revered Account Shortly")
            }

          })
        })
      });
         
   }
  ngOnInit() {
    this.get.borrower_view_fi().then(obj=>{
      obj.forEach(item => {
         // console.log(item);
         console.log(this.address);
          this.get.bank_reg(item).then(val=> {
            for(var j=val[3].toNumber();j<val[4].toNumber();j++){
              this.get.loandetails(item,j).then(result=> {
              var e=result[4]/val[1];
              
              var f=result[6]-result[5];
              var c=e*f
              console.log();
              
              console.log(f);
              if(this.address==result[3]&&result[5]<result[6])
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
