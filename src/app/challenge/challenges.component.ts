/**
 * Created by lukasz on 22.11.2016.
 */


import {Component, OnInit} from "@angular/core";
import {ChallengeService} from "../services/challenge.service";
import {Challenge} from "../common/challenge";
import {Router} from "@angular/router";

@Component({
  selector: 'bms-challenges-component',
  templateUrl: 'challenges.component.html'
})

export class ChallengesComponent implements OnInit {

  private challenges:Array<Challenge>;

  constructor(private challengeService:ChallengeService, private router:Router) {

  }

  ngOnInit():void {
    this.challengeService.getChallenges().then(challenges => {
      this.challenges = challenges;
    })
  }

  playChallenge(challengeId:number):void {
    console.log("play challenge id: " + challengeId);
    this.router.navigate(['challenge', challengeId]);
  }


}
