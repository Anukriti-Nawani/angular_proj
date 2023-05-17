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
import { MatSnackBar } from '@angular/material/snack-bar';

import { HomeComponent } from '../components/home/home.component'; // Import MatNativeDateModule or MatMoment


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    HomeComponent
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
    MatSnackBar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
