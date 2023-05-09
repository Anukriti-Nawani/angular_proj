import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private quizService: QuizService) {}

  login(): void {
    // Add login logic here, e.g., authentication
    if (this.username && this.password) {
      const credentials = `${this.username}:${this.password}`;
      this.quizService.login(credentials);
      this.router.navigate(['/quiz']);
    } else {
      // Handle invalid login
      console.log('Invalid username or password');
    }
  }
}
