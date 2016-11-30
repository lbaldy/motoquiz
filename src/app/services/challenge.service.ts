/**
 * Created by lukasz on 30.11.2016.
 */

import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import "rxjs/add/operator/toPromise";
import {config} from "../common/config";
import {Challenge} from "../common/challenge";

@Injectable()
export class ChallengeService {

  constructor(private http:Http) {
  }

  getChallenges():Promise<Array<Challenge>> {
    return this.http.get(config.baseUrl + "/challenge/list")
      .toPromise()
      .then(challenges => {
        let challengesArray = [];
        let parsedResponse = challenges.json();
        parsedResponse.forEach(challengeItem => {
          let challenge = new Challenge();
          challenge.deserialize(challengeItem)
          challengesArray.push(challenge)
        })
        return challengesArray
      })
      .catch(function () {
        console.log(arguments);
      })
  }

  getChallenge(challengeId:number):Promise<Challenge> {
    return this.http.get(config.baseUrl + '/challenge/' + challengeId)
      .toPromise()
      .then(challenge => {
        
      })
  }

}
