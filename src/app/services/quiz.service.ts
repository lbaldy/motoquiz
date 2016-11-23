/**
 * Created by lukasz on 22.11.2016.
 */


import {Injectable} from "@angular/core";
import {Quiz} from "../common/quiz";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {config} from "../common/config";

@Injectable()
export class QuizService {

  constructor(private http:Http) {
  }

  getQuiz():Promise<Quiz> {

    console.log(config.baseUrl + "/question/random/5");

    return this.http.get(config.baseUrl + "/question/random/5")
      .toPromise()
      .then(quizResponse => {
        let quiz = new Quiz();
        quiz.deserialize(quizResponse.json())
        return quiz
      })
      .catch(function () {
        console.log(arguments);
      })
  }

}
