/**
 * Created by lukasz on 12/15/16.
 */


import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {config} from "../common/config";

@Injectable()
export class LoginService {

  constructor(private http:Http) {

  }

  login(login:string, password:string):Promise<any> {
    return this.http.post(config.baseServerUrl + "authenticate", {
      password: password,
      username: login,
      rememberMe: false
    })
      .toPromise()


  }

}
