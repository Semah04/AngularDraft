import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { OtherLoginComponent } from './otherLogin/otherLogin.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [

  {path: 'login' , component: Login1Component},
  {path: 'otherLOGIN' , component: OtherLoginComponent},
  {path: 'login2' , component: Login2Component},
 

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
