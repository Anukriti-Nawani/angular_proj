import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Employee {
  name: string;
  position: string;
}

interface Service {
  title: string;
  shortDescription: string;
  fullDescription: string;
}

interface Data {
  employees: Employee[];
  services: Service[];
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  services: Service[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Data>('./assets/data.json').subscribe(
      (data: Data) => {
        if (Array.isArray(data.services)) {
          this.services = data.services;
          console.log(this.services); // Log the services data to the console
        } else {
          console.error('Invalid data format. Expected an array for services.');
        }
      },
      (error) => {
        console.error(error); // Log any errors to the console
      }
    );
  }
}
