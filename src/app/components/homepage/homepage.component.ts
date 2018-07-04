import { Component, OnInit } from '@angular/core';
import { WeatherService, HomeNewsService, InstagramFeedService} from './services/weather.service';
import { HttpClient } from '@angular/common/http';
import { trigger, state, transition, style, animate } from '@angular/animations';

declare var Instafeed;

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
  weather;
  forecast;
  instaFeed;
  homeNews = [];
  forecast_repeat;

  constructor(private _weatherService: WeatherService,
              private _homeNewsService: HomeNewsService,
              private _instagramFeed: InstagramFeedService) {

   }

  ngOnInit() {

    this.InjectableService();

  }

   onActivate(event) {

   // preventDefault();

   }


   InjectableService() {

    this._weatherService.getWeather()
    .subscribe(weather => {
      this.weather = weather;
    });

        this._weatherService.getForecast()
        .subscribe(forecast => {
          this.forecast = forecast;

      this._homeNewsService.getHomeNews()
      .subscribe(homeNews => {
        this.homeNews = homeNews;
        });
      },
      error => this.errorMessage = <any>error);
   }
}
