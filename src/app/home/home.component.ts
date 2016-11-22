/**
 * Created by lukasz on 22.11.2016.
 */


import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'bms-home-component',
  templateUrl: 'home.component.html'
})

export class HomeComponent {

  constructor(private router:Router) {

  }

  buttonClick(mode:string):void {
    this.router.navigate([mode])
  }

}
