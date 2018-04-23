import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class LiveScoreService {

    public _leaderUrl="http://www.ghintpp.com/champ/TPPOnlineScoring/Webservices/strokedata.asmx/ScoringResultsTeamGroup?tournamentID=594&scoreMethod=Gross&players=True&teamGroupID=252&numberToInclude=0&flightID=0&scoreMode=widgetd&scorecardID=0&mobileBrowser=False&noCache=True"    
    public _fakeleadUrl="https://gist.githubusercontent.com/PatrickBookGolf365/eb9cf24aa4b81ad50446c43359bef544/raw/77c85e4b64e2fb8f77b736ae37f7ee4854ee39ac/live-team.json"
    public _faketeamUrl="https://gist.githubusercontent.com/PatrickBookGolf365/6d0b7b66ae3b9b00e2bf0733b743dbb1/raw/448932e0b0a8411dae145831b1c416936425c2d7/live-teams.json"
    constructor(public _http: HttpClient){}

    getPlayer(){
        // var parseString = require('xml2js').parseString;
       
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})})
        // .do(data => (parseString(data, function(err, result){ console.dir("all:"+JSON.stringify(result))})))
        // .catch(this.handleError)
        
        return this._http.get(this._fakeleadUrl)
        // .do(data =>  console.log("all:"+JSON.stringify(data)))
        .catch(this.handleError);
       
       }

    getTeam(){
        return this._http.get(this._faketeamUrl)
        // .do(data =>  console.log("all:"+JSON.stringify(data)))
        .catch(this.handleError);
       
    }
    

 public handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    

}