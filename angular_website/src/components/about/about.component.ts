import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContentService, Employee } from 'src/services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  // Contact part
  public name: string = '';
  public email: string = '';
  public phonenumber: string = '';
  public message: string = '';

  employees: Employee[] = [];

  constructor(private aboutService: ContentService, private snackbar: MatSnackBar) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.aboutService.getEmployees().subscribe(
      (employees: Employee[]) => {
        this.employees = employees;
      },
      (error: any) => {
        console.error('Error:', error);
      }
    );
  }

  onSubmit(): void {
    // Handle form submission here
    console.log('Form submitted:', this.name, this.email, this.phonenumber, this.message);
    this.snackbar.open('Form submitted. Thanks!', 'Close', {
      duration: 3000,
    });
    this.clearForm();
  }

  clearForm(): void {
    this.name = '';
    this.email = '';
    this.phonenumber = '';
    this.message = '';
  }
}
