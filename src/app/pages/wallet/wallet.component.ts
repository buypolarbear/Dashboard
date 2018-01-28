import { Component } from '@angular/core';
import { paths } from '../../constants';
import * as constants from '../../constants';

@Component({
  templateUrl: 'wallet.component.html'
})
export class WalletComponent {
  public coinLogoPath: string = `${paths.images}/coins`;
  public company = constants.company;

  public currencies:any[];

  constructor() {
    this.currencies = [{
      code: "BTC",
      name: "Bitcoin",
      logo: `${this.coinLogoPath}/btc.png`,
      balance: 0
    }, {
      code: "ETH",
      name: "Ethereum",
      logo: `${this.coinLogoPath}/eth.png`,
      balance: 0
    }, {
      code: "SCL",
      name: "Social",
      logo: `${this.coinLogoPath}/scl.png`,
      balance: 0
    }, {
      code: "XRP",
      name: "Ripple",
      logo: `${this.coinLogoPath}/xrp.png`,
      balance: -1
    }, {
      code: "ETC",
      name: "Ethereum Classic",
      logo: `${this.coinLogoPath}/etc.png`,
      balance: -1
    }, {
      code: "LTC",
      name: "Litecoin",
      logo: `${this.coinLogoPath}/ltc.png`,
      balance: -1
    }, {
      code: "DOGE",
      name: "Dogecoin",
      logo: `${this.coinLogoPath}/doge.png`,
      balance: 0
    }, {
      code: "WAVES",
      name: "Waves",
      logo: `${this.coinLogoPath}/waves.png`,
      balance: -1
    }, {
      code: "DASH",
      name: "Dash",
      logo: `${this.coinLogoPath}/dash.png`,
      balance: -1
    }, {
      code: "MAID",
      name: "MaidSafe",
      logo: `${this.coinLogoPath}/maid.png`,
      balance: -1
    }];
  }
}
