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
  forecastFH;
  forecast;
  instaFeed;
  homeNews = [];
  forecast_repeat;
  step = 0;

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

    this._weatherService.getForecast()
    .subscribe(forecast => {
      this.forecast = forecast;
    });

      this._weatherService.getForecastFH()
      .subscribe(forecastFH => {
        this.forecastFH = forecastFH;

      this._homeNewsService.getHomeNews()
      .subscribe(homeNews => {
        this.homeNews = homeNews;
        });

        
      },
      error => this.errorMessage = <any>error);
   }

   setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
