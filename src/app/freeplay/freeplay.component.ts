/**
 * Created by lukasz on 22.11.2016.
 */

import {Component, OnInit} from "@angular/core";
import {Quiz} from "../common/quiz";
import {QuizService} from "../services/quiz.service";
import {Question} from "../common/question";

@Component({
  selector: 'bms-freeplay-component',
  templateUrl: 'freeplay.component.html'
})

export class FreeplayComponent implements OnInit {

  private quiz:Quiz

  private selectedQuestion:Question;

  constructor(private quizService:QuizService) {}

  ngOnInit():void {
    this.quizService.getQuiz().then(quiz => {
      this.quiz = quiz;
      this.selectedQuestion = this.quiz.questions[0];
    });

  }

}
