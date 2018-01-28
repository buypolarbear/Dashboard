import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/Rx';
import { AuthenticateApi } from '../api';
import * as constants from '../../constants';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/of';

@Injectable()
export class AuthService {
  public authentication: any = {
    authenticated: false,
    accessToken: null,
    idToken: null
  };
  logIn$: Subject<any>;
  externalBS;

  constructor(private router: Router) {
    this.logIn$ = new BehaviorSubject<any>(this.authentication);
    this.logIn$.asObservable();
    this.externalBS = this.logIn$;

    //Checking if localStorage token exists
    if(window.localStorage.getItem(constants.localStorage.accessToken) && window.localStorage.getItem(constants.localStorage.idToken)) {
      this.authentication = {
        authenticated: true,
        accessToken: window.localStorage.getItem(constants.localStorage.accessToken),
        idToken: window.localStorage.getItem(constants.localStorage.idToken),
      };
      this.logIn$.next(this.authentication);
    }
  }

  public login(data, callback) {
    //Setting accessToken to idToken and idToken to accessToken as Auth0 have it the wrong way around
    window.localStorage.setItem(constants.localStorage.accessToken, data.idToken);
    window.localStorage.setItem(constants.localStorage.idToken, data.accessToken);

    this.authentication = {
      authenticated: true,
      accessToken: data.idToken,
      idToken: data.accessToken
    };
    this.logIn$.next(this.authentication);

    callback();
  }

  public logout() {
    window.localStorage.setItem(constants.localStorage.accessToken, '');
    window.localStorage.setItem(constants.localStorage.idToken, '');

    this.authentication = {
      authenticated: false,
      accessToken: null,
      idToken: null
    };

    //this._authApi.logoutUser();
  }

  public getAuth() {
    return Observable.of(this.authentication);
  }

  public checkAuth() {
    return this.authentication['authenticated'];
  }
}
