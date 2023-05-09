import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { QuizService } from '../quiz.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
  currentQuestion: any;
  selectedAnswer: string = '';

  constructor(private router: Router, private quizService: QuizService) {}

  ngOnInit(): void {
    this.quizService.loadQuestionsFromJSON();

    this.currentQuestion = this.quizService.getCurrentQuestion();
  }

  nextQuestion(): void {
    this.quizService.saveAnswer(this.selectedAnswer);
    this.quizService.getNextQuestion();
    this.selectedAnswer = '';

    this.currentQuestion = this.quizService.getCurrentQuestion();
  }

  submitQuiz(): void {
    this.quizService.saveAnswer(this.selectedAnswer);
    const score = this.quizService.getScore();
    this.router.navigate(['/score', score]);
  }
}
