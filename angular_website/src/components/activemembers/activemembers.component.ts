  import { Component } from '@angular/core';

  @Component({
    selector: 'app-active-members',
    templateUrl: './activemembers.component.html',
    styleUrls: ['./activemembers.component.css']
  })
  export class ActiveMembersComponent {
    activeMembers: any[]; 
    displayedColumns: string[] = ['name', 'email', 'phoneNumber', 'dateOfBirth', 'gender'];

    constructor() {
      // Retrieve user data from local storage
      const userData = localStorage.getItem('users');
      if (userData) {
        const parsedData = JSON.parse(userData);
        if (Array.isArray(parsedData)) {
          this.activeMembers = parsedData.map(member => ({
            ...member,
            dateOfBirth: this.extractDateOfBirth(member.dateOfBirth)
          }));
        } else if (typeof parsedData === 'object') {
          this.activeMembers = [{
            ...parsedData,
            dateOfBirth: this.extractDateOfBirth(parsedData.dateOfBirth)
          }];
        } else {
          this.activeMembers = [];
        }
      } else {
        this.activeMembers = [];
      }

      console.log('Active Members:', this.activeMembers);
    }

    private extractDateOfBirth(dateString: string): string {
      const date = new Date(dateString);
      const year = date.getFullYear();
      const month = ('0' + (date.getMonth() + 1)).slice(-2);
      const day = ('0' + date.getDate()).slice(-2);
      return `${year}-${month}-${day}`;
    }
  }
