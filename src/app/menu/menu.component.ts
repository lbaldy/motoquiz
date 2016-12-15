/**
 * Created by lukasz on 30.11.2016.
 */
import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'bms-menu-component',
  templateUrl: 'menu.component.html'
})

export class MenuComponent {

  constructor(private router:Router) {

  }

  openMenu():void {
    this.show = true;
  }

  hideMenu():void {
    this.show = false;
  }

}
