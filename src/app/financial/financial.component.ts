import { Component, OnInit } from '@angular/core';
import {ContactserviceService } from '../service/contactservice.service';
declare let window: any;
import * as Web3 from 'web3';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
@Component({
  selector: 'app-financial',
  templateUrl: './financial.component.html',
  styleUrls: ['./financial.component.css']
})
export class FinancialComponent implements OnInit {

  public balance: number;
  public address: string;
  public bank_name:string;
  public loan_interest:string;
  public deposit_amount:number;
  public duration:number;
  details = [];
  loandetails=[];


  public  _web3: any;
  public id1: any;
  public id2;
  public account;
  constructor(public reg:ContactserviceService,private router:Router)
   {
    reg.getAccount().then(address=>this.address=address);
   }
  



  ngOnInit() {
    this.reg.getAccount().then(address => this.address = address)
    this.reg.getUserBalance().then(balance => this.balance = balance)
    console.log(this.address);


    let meta = this;
            
            meta.reg.getUserBalance().then(balance => meta.balance = balance);
            meta.reg.getAccount().then(acc => {
                this.account = acc;
                meta.id1 = setInterval(function() {
                 if (typeof window.web3 !== 'undefined') {
                     meta._web3 = new Web3(window.web3.currentProvider);
                     if (meta._web3.eth.accounts[0] !== meta.account) {
                         meta.account = meta._web3.eth.accounts[0];
                         if (meta._web3.eth.accounts[0] === undefined) {
                             meta.router.navigate(['metamask']);
                             clearInterval(this.interval);
                         } else {
                          window.location.reload(true);
                          // alert('Address Change Detected Please Refresh Page');
                         }
                     }
                 } else {
                     meta.router.navigate(['metamask']);
                 }
                }, 200);
             });
       
             meta.id2 = setInterval(function() {
              meta.reg.getUserBalance().then(balance => this.balance = balance);
              //meta.alltablework();
          }, 20000);
        



        
              this.reg.bank_reg1().then(obj=>{
                console.log(this.address);
                console.log("works");
                console.log(obj);
            let a=obj[2]/100
                  this.details.push({"bank_address":this.address,"bank_name":obj[10],"deposit_amount":obj[0],"loan_interest":a,"duration":obj[1]});
                
              })
            
              this.reg.borrower_view_fi().then(obj=>{
                    this.reg.bank_reg1().then(val=> {
                      for(var j=val[3].toNumber();j<val[4].toNumber();j++)
                      {
                        this.reg.loandetails(val[9],j).then(result=> {
                        var e=result[4]/val[1];
                        var f=result[6]-result[5];
                        var c=e*f
                        if(result[0]>0)
                        {
                          this.loandetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"borroweraddress":result[3],"totalamount":result[4],"totalpaidins":result[5],"totalmonth":result[6],"balanceloan":c,"balanceins":e});
                        }
                        })
                      }
                })
                
              })
          
        }


       
            
        ngOnDestroy() 
        {
          if (this.id1)
          {
            clearInterval(this.id1);
          }
          if (this.id2) 
          {
              clearInterval(this.id2);
          }
        }
}