import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
@Component({
  selector: 'app-spvreg',
  templateUrl: './spvreg.component.html',
  styleUrls: ['./spvreg.component.css']
})
export class SpvregComponent implements OnInit {


  public balance: number;
  public address: string;
  public spv_ether_value:number;
  constructor(public spv:ContactserviceService)
  {
     spv.getAccount().then(address=>this.address=address);
  }
  spv_reg(){
 
    this.spv.spv_reg(this.spv_ether_value).then((res)=>{
    
    });
  }

  ngOnInit() {
  }

}
