import {Answer} from "./answer";
import {DeserializableInterface} from "./DeserializableInterface";
/**
 * Created by lukasz on 22.11.2016.
 */

export class Question implements DeserializableInterface {
  deserialize(input) {
    this._id = input.id;
    this._uuid = input.uuid;
    this._text = input.text;
    this._questionType = input.type;
    this._answerType = input.answerType;
    this._resource = input.resource;
    this._answerDefinitions = []
    input.answerDefinitions.forEach(answer => {
      let answerObject = new Answer();
      this._answerDefinitions.push(answerObject.deserialize(answer.answerDefinitions));
    })
    return this;
  }

  private _id:number;
  private _uuid:number;
  private _answerDefinitions:Array<Answer>;
  private _text:string;
  private _questionType:string;
  private _answerType:string;
  private _resource:string;

  get id():number {
    return this._id;
  }

  set id(value:number) {
    this._id = value;
  }

  get uuid():number {
    return this._uuid;
  }

  set uuid(value:number) {
    this._uuid = value;
  }

  get answerDefinitions():Array<Answer> {
    return this._answerDefinitions;
  }

  set answerDefinitions(value:Array<Answer>) {
    this._answerDefinitions = value;
  }

  get text():string {
    return this._text;
  }

  set text(value:string) {
    this._text = value;
  }

  get questionType():string {
    return this._questionType;
  }

  set questionType(value:string) {
    this._questionType = value;
  }

  get answerType():string {
    return this._answerType;
  }

  set answerType(value:string) {
    this._answerType = value;
  }

  get resource():string {
    return this._resource;
  }

  set resource(value:string) {
    this._resource = value;
  }
}
