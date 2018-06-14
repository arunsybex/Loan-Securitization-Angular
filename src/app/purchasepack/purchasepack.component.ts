// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-purchasepack',
//   templateUrl: './purchasepack.component.html',
//   styleUrls: ['./purchasepack.component.css']
// })
// export class PurchasepackComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, OnInit } from '@angular/core';
import {ContactserviceService } from '../service/contactservice.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-purchasepack',
  templateUrl: './purchasepack.component.html',
  styleUrls: ['./purchasepack.component.css']
})
export class PurchasepackComponent implements OnInit  {

  details = [];
  details1 = [];
  spvdetails=[];
  packdetails=[];
  public balance: number;
  public address: string;
  public inves_ether: number;
  public investor_address: string;
  public Totalamt: number;
  public pack:number;
  public investor_package:number;
  public token_value:number;
  public spvaddress: string;
  public packageid: number;

  constructor(private inv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService)
  {
    inv.getUserBalance().then(balance => this.balance = balance);
    inv.getAccount().then(address=>this.address=address);
  }

 

  pur_pack(packid:number,address:string)
  {
    this.spinner.show();
   this.inv.purchasepack(address,packid).then((res)=>{
    if(res === 0)
    {  
      this.spinner.hide();
    }
    else
    this.inv.hash(res).then((result) =>
    {
      console.log("result : "+ result );  
      this.spinner.hide();
      this.router.navigate(['Investorpackdetail']);
    })

    });
  }
  
  choosespv(spvaddress:string)
  {
    this.inv.spv_reg2(spvaddress).then((res)=>{
      for(var i=res[5].toNumber();i<=res[6].toNumber();i++){
        this.inv.loandetails(res[7],i).then((result)=>{
          this.inv.spv_loanid(result[0]).then(result1=> {  
          if(result[0]>0&&result1[4]!=1){
            let a=result[1]/1000000000000000000;
          this.packdetails.push({"address":res[7],"packid":result[0],"tokenvalue":a});
          }
        })
      })
    }
    this.packdetails = [];
    });
    
  }
  ngOnInit() {
    this.inv.getAccount().then(address => this.address = address)
    this.inv.getUserBalance().then(balance => this.balance = balance)
    console.log(this.address);
              this.inv.investordetails().then(obj=>{
            if(obj[0]>0)
                  this.details.push({"investor_address":obj[8],"Totalamt":obj[0],"pack":obj[2]});
              })
              this.inv.spv_details().then(obj=>{
                obj.forEach(item => {
                    this.inv.spv_reg2(item).then(result=> {   
                      this.inv.investortable1(result[7]).then(obj1=>{
                    this.spvdetails.push({"spvaddress":result[7],"totalamount":result[11],"totalloan":obj1[1],"availablepack":result[13]});
                      })
                  })
                })
                
              })

              this.inv.spv_details().then(obj=>{
                obj.forEach(item => {
                  console.log(item)
                    this.inv.spv_reg2(item).then(res=> {   
                      console.log(res)
                      for(var i=res[5].toNumber();i<=res[6].toNumber();i++){
                        console.log(i)
                        this.inv.loandetails1(i).then((result)=>{
                          console.log(result[0])
                          if(result[0]>0){
                            let a=result[1]/1000000000000000000;
                          this.details1.push({"investor_package":result[0],"token_value":a});
                          }
                          
                      })
                    }                 
                   })
                })
                
              })
  }

}
