import { Component, OnInit } from '@angular/core';
import { NewsService} from './news.service';
import { INews } from './news';

import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  players: any[];
  news: INews[];

  constructor(public _newsService: NewsService) {}

  ngOnInit() {
    this._newsService.getNews()
    .subscribe(news => {
      this.news = news;
    },
      error => this.errorMessage = <any>error);
    }
  }
