import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

@Injectable()
export class LiveScoreService {

    public _playerfakeUrl="https://gist.githubusercontent.com/PatrickBookGolf365/e9640246c687bba078cf00ad93eaa32a/raw/a00f93d2727beabd7a49a3a2281802e0ee378a95/player.json"
    public _leaderUrl="http://www.ghintpp.com/champ/TPPOnlineScoring/Webservices/strokedata.asmx/ScoringResultsTeamGroup?tournamentID=594&scoreMethod=Gross&players=true&teamGroupID=252&numberToInclude=0&flightID=0&scoreMode=FullScoreboard&scorecardID=0&mobileBrowser=False&noCache=True"    
    public _fakeleadUrl="https://gist.githubusercontent.com/PatrickBookGolf365/eb9cf24aa4b81ad50446c43359bef544/raw/77c85e4b64e2fb8f77b736ae37f7ee4854ee39ac/live-team.json"
    public _faketeamUrl="https://gist.githubusercontent.com/PatrickBookGolf365/6d0b7b66ae3b9b00e2bf0733b743dbb1/raw/d7e02bd6ef7ce39553471a4c9efefe93124aabf7/live-teams.json"
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


    getPlayerFake(){
        return this._http.get(this._fakeleadUrl)
        // .do(data =>  console.log("all:"+JSON.stringify(data)))
        .catch(this.handleError);
       
    }   

    getFakePlayer(){
        return this._http.get(this._playerfakeUrl)
    //    .do(data =>  console.log("all:"+JSON.stringify(data)))
        .catch(this.handleError);
    }

    getTeam(){
        return this._http.get(this._faketeamUrl)
        // .do(data =>  console.log("getTeam:"+JSON.stringify(data)))
        .catch(this.handleError);
       
    }
    

 public handleError(err: HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
    }
    

}