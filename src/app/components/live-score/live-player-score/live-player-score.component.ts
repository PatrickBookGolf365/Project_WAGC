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
  numbers = [];
  plusnumbers = [];
  constructor(public _liveScoreService:LiveScoreService) {
    this.numbers = Array.from(Array(211)).map((x, i) => i );
    this.plusnumbers = Array.from(Array(202)).map((x, j) => j );
   }



  ngOnInit() {
  
      this._liveScoreService.getFakePlayer()
      .subscribe(player => {
        this.player = player; 
      },
      error => this.errorMessage=<any>error);
     
   }
  }

