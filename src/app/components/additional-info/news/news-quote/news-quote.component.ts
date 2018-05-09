import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../../../../shared/quote.interface';

@Component({
  selector: 'app-news-quote',
  templateUrl: './news-quote.component.html',
  styleUrls: ['./news-quote.component.scss']
})
export class NewsQuoteComponent implements OnInit {


  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
