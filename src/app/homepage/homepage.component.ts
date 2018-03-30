import { Component, OnInit } from '@angular/core';
import { WeatherService} from './weather.service';
import { HttpClient } from '@angular/common/http';
import { IWeather } from './weather';
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})

export class HomepageComponent implements OnInit {
  errorMessage: string;
  weather: IWeather[] = [];


  constructor(private _weatherService:WeatherService) {

   }

  ngOnInit() {
    this._weatherService.getWeather()
    .subscribe(weather => {
      this.weather = weather;
    },
      error => this.errorMessage=<any>error);
  }
  }
