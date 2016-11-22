import {DeserializableInterface} from "./DeserializableInterface";
/**
 * Created by lukasz on 22.11.2016.
 */
export class Answer implements DeserializableInterface {

  deserialize(input) {
    if(input){
      this._valid = input.valid;
      this._id = input.id;
      this._uuid = input.uuid;
      this._text = input.text;
      this._resource = input.resource;
      this._valid = input.valid;
    }
    return this;
  }

  private _id:number;
  private _uuid:string;
  private _text:string;
  private _resource:null;
  private _valid:boolean;

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

  get text():string {
    return this._text;
  }

  set text(value:string) {
    this._text = value;
  }

  get resource():any {
    return this._resource;
  }

  set resource(value:any) {
    this._resource = value;
  }

  get valid():boolean {
    return this._valid;
  }

  set valid(value:boolean) {
    this._valid = value;
  }
}
