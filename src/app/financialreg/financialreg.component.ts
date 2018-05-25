import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
declare let window: any;
import * as Web3 from 'web3';
@Component({
  selector: 'app-financialreg',
  templateUrl: './financialreg.component.html',
  styleUrls: ['./financialreg.component.css']
})
export class FinancialregComponent implements OnInit {

  public balance: number;
  public address: string;
  public bank_name:string;
  public loan_interest:string;
  public deposit_amount:number;
  public duration:number;

  public  _web3: any;
  public id1: any;
  public id2;
  public account;
  constructor(public reg:ContactserviceService,private router:Router)
  {
   reg.getAccount().then(address=>this.address=address);
  }
  register_bank(){
   
   this.reg.register_bank1(this.bank_name,this.loan_interest,this.deposit_amount,this.duration).then((res)=>{

   });
 }

 ngOnInit() 
 {
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
                  }
              }
          } else {
              meta.router.navigate(['metamask']);
          }
         }, 200);
      });

      meta.id2 = setInterval(function() {
       meta.reg.getUserBalance().then(balance => this.balance = balance);
   }, 20000);
 }
 ngOnDestroy() {
   if (this.id1) {
     clearInterval(this.id1);
   }
   if (this.id2) {
       clearInterval(this.id2);
     }
 }

}
