import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() loggedInUser: string = '';

  constructor() { }

  ngOnInit() {
    // Retrieve the loggedInUser from localStorage or any other source
    const credentials = localStorage.getItem('credentials');
    if (credentials) {
      this.loggedInUser = JSON.parse(credentials).name;
    }
  }
}
