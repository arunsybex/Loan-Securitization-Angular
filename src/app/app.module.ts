import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FinancialComponent } from './financial/financial.component';
import { BorrowerComponent } from './borrower/borrower.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinancialComponent,
    BorrowerComponent,
    SPVComponent,
    InverstorComponent,
    MetamaskErrorComponent,
    HeaderComponent,
    FinancialregComponent,
    SpvregComponent,
    InvestorregComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [ContactserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
