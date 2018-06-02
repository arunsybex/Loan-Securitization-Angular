import { Component, OnInit } from '@angular/core';
import {ContactserviceService } from '../service/contactservice.service';
@Component({
  selector: 'app-inverstor',
  templateUrl: './inverstor.component.html',
  styleUrls: ['./inverstor.component.css']
})
export class InverstorComponent implements OnInit {

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

  constructor(private inv:ContactserviceService )
  {
    inv.getUserBalance().then(balance => this.balance = balance);
    inv.getAccount().then(address=>this.address=address);
  }

  // inv_reg(){
  //   alert("hai");
  //  console.log(this.inves_ether);
  //  this.inv.Investorether(this.inves_ether).then((res)=>{
  //     alert("second")
  //     console.log(res)
  //  });
  // }

  pur_pack()
  {
    alert("hai");
   console.log(this.spvaddress);
   this.inv.purchasepack(this.packageid,this.spvaddress).then((res)=>{
      alert("second")
      console.log(res)

    });
  }
  
  choosespv(spvaddress:string)
  {
    this.inv.spv_reg2(spvaddress).then((res)=>{
      for(var i=res[5].toNumber();i<=res[6].toNumber();i++){
        this.inv.loandetails(res[7],i).then((result)=>{
          if(result[0]>0){
            let a=result[1]/1000000000000000000;
          this.packdetails.push({"packid":result[0],"tokenvalue":a});
          }
      })
    }
    });
    
  }
  ngOnInit() {
    this.inv.getAccount().then(address => this.address = address)
    this.inv.getUserBalance().then(balance => this.balance = balance)
    console.log(this.address);
              this.inv.investordetails().then(obj=>{
                this.inv.investortable().then(obj1=>{
            if(obj[12]>0)
                  this.details.push({"investor_address":obj[8],"Totalamt":obj[12],"pack":obj1[0]});
                })
              })
              this.inv.spv_details().then(obj=>{
                obj.forEach(item => {
                    this.inv.spv_reg2(item).then(result=> {   
                    
                    this.spvdetails.push({"spvaddress":result[7],"totalamount":result[11],"totalloan":result[1],"availablepack":result[13]});
                     
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
