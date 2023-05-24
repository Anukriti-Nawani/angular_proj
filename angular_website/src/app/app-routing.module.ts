import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from 'src/components/signup/signup.component';
import { HomeComponent } from 'src/components/home/home.component';
import { NavbarComponent } from 'src/components/navbar/navbar.component';
import { FooterComponent } from 'src/components/footer/footer.component';
import { AboutComponent } from 'src/components/about/about.component';
import { ContentComponent } from 'src/components/content/content.component';
import { UpdateProfileComponent } from 'src/components/updateprofile/updateprofile.component';
import { ActiveMembersComponent } from 'src/components/activemembers/activemembers.component';
import { ServicesComponent } from 'src/components/services/services.component';
import { PlanYourTravelComponent } from 'src/components/plan-your-travel/plan-your-travel.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'content', component: ContentComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'aboutus', component: AboutComponent},
  { path: 'updateprofile', component: UpdateProfileComponent},
  { path: 'activemembers', component: ActiveMembersComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'planyourtravel', component: PlanYourTravelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, ReactiveFormsModule],
})
export class AppRoutingModule {}
