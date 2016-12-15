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
import {ChallengeComponent} from "./challenge/challenge.component";
import {AUTH_PROVIDERS} from "angular2-jwt/angular2-jwt";
import {LoginComponent} from "./login/login.component";
import {LoginService} from "./services/login.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChallengesComponent,
    ChallengeComponent,
    FreeplayComponent,
    QuestionComponent,
    MenuComponent,
    LoginComponent
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
        path: 'challenges',
        component: ChallengesComponent
      },
      {
        path: 'challenge/:id',
        component: ChallengeComponent
      },
      {
        path: 'freeplay',
        component: FreeplayComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
    ])
  ],
  providers: [
    QuizService,
    ChallengeService,
    LoginService,
    AUTH_PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
