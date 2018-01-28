import { Component, ViewChild, ElementRef } from '@angular/core';
import { StateService } from '../../services/state';
import { PricesApi } from '../../services/api';
import * as constants from '../../constants';
import * as moment from "moment";

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  public company = constants.company;
  public brandPrimary:string = constants.colours.primary;
  public overviewDays: number = 30;
  public walletHistoryDays: number = 7;
  public tradeHistory: any[];
  public profitableTrades: number = 0;
  public unprofitableTrades: number = 0;
  public closedTrades:  number = 0;
  public chartStyling:Array<any>;
  public convertedCurrency;
  public topChartLabels:Array<any> = [];
  public mainChartLabels:Array<any> = [];
  public portfolioHoldingsLabels:Array<any> = ["SCL", "ETH", "BTC", "XRP", "LTC"];
  public spendingsLabel:Array<any> = ["SCL", "ETH", "BTC"];
  @ViewChild("canvasGradient") canvasGradient: ElementRef;

  public acceptedConversions: any[] = [{
    code: "USD",
    symbol: "$"
  }, {
    code: "AUD",
    symbol: "$"
  }, {
    code: "BTC",
    symbol: "฿"
  }, {
    code: "ETH",
    symbol: "Ξ"
  }];
  
  public walletValueHistory:any = {
    BTC: [{
      data: [],
      label: 'Value in BTC'
    }],
    ETH: [{
      data: [],
      label: 'Value in ETH'
    }],
    USD: [{
      data: [],
      label: 'Value in USD'
    }],
    AUD: [{
      data: [],
      label: 'Value in AUD'
    }]
  };

  public mainChartData:any = {
    BTC: [{
      data: [],
      label: 'Amount in BTC'
    }],
    ETH: [{
      data: [],
      label: 'Amount in ETH'
    }],
    USD: [{
      data: [],
      label: 'Amount in USD'
    }],
    AUD: [{
      data: [],
      label: 'Amount in AUD'
    }]
  };

  public portfolioHoldingsData:Array<any> = [{
    data: [11, 48, 20, 6, 15]
  }];

  public spendingsData:Array<any> = [{
    data: [5, 52, 43]
  }];
  
  public topChartOptions:any = {
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }
      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };

  public mainChartOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }
      }],
      yAxes: [{
        ticks: {
          maxTicksLimit: 5
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };

  public portfolioHoldingsOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItems, data) {
              return data.labels[tooltipItems['index']] + ": " + data['datasets'][0]['data'][tooltipItems['index']] + '%';
          }
      }
    },
    legend: {
      display: false
    }
  };

  public spendingsOptions:any = {
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    tooltips: {
      callbacks: {
          label: function(tooltipItems, data) {
              return data.labels[tooltipItems['index']] + ": " + data['datasets'][0]['data'][tooltipItems['index']] + '%';
          }
      }
    },
    legend: {
      display: false
    }
  };


  public convertBalances(currency) {
    this._state.setConvertCurrency(currency);
    this.convertedCurrency = currency;
    console.log(this.convertedCurrency);
  }

  private randomFloatBetween(minValue, maxValue, precision){
    if(typeof(precision) == 'undefined'){
        precision = 2;
    }
    return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
  }

  private precisionRound(number, precision) {
    var factor = Math.pow(10, precision);
    return Math.round(number * factor) / factor;
  }

  constructor(private _state: StateService, private _pricesApi: PricesApi) {
    let d = new Date();
    d.setDate(d.getDate()-10);

    //Adding dummy data to main overview chart
    for (var i = 0; i <= this.overviewDays-1; i++) {
      d.setDate(d.getDate()+1);
      this.mainChartData.USD[0].data.push(this.randomFloatBetween(5, 1000, 2));
      this.mainChartLabels.push(moment(d).format("DD MM YYYY"));
    }

    //Adding dummy data to wallet value chart
    for (var i = 0; i <= this.walletHistoryDays-1; i++) {
      d.setDate(d.getDate()+1);
      this.walletValueHistory.USD[0].data.push(this.randomFloatBetween(2000, 3000, 2));
      this.topChartLabels.push(moment(d).format("DD MMM YYYY"));
    }

    this._pricesApi.getDashboardQuotes().subscribe(prices => {
      for (var i = 0; i <= this.overviewDays-1; i++) {
        this.mainChartData.BTC[0].data.push(this.precisionRound(this.mainChartData.USD[0].data[i]/prices.BTC.USD, 8));
        this.mainChartData.ETH[0].data.push(this.precisionRound(this.mainChartData.USD[0].data[i]/prices.ETH.USD, 8));
        this.mainChartData.AUD[0].data.push(this.precisionRound(prices.BTC.AUD*this.mainChartData.BTC[0].data[i], 2));
      }
      for (var i = 0; i <= this.walletHistoryDays-1; i++) {
        this.walletValueHistory.BTC[0].data.push(this.precisionRound(this.walletValueHistory.USD[0].data[i]/prices.BTC.USD, 8));
        this.walletValueHistory.ETH[0].data.push(this.precisionRound(this.walletValueHistory.USD[0].data[i]/prices.ETH.USD, 8));
        this.walletValueHistory.AUD[0].data.push(this.precisionRound(prices.BTC.AUD*this.walletValueHistory.BTC[0].data[i], 2));  
      }

      if(!this._state.getConvertCurrency()) {
        this.convertBalances(this.acceptedConversions[0]);
      } else {
        this.convertBalances(this._state.getConvertCurrency());
      }
    });
  }

  ngOnInit() {
    let gradient = this.canvasGradient.nativeElement.getContext('2d').createLinearGradient(0, 0, 0, 450);
    gradient.addColorStop(0, '#009faf');
    gradient.addColorStop(0.5, 'rgba(138, 84, 166, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 0, 0, 0)');

    this.chartStyling = [{
      backgroundColor: gradient,
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }];
  }
}