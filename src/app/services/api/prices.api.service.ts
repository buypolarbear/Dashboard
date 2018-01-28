import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class PricesApi {

    private marketDataUrl: string = "";

    constructor(private http: Http) { }

    public getDashboardQuotes(): Observable<any> {
        return this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH,BTC&tsyms=BTC,ETH,USD,AUD")
            .map(data => {
                return data.json();
            });
    }
}