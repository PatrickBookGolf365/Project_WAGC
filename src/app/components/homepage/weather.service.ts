import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import {IWeather} from './weather';

@Injectable()
export class WeatherService {
    
   private _weatherUrl="http://api.openweathermap.org/data/2.5/weather?lat=53.3909&lon=-6.5665&units=metric&appid=30e47e75d5f18740d0765320a709ce40"
    
   constructor(private _http: HttpClient){}
       getWeather(): Observable<IWeather[]>{
        return this._http.get<IWeather[]>(this._weatherUrl)
        .do(data => console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
       }

       private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
   } 
