import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
// declare let window: any;
// import * as Web3 from 'web3';
import {ContactserviceService } from '../service/contactservice.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
@Component({
  selector: 'app-totalfi',
  templateUrl: './totalfi.component.html',
  styleUrls: ['./totalfi.component.css']
})
export class TotalfiComponent implements OnInit {
  public balance: number;
  public address: string;
  public Token_address:string;
  public loan_address:string;
  public loan_amount:number;
  public _address:any;
  public alldetails=[]
  loandetails=[]
  angForm:FormGroup;
  constructor(public get:ContactserviceService,private router:Router,private spinner: NgxSpinnerService,private fb:FormBuilder) {
    get.getAccount().then(address=>this.address=address);
    get.borrower_view_fi();
    this.createForm();
  }
  createForm() 
  {
   this.angForm = this.fb.group({
    add: ['', Validators.required ],
    //fi:['', Validators.required ],
    num:['', Validators.required ]
   });
 }
  choosefi(bank_address) 
  {
    this._address=bank_address;
  }

  req_loan(a,b,c)
  {
    this.spinner.show();
   console.log(a,b,c);
    
    this.get.request_loan(a,b,c).then((res)=>{

      console.log(res)

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
          this.router.navigate(['Monthlypayment']);
        })

    });
  }
   
 
  
  MonthlyPayment(loanid:any,bankaddress:string,balanceins:any)
  {
    this.get.MonthlyPayment(loanid,bankaddress,balanceins).then((res)=>{
            console.log(res);
            alert
            
        });
    alert(loanid)
        console.log(loanid,bankaddress,balanceins);
        alert
      }
  ngOnInit() {
    this.get.getAccount().then(address => this.address = address)
    this.get.getUserBalance().then(balance => this.balance = balance)
    //full fi details//
    
    this.get.borrower_view_fi().then(obj=>{
      obj.forEach(item => {
        //  console.log(item);
          this.get.bank_reg(item).then(result=> {
          //  console.log("work");   
          let a=result[2]/100;  
          this.alldetails.push({"bank_address":result[9],"bank_name":result[10],"deposit_amount":result[0],"loan_interest":a,"duration":result[1]});
      })
      })
      
    })
  }

}
