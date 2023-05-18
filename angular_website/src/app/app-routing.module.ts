import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/components/signup/signup.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { FooterComponent } from 'src/components/footer/footer.component';


const routes: Routes = [
  {path:"", component:HomeComponent},

  {path:"signup", component:SignUpComponent},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,ReactiveFormsModule]
})
export class AppRoutingModule { }
