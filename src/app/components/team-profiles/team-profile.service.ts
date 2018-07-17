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

    getPlayer(){
       
        // var convert = require('xml-js');
       
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})}).catch(this.handleError)
        // .do(data => {var result = convert.xml2json(data, {compact: true, spaces: 4});console.log(result)});
        
       
     
        // var parseString = require('xml2js').parseString;
       
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})})
        // .do(data => (parseString(data, function(err, result){ console.dir("all:"+JSON.stringify(result))})))
        // .catch(this.handleError)
       }

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