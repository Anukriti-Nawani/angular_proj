import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:"aboutus",component:AboutUsComponent},
  {path:"contactus",component:ContactUsComponent},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,HttpClientModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
