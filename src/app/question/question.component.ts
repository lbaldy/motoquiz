/**
 * Created by lukasz on 22.11.2016.
 */
import {Component, Input} from "@angular/core";
import {Question} from "../common/question";
@Component({
  selector: 'bms-question-component',
  templateUrl: 'question.component.html'
})

export class QuestionComponent {

  @Input()
  question:Question;

}
