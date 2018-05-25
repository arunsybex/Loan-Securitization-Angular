import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
@Component({
  selector: 'app-investorreg',
  templateUrl: './investorreg.component.html',
  styleUrls: ['./investorreg.component.css']
})
export class InvestorregComponent implements OnInit {

  public balance;
  public address;
  public inves_ether;
  constructor(private inv:ContactserviceService )
  {
    inv.getUserBalance().then(balance => this.balance = balance);
    inv.getAccount().then(address=>this.address=address);
  }

  inv_reg(){
   console.log(this.inves_ether);
   this.inv.Investorether(this.inves_ether).then((res)=>{
      console.log(res)
   });
  }

  ngOnInit() {
  }

}
