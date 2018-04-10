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
        style({backgroundColor: 'yellow', opacity: 0}),
        animate(2000, style({backgroundColor: 'white', opacity: 1}))
      ])
    ])
  ]
})

export class HomepageComponent implements OnInit {
  errorMessage: string;
  weather: IWeather[] = [];
  homeNews: IHomeNews[] = [];


  constructor(private _weatherService:WeatherService, private _homeNewsService: HomeNewsService) {

   }

  ngOnInit() {
    this._weatherService.getWeather()
    .subscribe(weather => {
      this.weather = weather;
    this._homeNewsService.getHomeNews()
    .subscribe(homeNews =>{
      this.homeNews = homeNews;
    })
    },
      error => this.errorMessage=<any>error);
  }
  }
