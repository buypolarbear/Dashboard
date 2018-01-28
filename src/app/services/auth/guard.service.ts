import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class RedirectIfNotLoggedIn implements CanActivate {
  constructor(private router: Router, private _auth: AuthService) { }

  //If user is not logged in and tries to visit unauthorized pages (dashboard), redirect to login
  public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Getting the authentication status of the user
    let authenticated = this._auth.checkAuth();

    if (authenticated) {
      //If authenticated, allow them access
      return true;
    } else {
      //If not authenticated, redirect to login
      this.router.navigate(['/'], {
        queryParams: {
          returnUrl: state.url
        }
      });
      return false;
    }
  }
}

@Injectable()
export class RedirectIfLoggedIn implements CanActivate {
  constructor(private router: Router, private _auth: AuthService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //Getting the authentication status of the user
    let authenticated = this._auth.checkAuth();

    if (!authenticated) {
      //If not authenticated, allow them access
      return true;
    } else {
      //If is authenticated, redirect to dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }
  }
}