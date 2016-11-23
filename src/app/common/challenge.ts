import {DeserializableInterface} from "./DeserializableInterface";
import {Question} from "./question";
/**
 * Created by lukasz on 23.11.2016.
 */

export class Challenge implements DeserializableInterface<Challenge> {

  private _id:number;
  private _uuid:string;
  private _name:string;
  private _description:string;
  private _startDate:string;
  private _endDate:string;
  private _active:oolean;
  private _questions:Array<Question>

  deserialize(input) {
    this._id = input.id;
    this._uuid = input.uuid;
    this._name = input.name;
    this._description = input.description;
    this._startDate = input.startDate;
    this._endDate = input.endDate;
    this._active = input.active;
    this.questions = [];
    input.questions.forEach(inputQuestion => {
      let question = new Question();
      this.questions.push(question.deserialize(inputQuestion));
    })
    return this;
  }

  get id():number {
    return this._id;
  }

  set id(value:number) {
    this._id = value;
  }

  get uuid():string {
    return this._uuid;
  }

  set uuid(value:string) {
    this._uuid = value;
  }

  get name():string {
    return this._name;
  }

  set name(value:string) {
    this._name = value;
  }

  get description():string {
    return this._description;
  }

  set description(value:string) {
    this._description = value;
  }

  get startDate():string {
    return this._startDate;
  }

  set startDate(value:string) {
    this._startDate = value;
  }

  get endDate():string {
    return this._endDate;
  }

  set endDate(value:string) {
    this._endDate = value;
  }

  get active():oolean {
    return this._active;
  }

  set active(value:oolean) {
    this._active = value;
  }

  get questions():Array<Question> {
    return this._questions;
  }

  set questions(value:Array<Question>) {
    this._questions = value;
  }

}
