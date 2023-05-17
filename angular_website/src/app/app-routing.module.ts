import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/components/signup/signup.component';
import { HomeComponent } from 'src/components/home/home.component';


const routes: Routes = [
  {path:"home", component:HomeComponent},

  {path:"signup", component:SignUpComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
