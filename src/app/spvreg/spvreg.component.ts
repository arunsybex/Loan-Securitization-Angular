import { Component, OnInit } from '@angular/core';
import {ContactserviceService}from '../service/contactservice.service';
import {  Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
@Component({
  selector: 'app-spvreg',
  templateUrl: './spvreg.component.html',
  styleUrls: ['./spvreg.component.css']
})
export class SpvregComponent implements OnInit {


  public balance: number;
  public address: string;
  public spv_ether_value:number;
  constructor(public spv:ContactserviceService,private router:Router,private spinner: NgxSpinnerService)
  {
     spv.getAccount().then(address=>this.address=address);
  }
  cancel()
{
  this.router.navigate(['home']);
}
  spv_reg()
  {
    //alert("hai");
    this.spinner.show();
    this.spv.spv_reg(this.spv_ether_value).then((res)=>{
     // alert("second")
     console.log("Hash :"+res);
     if(res === 0)
       {  
         this.spinner.hide();
       }
       else
       this.spv.hash(res).then((result) =>
       {
         console.log("result : "+ result );  
         this.spinner.hide();
         this.router.navigate(['SPV']);
       })
    });
  }

  ngOnInit() {
  }

}
