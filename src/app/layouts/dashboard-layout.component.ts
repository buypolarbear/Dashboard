import { Component } from '@angular/core';
import { AuthenticateApi } from '../services/api';
import * as constants from '../constants';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard-layout.component.html'
})
export class DashboardLayoutComponent {
  public company = constants.company;
  public disabled:boolean = false;
  public status:{isopen:boolean} = {isopen: false};
  public userData: any;
  public logo: string = constants.logos.light;

  constructor(private _authApi: AuthenticateApi) {
    this.getUserData();
  }

  public toggleDropdown($event:MouseEvent):void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }

  public logout() {
    this._authApi.logoutUser("logout");
  }

  public getUserData() {
    this._authApi.getUserData((userData) => {
      this.userData = userData;
    })
  }
}