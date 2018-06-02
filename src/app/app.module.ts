import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinancialComponent } from './financial/financial.component';
//import { BorrowerComponent } from './borrower/borrower.component';
import { SPVComponent } from './spv/spv.component';
import { InverstorComponent } from './inverstor/inverstor.component';
import { MetamaskErrorComponent } from './metamask-error/metamask-error.component';
import { HeaderComponent } from './header/header.component';
import {ContactserviceService}from './service/contactservice.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'; 
import { FormsModule } from '@angular/forms';
import { FinancialregComponent } from './financialreg/financialreg.component';
import { SpvregComponent } from './spvreg/spvreg.component';
import { InvestorregComponent } from './investorreg/investorreg.component';
import { TotalfiComponent } from './totalfi/totalfi.component';
import { MonthlypaymentComponent } from './monthlypayment/monthlypayment.component';
import { PurchasepackComponent } from './purchasepack/purchasepack.component';
import { CreatepackComponent } from './createpack/createpack.component';
import { SpvpackdetailComponent } from './spvpackdetail/spvpackdetail.component';
import { PurchaseloanComponent } from './purchaseloan/purchaseloan.component';
import { InvestorpackdetailComponent } from './investorpackdetail/investorpackdetail.component';

import { NgxSpinnerModule } from 'ngx-spinner';
import { WelcomeComponent } from './welcome/welcome.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialComponent,
    //BorrowerComponent,
    SPVComponent,
    InverstorComponent,
    MetamaskErrorComponent,
    HeaderComponent,
    FinancialregComponent,
    SpvregComponent,
    InvestorregComponent,
    TotalfiComponent,
    MonthlypaymentComponent,
    PurchasepackComponent,
    CreatepackComponent,
    SpvpackdetailComponent,
    PurchaseloanComponent,
    InvestorpackdetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxSpinnerModule
  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
