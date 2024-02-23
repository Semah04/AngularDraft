import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { Login1Component } from './login1/login1.component';
import { NavigationBarComponent } from './navigationBar/navigationBar.component';
import { OtherLoginComponent } from './otherLogin/otherLogin.component';
import { Login2Component } from './login2/login2.component';

@NgModule({
  declarations: [					
    AppComponent,
      Login1Component,
      NavigationBarComponent,
      OtherLoginComponent,
      Login2Component
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IonicModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
