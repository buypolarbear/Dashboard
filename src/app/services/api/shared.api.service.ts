import { Injectable } from '@angular/core';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class SharedApi {
  private apiRoot: string = 'https://api.moxy.one/';

  constructor(private _auth: AuthService) {}

  public getHttpOptions() {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append("Authorization", "Bearer " + this._auth.authentication.accessToken);
    return new RequestOptions({ headers: headers });
  }

  public formatHttpBody(body) {
    return JSON.stringify(body);
  }

  public formatApiUrl(apiPath:string) {
    return this.apiRoot + apiPath;
  }

  public formatGetHttpParams(options) {
    let params: URLSearchParams = new URLSearchParams();

    for (var key in options) {
      if (options.hasOwnProperty(key)) {
        params.set(key, options[key]);
      }
    }

    return {
      search: params
    }
  }
}
