import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './updateprofile.component.html',
  styleUrls: ['./updateprofile.component.css']
})
export class UpdateProfileComponent implements OnInit {
  updateProfileForm: FormGroup;
  name: string = '';
  username: string = '';
  email: string = '';
  phoneNo: string = '';
  password: string = '';
  gender: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.updateProfileForm = this.formBuilder.group({
     
      email: ['', [Validators.required, Validators.email]],
          
      gender: ['', Validators.required]
    });
  }

  ngOnInit() {
    const credentials = JSON.parse(localStorage.getItem('credentials') || '{}');
    this.name = credentials.name;
    this.email = credentials.email;
  }

  updateProfile() {
    if (this.updateProfileForm.valid) {
      // Perform the update logic here
      console.log('Profile updated');
      this._snackBar.open('Profile updated!', 'Close', { duration: 3000 });
    } else {
      this._snackBar.open('Invalid form. Please check your input.', 'Close', { duration: 3000 });
    }
  }
}
