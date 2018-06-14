import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import * as Web3 from 'web3';
import {FinancialGuard}from '../Authguard/financial.guard';
declare let require: any;
declare let window: any;
let tokenAbi = require('../Contractabi.json');
@Injectable({
  providedIn: 'root'
})
export class ContactserviceService 
{
  public _account: string = null;
  public account;
  private _web3: any;

  private _tokenContract: any;
  private _tokenContractAddress: string = "0xcf576583222736b60d1de28d333c37f0ada3a7d9"

constructor(private router:Router) 
{
    if (typeof window.web3 !== 'undefined') 
    {
      // Use Mist/MetaMask's provider
      this._web3 = new Web3(window.web3.currentProvider);  
    } 
    else 
    {
      console.warn("Please use a dapp browser like mist or MetaMask plugin for chrome");
    }
    this._web3.version.getNetwork((err,netId)=>
			{
				switch(netId)
				{
					case "1":
						console.log('This is mainnet');
						break;
					case "2":
						console.log('This is deprecated Morden test network');
						break;
					case "3":
						console.log('This is ropsten test network');
						break;
					case "4":
						console.log('This is the Rinkeby test network');
					case "42":
						console.log('This is the kovan test network');
						break;
					default:
						console.log('This is an unknown network.');
				}	
			});
    this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
}
//account address working//
public async getAccount(): Promise<string> 
{
    if (this._account == null) {
      this._account = await new Promise((resolve, reject) => {
        this._web3.eth.getAccounts((err, accs) => {
          if (err != null) 
          {
            alert('There was an error fetching your accounts.');
            return;
          }
  
          if (accs.length === 0) 
          {
            alert('Couldn\'t get any accounts! Make sure your Ethereum client is configured correctly.');
            return;
          }
          resolve(accs[0]);
        })
      }) as string;
  
      this._web3.eth.defaultAccount = this._account;
    }
  
    return Promise.resolve(this._account);
  }
//account balance working//
    public async getUserBalance(): Promise<number> 
    {
      let account = await this.getAccount();  
      return await new Promise((resolve, reject) => {
        this._web3.eth.getBalance(account, (err, balance) => {
          balance = this._web3.fromWei(balance, "ether") + ""
          resolve(balance);
        })
        
      }) as Promise<number>;
    }

      public async fi_check_registeration(): Promise<boolean> {                                      
        let account:string = '';
        let meta = this;
        await meta.getAccount().then(address => this.account = address); 
     return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        meta._tokenContract.spv_details(this.account,function (error,result) {
          if(error){    
            reject(error); 
          }    
          else
          {
           
            if(result[9] === meta.account)
            {
              //console.log(result[9] === meta.account );
            }
          }  
          resolve(result[9] === meta.account);
        });
      })as Promise<boolean>;
      }

      public async spv_check_registeration(): Promise<boolean> {                                       //checking admin
        let account:string = '';
        let meta = this;
        await meta.getAccount().then(address => this.account = address); 
     return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        meta._tokenContract.spv_details(this.account,function (error,result) {
          if(error){    
            reject(error); 
          }    
          else
          {
            
            if(result[7] === meta.account)
            {
              //console.log(result[7] === meta.account );
            }
          }  
          resolve(result[7] === meta.account);
        });
      })as Promise<boolean>;
      }
   

      public async investor_check_registeration(): Promise<boolean> { //authGurad checking
        let account:string = '';
        let meta = this;
        await meta.getAccount().then(address => this.account = address); 
     return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        meta._tokenContract.spv_details(this.account,function (error,result) {
          if(error){    
            reject(error); 
          }    
          else
          {
            
            if(result[8] === meta.account)
            {
              //console.log(result[8] === meta.account );
            }
          }  
          resolve(result[8] === meta.account);
        });
      })as Promise<boolean>;
      }


    //fi loan details//
    public async bank_reg1():Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.spv_details(account,function (error,result) {
          if(error){    
            reject(error); 
          }  
        result[10] = _web3.toAscii(result[10])
          result[0] =_web3.fromWei(result[0],"ether")
         
          resolve(result);
        });
      })as Promise<object>;
    }

    //borrower loan details//
    public async bank_reg(add):Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.spv_details(add,function (error,result) {
          if(error){    
            reject(error); 
          } 
        result[10] = _web3.toAscii(result[10])
          result[0] = _web3.fromWei(result[0],"ether")
          resolve(result);
        });
      })as Promise<object>;
    }


    public async loandetails(add,id):Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3; 
        this._tokenContract.ln_get(add,id,function (error,result) {
         result[4] = meta._web3.fromWei(result[4],"ether")
          resolve(result);
        });
      })as Promise<object>;
    } 


    public async borrower_view_fi(): Promise<string[]> {
      let meta = this;
    await this.getAccount().then(address => this._account = address);
     return new Promise((resolve,reject) => {
      this._tokenContract.show_registers(function (err, result1) {
          let gen_id=0;
     resolve(result1);
    })
     }) as Promise<string[]>;
    
    }


    //register bank//
   public async register_bank1(a,b,c,d): Promise<any> {
    let account = await this.getAccount();
    let bb=b*100;
    
    
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.register.sendTransaction(a,bb,d,{from:account,value:this._web3.toWei(c,"ether"),gas: 600000},function (err, result) {
        if(err != null) 
        {
          //reject(err);
          
          resolve(0);
        }
        
        
       resolve(result);
      });
    }) as Promise<any>;
  }


  //request loan//
  public async request_loan(d,e,f): Promise<any> {
    let account = await this.getAccount();
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.req_loan(d,e,f,{from:account,gas: 600000},function (err, result) {
        if(err != null) 
        {
          //reject(err);
          resolve(0);
        }
       resolve((result));
      });
    }) as Promise<any>;
  }


  //monthly payment//
  public async  MonthlyPayment(d,e,f): Promise<any> {
    let account = await this.getAccount();
  
    return new Promise((resolve, reject) => {
      let _web3 = this._web3;
      this._tokenContract.settlement(d,e,{from:account,value:this._web3.toWei(f,"ether"),gas: 600000},function (err, result) {
        if(err != null) 
        {
          //reject(err);
          resolve(0);
        }
  
       resolve((result));
      });
    }) as Promise<any>;
  }


  //spv reg//
  public async spv_reg(a): Promise<number> 
    {
      let account = await this.getAccount();
      return new Promise((resolve,reject) => {
        this._tokenContract.SPV_ether( {from:account,value:this._web3.toWei(a,"ether"),gas: 600000},function (err, result) 
        {
          if(err != null) 
          {
            //reject(err);
            resolve(0)
          }
          resolve(result);
        });
      }) as Promise<number>;
     }


    //purchase loan//
    public async pur_loan(a,b): Promise<number> 
    {
      let account = await this.getAccount();
      return new Promise((resolve,reject) => {
        this._tokenContract.purchase_loan( a,b,{from:account,gas: 600000},function (err, result) 
        {
          if(err != null) 
          {
            //reject(err);
            resolve(0);
          }
          resolve(result);
        });
      }) as Promise<number>;
     }


    //create pack//
    public async createPack(a): Promise<number[]> 
    {
      let account = await this.getAccount();

      return new Promise((resolve,reject) => {
        this._tokenContract.createPacking(a,{from:account,gas: 600000},function (err, result) 
        {
          if(err != null) 
          {
            //reject(err);
           
            resolve([0]);
          
          }
          resolve(result);
        });
      }) as Promise<number[]>;
     }


     public async spv_reg1():Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.spv_details(account,function (error,result) { 
          if(error){    
            reject(error);
          }
        result[10] = _web3.toAscii(result[10])
          result[11] = meta._web3.fromWei(result[11],"ether")
          resolve(result);
        });
      })as Promise<object>;
    }
    
    public async spv_view(): Promise<object[]> {
      let meta = this;
    await this.getAccount().then(address => this._account = address);
     return new Promise((resolve,reject) => {
      this._tokenContract.spv_registers(function (err, result1) {
          let gen_id=0;
     resolve(result1);
    })
     }) as Promise<object[]>;
    }
    
    public async spv_loanid(add):Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.loanadd(add,function (error,result) {
          resolve(result);
        });
      })as Promise<object>;
    }
    //investor ether//

    public async Investorether(a):Promise<any>{
          let meta=this;
          let account = await this.getAccount();
          return new Promise((resolve, reject) => {
            let _web3 = this._web3;
           
            
            this._tokenContract.Investor_ether( {from:account,value:this._web3.toWei(a,"ether"),gas: 600000},function (error, result) {
              
              if(error)
              {    
                //reject(error);
                resolve(0);
              } 
          
         
              resolve(result);
            });
          })as Promise<any>;
        }
    
    
//investor details//
    
    
    public async investordetails():Promise<object>{
          let meta=this;
          let account = await this.getAccount();
          return new Promise((resolve, reject) => {
            let _web3 = this._web3;
          
            
            this._tokenContract.spv_details.call(account,function (error,result) {
           
              
              if(error){    
                reject(error); 
              } 
          
              
           // result[2] = _web3.toAscii(result[2])
              result[12] = meta._web3.fromWei(result[12],"ether")
              resolve(result);
            });
          })as Promise<object>;
        }
    
        public async investortable():Promise<object>{
          let meta=this;
          let account = await this.getAccount();
          return new Promise((resolve, reject) => {
            let _web3 = this._web3;
          
            
            this._tokenContract.inv_details.call(account,function (error,result) {
           
              
              if(error){    
                reject(error); 
              } 
              
          
              
           // result[2] = _web3.toAscii(result[2])
              //result[0] = meta._web3.fromWei(result[0],"ether")
              resolve(result);
            });
          })as Promise<object>;
        }
    
        public async investortable1(add):Promise<any>{
          let meta=this;
          let account = await this.getAccount();
          return new Promise((resolve, reject) => {
            let _web3 = this._web3;
          
            
            this._tokenContract.inv_details.call(add,function (error,result) {
           
              
              if(error){    
                reject(error); 
              } 
              
          
              
           // result[2] = _web3.toAscii(result[2])
              //result[0] = meta._web3.fromWei(result[0],"ether")
              resolve(result);
            });
          })as Promise<any>;
        }
    
    
    //purchase pack//
    public async purchasepack(a,b):Promise<any>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.purchase_pack(a,b, {from:account,gas: 600000},function (error, result) {
         
          if(error!= null) 
          {
            //reject(err);
            resolve(0);
          }
          resolve(result);
     
          resolve(result);
        });
      })as Promise<any>;  
    }

    public async spv_details(): Promise<string[]> {
      let meta = this;
    await this.getAccount().then(address => this._account = address);
     return new Promise((resolve,reject) => {
      this._tokenContract.spv_registers(function (err, result1) {
     resolve(result1);
    })
     }) as Promise<string[]>;
    
    }
    //spv details//
    public async spv_reg2(add):Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3;
        this._tokenContract.spv_details(add,function (error,result) { 
          if(error){    
            reject(error);
          }
        result[10] = _web3.toAscii(result[10])
          result[11] = meta._web3.fromWei(result[11],"ether")
          resolve(result);
        });
      })as Promise<object>;
    }
    public async loandetails1(id):Promise<object>{
      let meta=this;
      let account = await this.getAccount();
      return new Promise((resolve, reject) => {
        let _web3 = this._web3; 
        this._tokenContract.ln_get(account,id,function (error,result) {
         result[4] = meta._web3.fromWei(result[4],"ether")
          resolve(result);
        });
      })as Promise<object>;
    } 


    public async hash(a): Promise<string> 
    {
      let meta = this;
      return new Promise((resolve, reject) => {
    
        var accountInterval = setInterval(function()
        {
          meta._web3.eth.getTransactionReceipt(a,function(err,result){
            if(err != null) {
            reject(err);
            }
    
            if(result !== null)
            {
              clearInterval(accountInterval);
            
    
              if(result.status == 0x1)
              {
                // console.log("obj "+result.status)
                resolve("Success");
                meta.router.navigate(['']);
                // window.location.reload();
              }
              else
              {
                // console.log("obj "+result.status)
                resolve("Failed");
                meta.router.navigate(['']);
                // window.location.reload();
              }
            }
          })
        },100)
      }) as Promise<string>;
    }
    
}
  
  
