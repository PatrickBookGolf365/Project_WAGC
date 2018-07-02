import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';
import { ITeam } from './live-team-score';


declare var $:any;

@Component({
  selector: 'app-live-team-score',
  templateUrl: './live-team-score.component.html',
  styleUrls: ['./live-team-score.component.scss']
})

// class Defualt {
//   private profiles: string;
// }

// get default(){
//       return this.profiles 
// }

export class LiveTeamScoreComponent implements OnInit{
  errorMessage: string;
  hideStuff = []; 
  data;
  searchTerm: string;
 
 


  constructor(public _liveScoreService:LiveScoreService) {

   }

  ngOnInit(){

    this._liveScoreService.getRealJsonData()
    .subscribe(data => {
      this.data = data;},
    error => this.errorMessage=<any>error);
      

  }
}
