import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-plan-your-travel',
  templateUrl: './plan-your-travel.component.html',
  styleUrls: ['./plan-your-travel.component.css']
})
export class PlanYourTravelComponent implements OnInit {
  @ViewChild('tripDetailsDialogTemplate') tripDetailsDialogTemplate!: TemplateRef<any>;

  formData: any = {
    name: '',
    email: '',
    departureDate: {
      start: null,
      end: null
    }
  };
  isTripConfirmed: boolean = false;
  minDate: Date = new Date();
  maxDate: Date = new Date(); // Set your desired max date here
  packages: any[] = [];
  selectedPackage: any = null;
  duration: number = 0;
  totalAmount: number = 0;

  constructor(private http: HttpClient, private dialog: MatDialog, private snackBar: MatSnackBar) {}

  ngOnInit() {
    // Retrieve data from localStorage
    const storedData = localStorage.getItem('credentials');
    if (storedData) {
      const { name, email } = JSON.parse(storedData);
      this.formData.name = name;
      this.formData.email = email;
    }

    // Set the max date to desired value (e.g., 1 year from the current date)
    this.maxDate.setFullYear(this.maxDate.getFullYear() + 1);

    // Fetch packages data from data.json
    this.http.get<any>('./assets/data.json').subscribe((data: any) => {
      console.log(data); // Log the entire response data
      if (data && data.packages && Array.isArray(data.packages)) {
        this.packages = data.packages;
        console.log(this.packages); // Log the packages data
      }
    });
  }

  submitForm() {
    this.snackBar.open('Thanks for planning your travel', 'Close', {
      duration: 3000, // Specify the duration in milliseconds (e.g., 3000ms = 3 seconds)
    });
    
    console.log('Start Date:', this.formData.departureDate.start);
    console.log('End Date:', this.formData.departureDate.end);

    // Ensure startDate and endDate are of type Date
    const startDate = new Date(this.formData.departureDate.start);
    const endDate = new Date(this.formData.departureDate.end);

    // Calculate the total amount based on the start and end date
    this.duration = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)); // Calculate duration in days

    this.selectedPackage = this.packages.find(packageall => packageall.place.toLowerCase() === this.formData.package.toLowerCase());

    if (this.selectedPackage) {
      this.totalAmount = this.selectedPackage.total_amount * this.duration;
      console.log('Package:', this.formData.package);
      console.log('Duration:', this.duration);
      console.log('Total Amount:', this.totalAmount);
      console.log('Package Details:', this.selectedPackage);
    } else {
      console.log('Selected package not found.');
    }

    this.isTripConfirmed = true; // Set the flag to true
  }

  openTripDetailsDialog(): void {
    const dialogRef = this.dialog.open(this.tripDetailsDialogTemplate);

    dialogRef.afterClosed().subscribe(result => {
      // Handle any actions after the dialog is closed
    });
  }

  getCurrentDate(): Date {
    return new Date();
  }
}
