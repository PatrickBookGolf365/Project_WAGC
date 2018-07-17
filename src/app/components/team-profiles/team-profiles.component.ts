import { Component, OnInit } from '@angular/core';
import { LiveScoreService } from '../live-score/live-score.service';
declare var $:any;

@Component({
  selector: 'app-team-profiles',
  templateUrl: './team-profiles.component.html',
  styleUrls: ['./team-profiles.component.scss']
})
export class TeamProfilesComponent implements OnInit {
errorMessage: string;
data;

  constructor(public _liveScoreService:LiveScoreService) { }

  ngOnInit(){

    this._liveScoreService.getRealJsonData()
    .subscribe(data => {
      this.data = data;},
    error => this.errorMessage=<any>error);
      }
     

}
