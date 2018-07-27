import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class LiveScoreService {

   
    public _RealJsonData="http://scores.usga.org/2018/generic/stroke.json"
    constructor(public _http: HttpClient){}

  
       getRealJsonData(){
        return this._http.get(this._RealJsonData)
        .do(data =>  console.log("real data:"+JSON.stringify(data)))
        .catch(this.handleError);
       
    }   


    

 public handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    

}