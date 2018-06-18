import { Component, OnInit } from '@angular/core';
import { NewsService} from './news.service';
import { INews } from './news';

import { Http, Response } from "@angular/http";

import { Quote } from '../../../shared/quote.interface';
import { QuoteService } from "../../../shared/quote.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  players: any[];
  news: INews[];
  quotes: Quote[];

  constructor(public _newsService:NewsService, private quoteService: QuoteService) {

   }

  ngOnInit() {
    this._newsService.getNews()
    .subscribe(news => {
      this.news = news;},
      error => this.errorMessage=<any>error);

    // this.quoteService.getQuotes()
    //   .subscribe(
    //     (quotes: Quote[]) => this.quotes = quotes,
    //     (error: Response) => console.log(error)
    //    );
    }
  }
  