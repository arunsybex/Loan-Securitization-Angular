import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot ,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactserviceService } from '../service/contactservice.service';

@Injectable({
  providedIn: 'root'
})
export class FinancialGuard implements CanActivate {
  constructor(private cs:ContactserviceService,private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return this.cs.fi_check_registeration().then(registered => {
        console.log(registered);
        
        if (!registered){
          this.router.navigate(["fireg"]);
          return false;
        }
        else
        {
          return true;
        }
      })
  }
}
