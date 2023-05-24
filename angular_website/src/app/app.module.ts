import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from './app.component';
import { SignUpComponent } from 'src/components/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { HomeComponent } from '../components/home/home.component';
import { NavbarComponent } from '../components/navbar/navbar.component'; 
import { FooterComponent } from '../components/footer/footer.component';
import { ContentComponent } from '../components/content/content.component';
import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { AboutComponent } from '../components/about/about.component';
import { UpdateProfileComponent } from '../components/updateprofile/updateprofile.component';
import { ActiveMembersComponent } from '../components/activemembers/activemembers.component';
import { ServicesComponent } from '../components/services/services.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { PlanYourTravelComponent } from '../components/plan-your-travel/plan-your-travel.component';
import { MatTableModule } from '@angular/material/table';
import { NotificationComponent } from '../components/notification/notification.component';
import { MatBadgeModule } from '@angular/material/badge';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContentComponent,
    AboutComponent,
    UpdateProfileComponent,
    ActiveMembersComponent,
    ServicesComponent,
    PlanYourTravelComponent,
    NotificationComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatButtonModule,
    AppRoutingModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSnackBarModule,
    MatToolbarModule,
    CarouselModule,
    HttpClientModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatBadgeModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
