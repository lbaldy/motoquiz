import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loggedIn:boolean;

  ngOnInit():void {
    if (sessionStorage.getItem("id_token") != null) {
      this.loggedIn = true;
    }
  }

  constructor() {

  }


}
