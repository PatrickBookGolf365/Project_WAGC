import { Component, OnInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';

@Component({
  selector: 'app-live-player-score',
  templateUrl: './live-player-score.component.html',
  styleUrls: ['./live-player-score.component.scss']
})
export class LivePlayerScoreComponent implements OnInit {

  errorMessage: string;
  player;
  data;
  constructor(public _liveScoreService:LiveScoreService) {
   
   }



  ngOnInit() {
        
    this._liveScoreService.getRealJsonData()
    .subscribe(data => {
      this.data = data;},
    error => this.errorMessage=<any>error);   
   }
  }

