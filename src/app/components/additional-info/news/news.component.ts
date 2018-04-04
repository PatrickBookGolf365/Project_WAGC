import { Component, OnInit } from '@angular/core';
import { NewsService} from './news.service';
import { HttpClient } from '@angular/common/http';
import { INews } from './news';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  errorMessage: string;
  news: INews[] = [];


  constructor(public _newsService:NewsService) {

   }

  ngOnInit() {
    this._newsService.getNews()
    .subscribe(news => {
      this.news = news;
    },
      error => this.errorMessage=<any>error);
  }
  }
