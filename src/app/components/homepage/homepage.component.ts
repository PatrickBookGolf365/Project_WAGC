import { Component, OnInit } from '@angular/core';
import { WeatherService, HomeNewsService} from './services/weather.service';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './services/weather';
import { IHomeNews} from './services/news';
import { trigger, state, transition, style, animate } from '@angular/animations';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})

export class HomepageComponent implements OnInit {
  errorMessage: string;
  weather = [];
  forecast;
  homeNews = [];
  forecast_repeat;

  constructor(private _weatherService:WeatherService, private _homeNewsService: HomeNewsService) {
    this.forecast_repeat = Array.from(Array(5)).map((x, i) => i+1 );
   }

  ngOnInit() {
    this._weatherService.getWeather()
    .subscribe(weather => {
      this.weather = weather;
    // this._homeNewsService.getHomeNews()
    // .subscribe(homeNews =>{
    //   this.homeNews = homeNews;
    // })
    },
      error => this.errorMessage=<any>error);
  }
  }

  
  
    