import { Component } from '@angular/core';
import { HttpInterceptorService } from 'ng-http-interceptor';
import { AppHttpInterceptorService } from './services/interceptor'

@Component({
  selector: 'body',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  constructor(private httpInterceptor: HttpInterceptorService, private appHttpInterceptor: AppHttpInterceptorService) {
    this.httpInterceptor.response().addInterceptor(res => res.do(r => null, e => {
      appHttpInterceptor.error(e);
    }));
  }
}
