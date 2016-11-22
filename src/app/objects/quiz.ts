import {DeserializableInterface} from "./DeserializableInterface";
import {Question} from "./question";
/**
 * Created by lukasz on 22.11.2016.
 */


export class Quiz implements DeserializableInterface {

  private _questions:Array<Question>;

  deserialize(input) {
    this._questions = [];
    input.forEach(questionInput => {
      let question = new Question();
      this._questions.push(question.deserialize(questionInput));
    })
    return this;
  }

  get questions():Array<Question> {
    return this._questions;
  }

  set questions(value:Array<Question>) {
    this._questions = value;
  }

}
