import { Component, OnInit, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Quote } from '../../shared/quote.interface';
import { QuoteService } from '../../shared/quote.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
