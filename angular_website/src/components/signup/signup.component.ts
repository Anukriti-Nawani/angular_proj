import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignUpComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {
    this.signupForm = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
    });
  }

  ngOnInit() {}

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);

      this._snackBar.open('Signup successful!', 'Close', { duration: 3000 });

      // Redirect to home page
      this.router.navigate(['/home']);
    } else {
      this._snackBar.open(
        'Invalid form. Please check your credentials.',
        'Close',
        { duration: 3000 }
      );
    }
  }
}
