/**
 * Created by lukasz on 30.11.2016.
 */


import {Component, OnInit} from "@angular/core";
import {Params} from "@angular/router";
@Component({
  selector: 'bms-challenge-component',
  templateUrl: 'challenge.component.html'
})

export class ChallengeComponent implements OnInit {

  ngOnInit():void {
    this.route.params.forEach((params:Params) => {
      let id = params['id'];
      console.log(id);
      this.guideService.getGuide(id).then(guide => {
        this.guide = guide;
        if(this.guide.markers.length > 0){
          this.selectedMarker = this.guide.markers[0];
          //this.selectMarker(this.guide.markers[0]);
        }

        console.log(this.guide)
      });
    });
  }


//   this.route.params.forEach((params:Params) => {
//   let id = params['id'];
//   console.log(id);
//   this.guideService.getGuide(id).then(guide => {
//   this.guide = guide;
//   if(this.guide.markers.length > 0){
//   this.selectedMarker = this.guide.markers[0];
//   //this.selectMarker(this.guide.markers[0]);
// }
//
// console.log(this.guide)
// });
// });
}
