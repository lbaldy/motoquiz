/**
 * Created by lukasz on 22.11.2016.
 */


import {Injectable} from "@angular/core";
import {Question} from "../objects/question";
import {QUIZ} from "../mock/quiz.mock";
import {Quiz} from "../objects/quiz";
@Injectable()
export class QuizService {

  getQuiz():Promise<Quiz> {
    let quiz = new Quiz();
    return Promise.resolve(quiz.deserialize(QUIZ));
  }

}
