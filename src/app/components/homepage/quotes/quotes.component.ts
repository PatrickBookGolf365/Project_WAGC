import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Quote } from '../../../shared/quote.interface';
import { QuoteService } from '../../../shared/quote.service';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.scss']
})
export class QuotesComponent implements OnInit {


  quotes: Quote[];

  constructor(private quoteService: QuoteService) { }

  ngOnInit() {
    this.quoteService.getQuotes()
      .subscribe(
        (quotes: Quote[]) => this.quotes = quotes,
        (error: Response) => console.log(error)
       );
  }

}
