import { Component } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-structural',
  templateUrl: './structural.component.html',
  styleUrls: ['./structural.component.css'],
})
export class StructuralComponent {
  f1: boolean = true;
  f2: boolean = false;
  f3: boolean = false;
  b1: string = 'show';
  flag:boolean = false;
  names: Array<string> = ['abc', 'def', 'ghi'];
  employees: Array<Employee> = [];
  ngOnInit(): void {
    let employee1 = new Employee(1, 'anukriti', 25);
    let employee2 = new Employee(2, 'saurabh', 25);
    this.employees.push(employee1);
    this.employees.push(employee2);
  }
  fun() {
    this.f3 = true;
  }
  change():void {
    if (this.flag) {
      this.flag = false
      this.b1= 'show'
    }else {
      this.b1 = 'hide';
      this.flag = true;
    }
  }
}
