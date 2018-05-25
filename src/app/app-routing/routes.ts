import { Routes } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FinancialComponent } from '../financial/financial.component';
import { BorrowerComponent } from '../borrower/borrower.component';
import { SPVComponent } from '../spv/spv.component';
import { InverstorComponent } from '../inverstor/inverstor.component';


import { MetamaskErrorComponent } from '../metamask-error/metamask-error.component';
import { FinancialregComponent } from '../financialreg/financialreg.component';
import{InvestorregComponent}from '../investorreg/investorreg.component';
import {SpvregComponent}from '../spvreg/spvreg.component';
import { FinancialGuard } from '../Authguard/financial.guard';
import {SpvGuard}from '../Authguard/spv.guard';
import { InvestorGuard} from '../Authguard/investor.guard';
import { MetamaskGuard} from '../Authguard/metamask.guard';

export  const  routes: Routes = [


    {
        path:'metamask',
        component:MetamaskErrorComponent,
        //canActivate:[MetamaskGuard]
        
    },

    {   path:'home',
        component:HomeComponent
    },

    {  
        path:'financial',
        component:FinancialComponent,
        canActivate : [FinancialGuard]
    },

    {   path:'fireg',
        component:FinancialregComponent,
    },
   
    { 
        path:'Borrower',
        component:BorrowerComponent
    },

    {   path:'spvreg',
        component:SpvregComponent,
    },
    
    { 
        path: 'SPV', 
        component: SPVComponent ,
        canActivate : [SpvGuard]
    },

    {   path:'inverstorreg',
        component:InvestorregComponent,
    },
    
    { 
        path: 'Investor',
        component:InverstorComponent,
        canActivate:[InvestorGuard]
    },

    { 
        path: '', 
        redirectTo: 'Fi', 
        pathMatch: 'full' 
    }
    


]