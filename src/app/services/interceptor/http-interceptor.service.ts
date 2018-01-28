import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import * as constants from '../../constants';
import { AuthenticateApi } from '../api';


@Injectable()
export class AppHttpInterceptorService {
  constructor(private _authApi: AuthenticateApi) {}

  public error(e) {
    if(e.status === constants.httpStatus.unauthorized) {
      this._authApi.logoutUser("logout");
    }
  }
}
