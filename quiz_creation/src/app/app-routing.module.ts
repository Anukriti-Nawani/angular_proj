import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { ScoreComponent } from './score/score.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'quiz',
    component: QuizComponent
  },
  {
    path: 'score/:score',
    component: ScoreComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
