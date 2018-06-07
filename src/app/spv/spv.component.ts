import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';

@Component({
  selector: 'app-spv',
  templateUrl: './spv.component.html',
  styleUrls: ['./spv.component.css']
})
export class SPVComponent implements OnInit 
{

  public balance: number;
  public address: string;
  public spv_ether_value:number;
  public loanid=[];
  details = [];
  detail = [];
  loandetails=[];
  purdetails=[];
  packdetails=[];
  constructor(public spv:ContactserviceService)
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
          this.purdetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
        }
        })
      }
        });
  }
  createPack(a)
  {
    let value=a.split(",");
    console.log(value);
    for(var i=0;i <value.length;i++)
    {
      console.log(value.length);
      this.loanid.push(parseInt(value[i]))
    }
      this.spv.createPack(this.loanid).then((res)=>{
     
     });
    
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
            this.spv.investortable().then(obj1=>{
          this.details.push({"spvaddress":this.address,"totalamount":result[11],"totalloan":obj1[1],"availablepack":result[13]});
            })
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
              if(this.address==result1[0])
              {
                this.loandetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
              }
            })
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
                  
                    this.purdetails.push({"loanid":result[0],"tokenaddress":result[8],"tokenvalue":result[1],"bankaddress":result[2],"totalamount":result[4]});
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
