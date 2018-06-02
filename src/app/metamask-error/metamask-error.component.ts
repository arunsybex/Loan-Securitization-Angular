import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
declare let window: any;
import * as Web3 from 'web3';
import { ContactserviceService } from '../service/contactservice.service';



@Component({
  selector: 'app-metamask-error',
  templateUrl: './metamask-error.component.html',
  styleUrls: ['./metamask-error.component.css']
})
export class MetamaskErrorComponent implements OnInit {

  public  _web3: any;
  public id1: any;

  constructor(private wcs:ContactserviceService, private router: Router) {  }

  ngOnInit() {
    let meta = this;
    this.id1 = setInterval(function() {
      if (typeof window.web3 !== 'undefined') {
        meta._web3 = new Web3(window.web3.currentProvider);
        if (meta._web3.eth.accounts[0] !== undefined) {
          meta.router.navigate(['home']);
        }
      }
    }, 200);
  }

  ngOnDestroy() {
    if (this.id1) {
      clearInterval(this.id1);
    }
  }

}
