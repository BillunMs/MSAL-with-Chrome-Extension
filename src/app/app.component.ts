
import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { MsEmailService } from './ms-email.service';
import { HttpClient } from '@angular/common/http';
import { BillunService } from './billun.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Microsoft Login- Example';
  public checker=null;
  public resp=null;

  public signal='';
  
  constructor(private authService: MsalService,private msEmailService:MsEmailService,private http:HttpClient,private billun:BillunService) {

  }

  ngOnInit(): void {
    this.authService.instance.handleRedirectPromise().then( res => {
      if (res != null && res.account != null) {
        this.authService.instance.setActiveAccount(res.account)
      }
    })
  }

  isLoggedIn(): boolean {
    return this.authService.instance.getActiveAccount() != null
  }

  async login() {
    this.authService.loginPopup()
      .subscribe((response: AuthenticationResult) => {
        this.authService.instance.setActiveAccount(response.account);        
      });
  }
  
  logout() {
    this.authService.logout()
  }


  async set(){
    await this.msEmailService.setCategoriesByEmails()
  }
  async reset(){
    await this.msEmailService.resetCategoriesByEmails()
  }

  async sendSignal(){
    if(this.signal===''){
      alert('Donner le nom de site ou email')
      return
    }
    await this.billun.send(this.signal).then(()=>{this.signal=''})
  }
}
