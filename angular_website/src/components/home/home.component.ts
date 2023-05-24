  import { Component, OnInit } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MatSnackBar,MatSnackBarConfig  } from '@angular/material/snack-bar';
  import { Router } from '@angular/router';


  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
  })
  export class HomeComponent implements OnInit {
    loginForm: FormGroup;
    loggedInUser: string = ''; 
    // Inside your component class
  images: string[] = [
    'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg',
    'https://img.etimg.com/thumb/msid-96836017,width-1015,height-761,imgsize-120772,resizemode-8/prime/corporate-governance/from-marriotts-to-hyatts-to-le-mridiens-premium-hotel-assets-are-stuck-at-bankruptcy-courts.jpg',
    'https://assets-global.website-files.com/5c6d6c45eaa55f57c6367749/624b471bdf247131f10ea14f_61d31b8dbff9b500cbd7ed32_types_of_rooms_in_a_5-star_hotel_2_optimized_optimized.jpeg'
  ];


    constructor(private formBuilder: FormBuilder, private _snackBar: MatSnackBar, private router: Router) {
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

        const snackbarConfig = new MatSnackBarConfig();
        snackbarConfig.duration = 3000;
        snackbarConfig.horizontalPosition = 'end';
        snackbarConfig.verticalPosition = 'top';
  
        this._snackBar.open('Login successful!', 'Close', snackbarConfig);
        this.router.navigate(['/content']);

        
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

