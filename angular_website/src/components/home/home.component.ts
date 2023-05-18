import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginForm: FormGroup;
  loggedInUser: string = ''; 

  constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar) {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required ]],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      const credentials = this.loginForm.value;

      // Store credentials in localStorage
      localStorage.setItem('credentials', JSON.stringify(credentials));

      this.loggedInUser = credentials.name;


      this._snackBar.open('Signup successful!', 'Close', { duration: 3000 });

      
    } else {
      this._snackBar.open(
        'Invalid form. Please check your credentials.',
        'Close',
        { duration: 3000 }
      );
    }

      // Reset the form
      this.loginForm.reset();
    }
  }

