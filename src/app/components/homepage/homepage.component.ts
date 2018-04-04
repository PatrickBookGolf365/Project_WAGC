import { Component, OnInit } from '@angular/core';
import { WeatherService, HomeNewsService} from './weather.service';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './weather';
import { IHomeNews} from './news';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  errorMessage: string;
  weather: IWeather[] = [];
  homeNews: IHomeNews[] =[];


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
