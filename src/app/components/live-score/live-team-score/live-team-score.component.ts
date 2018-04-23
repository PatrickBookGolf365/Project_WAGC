import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';


declare var $:any;

@Component({
  selector: 'app-live-team-score',
  templateUrl: './live-team-score.component.html',
  styleUrls: ['./live-team-score.component.scss']
})
export class LiveTeamScoreComponent implements OnInit{
  errorMessage: string;
  team: any[] = [];
  hideStuff = []; 
  

  constructor(public _liveScoreService:LiveScoreService) { }

  ngOnInit() {
  this._liveScoreService.getTeam()
  .subscribe(team => {
    this.team = team;},
    error => this.errorMessage=<any>error);

  }
}
