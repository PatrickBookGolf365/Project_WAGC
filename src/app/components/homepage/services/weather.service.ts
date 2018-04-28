import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import {IWeather} from './weather';
import {IHomeNews} from './news';

@Injectable()
export class WeatherService {
    
   private _weatherUrl="http://api.openweathermap.org/data/2.5/weather?lat=53.3909&lon=-6.5665&units=metric&appid=30e47e75d5f18740d0765320a709ce40" 
   private _weatherUrl2="http://api.openweathermap.org/data/2.5/forecast?lat=53.3909&lon=-6.5665&units=metric&appid=30e47e75d5f18740d0765320a709ce40";

   constructor(private _http: HttpClient){}
       getWeather(): Observable<IWeather[]>{
        return this._http.get<IWeather[]>(this._weatherUrl)
        .do(data => console.log("Weather: "+JSON.stringify(data)))
        .catch(this.handleError);
       }

       getWeatherForecast(){
        return this._http.get(this._weatherUrl2)
        .do(data => console.log("Forecast: "+JSON.stringify(data)))
        .catch(this.handleError);
       }

       private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

@Injectable()
export class HomeNewsService{

    private _homeNewsUrl="https://gist.githubusercontent.com/PatrickBookGolf365/5efbf456b43bb5f27ae1d1f34d060a38/raw/75cda83d26e27a868cbc7bdafe8b8c4014bb11f0/homenews.json"

    constructor(private _http: HttpClient){}
       getHomeNews(): Observable<IHomeNews[]>{
        return this._http.get<IHomeNews[]>(this._homeNewsUrl)
        .do(data => console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
       }

       private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
}
