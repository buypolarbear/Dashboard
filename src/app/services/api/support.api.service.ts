import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { SharedApi } from './shared.api.service';

@Injectable()

export class SupportApi {
  constructor(private http: Http, private _sharedApi: SharedApi) { }

  public sendContactEmail(body: any): Observable<any> {
    return this.http.post(this._sharedApi.formatApiUrl(`mail/contact`),
                          this._sharedApi.formatHttpBody(body),
                          this._sharedApi.getHttpOptions());
  }
}