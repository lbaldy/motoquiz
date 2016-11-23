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
  private selectedQuestionIndex:number = 0;
  private quizLength:number;
  private finished = false;
  private selectedQuestion:Question;

  constructor(private quizService:QuizService) {
  }

  ngOnInit():void {
this.getRandomQuestions();
  }

  getRandomQuestions():void {
    var self = this;
    this.selectedQuestionIndex = 0;
    this.finished = false;
    this.selectedQuestion = null;
    this.quizService.getRandomQuestions().then(quiz => {
      self.quiz = quiz;
      self.quizLength = self.quiz.questions.length;
      self.selectedQuestion = quiz.questions[self.selectedQuestionIndex];
    });
  }

  storeAnswerAndMoveToNextQuestion(event:any):void {
    console.log(event);
    let currentIndex = ++this.selectedQuestionIndex;
    if (this.quiz.questions[currentIndex]) {
      this.selectedQuestion = this.quiz.questions[currentIndex];
    } else {
      this.finished = true;
    }
  }

  startAgain():void {
    this.getRandomQuestions()
  }


}
