import { Injectable } from '@angular/core';

@Injectable()
export class StateService {
  private convertCurrency: any = null;
  private _convertCurrencyKey: string = "mx-convert-currency";

  constructor() {
    if(localStorage.getItem(this._convertCurrencyKey)) {
      this.convertCurrency = JSON.parse(localStorage.getItem(this._convertCurrencyKey));
    }
  }

  public setConvertCurrency(currency): void {
    localStorage.setItem(this._convertCurrencyKey, JSON.stringify(currency));
    this.convertCurrency = currency;
  }

  public getConvertCurrency(): string {
    return this.convertCurrency;
  }
}