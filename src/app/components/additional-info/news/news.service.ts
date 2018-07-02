import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

import {INews} from './news';


@Injectable()
export class NewsService {
    
 public _newsUrl="http://news.bookgolf365.ie/news.json"
  
   constructor(public _http: HttpClient){}
    
       getNews(): Observable<any[]>{
        return this._http.get<any[]>(this._newsUrl)
        .do(data => console.log("All: "+JSON.stringify(data)))
        .catch(this.handleError)
       
       }

       public handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
   } 

//    ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx