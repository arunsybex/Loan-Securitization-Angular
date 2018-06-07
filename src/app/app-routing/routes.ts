import { Routes } from '@angular/router';
import { CanActivate,CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { FinancialComponent } from '../financial/financial.component';
//import { BorrowerComponent } from '../borrower/borrower.component';
import { SPVComponent } from '../spv/spv.component';
import { InverstorComponent } from '../inverstor/inverstor.component';
import { TotalfiComponent } from '../totalfi/totalfi.component';
import { MonthlypaymentComponent } from '../monthlypayment/monthlypayment.component';
import { PurchaseloanComponent } from '../purchaseloan/purchaseloan.component';
import { CreatepackComponent } from '../createpack/createpack.component';
import { SpvpackdetailComponent } from '../spvpackdetail/spvpackdetail.component';
import { InvestorpackdetailComponent } from '../investorpackdetail/investorpackdetail.component';
import { PurchasepackComponent } from '../purchasepack/purchasepack.component';



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
   
    // { 
    //     path:'Borrower',
    //     component:BorrowerComponent 
    // },
    { 
        path:'totalfi',
        component:TotalfiComponent 
    },
    { 
        path:'Monthlypayment',
        component:MonthlypaymentComponent 
    },
    // { 
    //     path:'Borrower',
    //     component:BorrowerComponent 
    // },
    {   path:'spvreg',
        component:SpvregComponent,
    },
    
    { 
        path: 'SPV', 
        component: SPVComponent ,
        canActivate : [SpvGuard]
    },

    {  
        path:'purchaseloan',
        component:PurchaseloanComponent,   
        canActivate : [SpvGuard] 
    },

    {  
         path:'createpack',
         component:CreatepackComponent,
         canActivate : [SpvGuard]
     },

    {  
         path:'spvpackdetail',
         component:SpvpackdetailComponent,
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
        path: 'Purchasepack',
        component:PurchasepackComponent,
        canActivate:[InvestorGuard]
    },
    { 
        path: 'Investorpackdetail',
        component:InvestorpackdetailComponent,
        canActivate:[InvestorGuard]
    },

    { 
        path: '', 
        redirectTo: 'Fi', 
        pathMatch: 'full' 
    }
    


]