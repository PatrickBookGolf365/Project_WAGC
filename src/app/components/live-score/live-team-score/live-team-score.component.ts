import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';


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
  team: any = [];
  hideStuff = []; 
  player;
  data;
 
  arrayOne(n: number): any[] {
    return Array(n);
  }


  constructor(public _liveScoreService:LiveScoreService) {

   }

  ngOnInit() {
  this._liveScoreService.getTeam()
  .subscribe(team => {
    this.team = team;},
    error => this.errorMessage=<any>error);
    
    this._liveScoreService.getFakePlayer()
    .subscribe(player => {
      this.player = player;},
    error => this.errorMessage=<any>error);

    this._liveScoreService.getRealJsonData()
    .subscribe(data => {
      this.data = data;},
    error => this.errorMessage=<any>error);
      
   

  }
}
