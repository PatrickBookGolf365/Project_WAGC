import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import {INews} from './news';

@Injectable()
export class NewsService {
    
   private _newsUrl="https://gist.githubusercontent.com/PatrickBookGolf365/88a79f87a0d75cb9c5e7d2e4e0468205/raw/e553efff8367dadc5930de49e88c9d14df5f5f82/news.json"
    
   constructor(private _http: HttpClient){}
       getNews(): Observable<INews[]>{
        return this._http.get<INews[]>(this._newsUrl)
        .do(data => console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError);
       }

       private handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
   } 