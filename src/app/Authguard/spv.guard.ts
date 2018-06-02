import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ContactserviceService}from '../service/contactservice.service';
@Injectable({
  providedIn: 'root'
})
export class SpvGuard implements CanActivate {
  constructor(private cs:ContactserviceService,private router:Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    //return true;
    return this.cs.spv_check_registeration().then(registered => {
      console.log(registered);
      
      if (!registered){
        this.router.navigate(["spvreg"]);
        return false;
      }
      else
      {
        return true;
      }
    })
  }
}
