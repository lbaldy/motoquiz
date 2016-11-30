import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import {ChallengesComponent} from "./challenge/challenges.component";
import {HomeComponent} from "./home/home.component";
import {QuizService} from "./services/quiz.service";
import {FreeplayComponent} from "./freeplay/freeplay.component";
import {QuestionComponent} from "./question/question.component";
import {MenuComponent} from "./menu/menu.component";
import {ChallengeService} from "./services/challenge.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChallengesComponent,
    FreeplayComponent,
    QuestionComponent,
    MenuComponent
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
        component: ChallengesComponent
      },
      {
        path: 'challenge/:id',
        component: ChallengesComponent
      },
      {
        path: 'freeplay',
        component: FreeplayComponent
      }
    ])
  ],
  providers: [
    QuizService,
    ChallengeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
