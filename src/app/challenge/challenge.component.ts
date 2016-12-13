/**
 * Created by lukasz on 30.11.2016.
 */


import {Component, OnInit} from "@angular/core";
import {Params, ActivatedRoute} from "@angular/router";
import {ChallengeService} from "../services/challenge.service";
import {Challenge} from "../common/challenge";
import {Question} from "../common/question";
@Component({
  selector: 'bms-challenge-component',
  templateUrl: 'challenge.component.html'
})

export class ChallengeComponent implements OnInit {

  private challenge:Challenge;
  private selectedQuestionIndex:number = 0;
  private quizLength:number;
  private finished = false;
  private selectedQuestion:Question;

  constructor(private route:ActivatedRoute, private challengeService:ChallengeService) {

  }

  ngOnInit():void {
    this.route.params.forEach((params:Params) => {
      let id = params['id'];
      console.log(id);
      this.challengeService.getChallenge(id).then(challenge => {
        this.challenge = challenge
        this.challenge.answers = [];
        this.quizLength = challenge.questions.length;
        this.selectedQuestion = challenge.questions[this.selectedQuestionIndex];
      });
    });
  }

  storeAnswerAndMoveToNextQuestion(event:any):void {
    console.log(event);
    let currentIndex = ++this.selectedQuestionIndex;
    this.challenge.answers.push(event);
    if (this.challenge.questions[currentIndex]) {
      this.selectedQuestion = this.challenge.questions[currentIndex];
    } else {
      this.challengeService.submitAnswers(this.challenge)
      this.finished = true;
    }
  }
}
