/**
 * Created by lukasz on 12/15/16.
 */


import {Component} from "@angular/core";
import {LoginService} from "../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'bms-login-component',
  templateUrl: 'login.component.html'
})

export class LoginComponent {

  private login:string;
  private password:string;

  constructor(private loginService:LoginService, private router:Router) {

  }

  getToken():void {
    let self = this;
    this.loginService.login(this.login, this.password)
      .then(function (response) {
        sessionStorage.setItem('id_token', response.json().id_token);
        self.router.navigate(["/"])
      })
      .catch(function () {
        console.log(arguments);
      });
  }

}
