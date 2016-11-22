import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ChallengeComponent} from "./challenge/challenge.component";
import {HomeComponent} from "./home/home.component";
import {QuizService} from "./services/quiz.service";
import {FreeplayComponent} from "./freeplay/freeplay.component";
import {QuestionComponent} from "./question/question.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChallengeComponent,
    FreeplayComponent,
    QuestionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'challenge',
        component: ChallengeComponent
      },
      {
        path: 'freeplay',
        component: FreeplayComponent
      }
    ])
  ],
  providers: [
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
