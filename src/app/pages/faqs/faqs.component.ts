import { Component } from '@angular/core';
import * as constants from '../../constants';

@Component({
  templateUrl: 'faqs.component.html'
})
export class FaqsComponent {
  public company = constants.company;

  /*public faqs: any[] = [{
    title: "Title",
    text: "Text"
  }]*/
}
