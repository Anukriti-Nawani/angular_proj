import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private questions: any[] = [];
  private currentUser: string = '';
  private currentQuestionIndex = 0;
  private userAnswers: string[] = [];

  constructor(private http: HttpClient) {}

  login(username: string): void {
    this.currentUser = username;
  }

  getCurrentUser(): string {
    return this.currentUser;
  }

  getCurrentQuestion(): any {
    return this.questions[this.currentQuestionIndex];
  }

  getNextQuestion(): void {
    this.currentQuestionIndex++;
  }

  saveAnswer(answer: string): void {
    this.userAnswers.push(answer);
  }

  getScore(): number {
    let score = 0;
    for (let i = 0; i < this.questions.length; i++) {
      if (this.userAnswers[i] === this.questions[i].answer) {
        score++;
      }
    }
    return score;
  }

  resetQuiz(): void {
    this.currentUser = '';
    this.currentQuestionIndex = 0;
    this.userAnswers = [];
  }

  loadQuestionsFromJSON(): void {
    this.http.get<any[]>('assets/questions.json').subscribe(
      (data) => {
        this.questions = data;
      },
      (error) => {
        console.error('Error loading questions from JSON: ', error);
      }
    );
  }
}
