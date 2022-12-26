
import { AuthenticationResult } from '@azure/msal-browser';
import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { MsEmailService } from './ms-email.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'My Microsoft Login- Example';
  public checker=null;
  public resp=null;

  constructor(private authService: MsalService,private msEmailService:MsEmailService,private http:HttpClient) {

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
  
  callProfile(){
    this.http.get('https://graph.microsoft.com/v1.0/me').subscribe(res=>{console.log('reasdsadasp',res)
    this.resp=res
    return res
    })
  }

  getCategories(){
    this.msEmailService.getCategories().then(resp=>{
      console.log(resp,'resp')
    }).catch(err=>{console.log(err,'err')})
  }

  async set(){
    await this.msEmailService.setCategoriesByEmails()
  }
  async reset(){
    await this.msEmailService.resetCategoriesByEmails()
  }
}
