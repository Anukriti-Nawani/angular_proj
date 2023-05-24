// import { Component, OnInit } from '@angular/core';
// import { AboutService, Employee } from 'src/services/about.service';

// @Component({
//   selector: 'app-about',
//   templateUrl: './about.component.html',
//   styleUrls: ['./about.component.css']
// })
// export class AboutComponent implements OnInit {
//   employees: Employee[] = [];

//   constructor(private aboutService: AboutService) {}

//   ngOnInit(): void {
//     this.loadEmployees();
//   }

//   loadEmployees(): void {
//     this.aboutService.getEmployees().subscribe(
//       (employees: Employee[]) => {
//         this.employees = employees;
//       },
//       (error: any) => {
//         console.error('Error:', error);
//       }
//     );
//   }
// }
// export {AboutService, Employee };

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

export interface Hotel {
  id: number;
  image: string;
  price: number;
  place: string;
}

export interface Employee {
  name: string;
  position: string;
  bio: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.dataUrl).pipe(
      map((data: any) => data.hotels)
    );
  }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.dataUrl).pipe(
      map((data: any) => data.employees)
    );
  }
}
