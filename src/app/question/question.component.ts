/**
 * Created by lukasz on 22.11.2016.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {Question} from "../common/question";
import {config} from "../common/config";
@Component({
  selector: 'bms-question-component',
  templateUrl: 'question.component.html'
})

export class QuestionComponent {

  @Input()
  question:Question;

  @Output()
  selectedAnswer = new EventEmitter();

  private resourceUrl:string = config.baseResourceUrl;

  selectAnswer(answerDefinionId:number):void {
    this.selectedAnswer.emit(answerDefinionId);
  }

}
