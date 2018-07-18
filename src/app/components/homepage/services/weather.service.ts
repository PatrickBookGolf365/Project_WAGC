import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class WeatherService {

   // tslint:disable-next-line:max-line-length
   private _weatherForecastFH = 'http://api.openweathermap.org/data/2.5/forecast?lat=53.3909&lon=-6.5665&units=imperial&appid=6864244ceeeaa2b28fad8845b7113272';
   // tslint:disable-next-line:max-line-length
   private _weatherForecast = 'http://api.openweathermap.org/data/2.5/forecast?lat=53.3909&lon=-6.5665&units=metric&appid=6864244ceeeaa2b28fad8845b7113272';

   constructor(private _http: HttpClient) {}

   getForecast(): Observable<any[]> {
    return this._http.get<any[]>(this._weatherForecast)
    .do(data => console.log((data)))
    .catch(this.handleError);
   }

   getForecastFH(): Observable<any[]> {
    return this._http.get<any[]>(this._weatherForecastFH)
    .do(data => console.log((data)))
    .catch(this.handleError);
   }

       private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

@Injectable()
export class HomeNewsService {


    private _homeNewsUrl = 'http://watc.bookgolf365.ie/news.json';

    constructor(private _http: HttpClient) {}

       getHomeNews(): Observable<any[]> {
        return this._http.get<any[]>(this._homeNewsUrl)
        .do(data =>  JSON.stringify(data))
        .catch(this.handleError);
       }

       private handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}

@Injectable()
export class InstagramFeedService {

   // tslint:disable-next-line:max-line-length
   private _instagramFeedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=8144523052.2216fb3.4cfe98c30fbb4c57a6049b5980ccb6fc';

   constructor(private _http: HttpClient) {}

   getInstagramFeed(): Observable<any[]> {
     return this._http.get<any[]>(this._instagramFeedUrl)
       .do(data => console.log('Insta: ' + JSON.stringify(data)))
       .catch(this.handleError);
      }

      private handleError(err: HttpErrorResponse) {
       console.log(err.message);
       return Observable.throw(err.message);
   }
}


// tslint:disable-next-line:max-line-length
// https://gist.githubusercontent.com/PatrickBookGolf365/b124a8e610abd4e659b203b9b925f7fc/raw/f6ab4e4a342ecafd31e04756419b932db5d01705/news.json
// http://news.bookgolf365.ie/news.json
