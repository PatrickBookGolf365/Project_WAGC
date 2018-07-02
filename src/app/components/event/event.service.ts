import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class YelpService {

    public _yelpUrl = "https://api.yelp.com/v3/businesses/search?location=Dublin,Ireland"
    public _yelpBUrl = "https://api.yelp.com/v3/businesses?locale=en_IE";
    public _LiveBus = ""

    constructor(public _http: HttpClient) { }

    getYelp(): Observable<any[]>{
        return this._http.get<any[]>(this._yelpUrl, {
            headers: new HttpHeaders({
                'Authorization':'Bearer ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx',
                'Access-Control-Allow-Origin':'*'
            })
        })
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError)
    }
    public handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }


}