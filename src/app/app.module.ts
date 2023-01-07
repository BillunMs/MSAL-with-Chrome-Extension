import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MsalInterceptor, MsalInterceptorConfiguration, MsalModule, MsalService, MSAL_INSTANCE, MSAL_INTERCEPTOR_CONFIG } from '@azure/msal-angular';
import { InteractionType, IPublicClientApplication, PublicClientApplication } from '@azure/msal-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { RestrictedPageComponent } from './restricted-page/restricted-page.component';

import { FormsModule } from '@angular/forms';
import { RetryInterceptor } from './core/interceptors/retry.interceptor';

export function MSALInstanceFactory(): IPublicClientApplication {
  return new PublicClientApplication({
    auth: {
      clientId: 'e986f0aa-665a-44f8-a0c4-32bf87cd31ec',//d6d9e658-99cb-41c4-83c8-8c20974b47a4 //10fded60-16d8-4c7e-aa87-946e96bb69e1
      //redirectUri: 'chrome-extension://dkgendnilbddeonpljnopkmilbanmbfi/index.html'
      redirectUri:'https://billunms.herokuapp.com/'
      //redirectUri:'http://localhost:4200'
    }
  });
}
export function MSALInterceptorConfigFactory(): MsalInterceptorConfiguration {
  const protectedResourceMap = new Map<string, Array<string>>();
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me', ['user.read', 'mail.read']);
  protectedResourceMap.set('https://graph.microsoft.com/v1.0/me/messages', ['user.read','Mail.ReadBasic','APIConnectors.ReadWrite.All','Mail.ReadWrite','APIConnectors.Read.All','Mail.ReadWrite','Mail.ReadWrite.Shared']);
  protectedResourceMap.set('https://graph.microsoft.com/beta/me/outlook/masterCategories', ['user.read','Mail.ReadWrite','MailboxSettings.ReadWrite','MailboxSettings.Read']);
  protectedResourceMap.set('http://localhost:8080/hello', ['api://d16e1a06-3be2-4ae1-8bd4-718c19cecac3/hello']);

  return {
    interactionType: InteractionType.Redirect,
    protectedResourceMap
  };
}

@NgModule({
  declarations: [
    AppComponent,
    PublicPageComponent,
    RestrictedPageComponent
  ],
  imports: [
    BrowserModule,
    MsalModule,HttpClientModule,FormsModule
  ],
  providers: [
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: MsalInterceptor,
      multi: true
    },
    {
      provide: MSAL_INSTANCE,
      useFactory: MSALInstanceFactory
    }, {
      provide: MSAL_INTERCEPTOR_CONFIG,
      useFactory: MSALInterceptorConfigFactory
    },  
    MsalService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass:RetryInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
