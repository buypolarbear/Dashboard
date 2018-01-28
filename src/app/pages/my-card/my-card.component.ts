import { Component } from '@angular/core';
import { AuthenticateApi } from '../../services/api';

@Component({
  templateUrl: 'my-card.component.html',
  styleUrls: ['./my-card.scss']
})
export class MyCardComponent {
  public userData: any;
  
  constructor(private _authApi: AuthenticateApi) {
    this._authApi.getUserData((userData) => {
      this.userData = userData;
    });
  }
}
