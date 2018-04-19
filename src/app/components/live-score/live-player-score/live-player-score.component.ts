import { Component, OnInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';

@Component({
  selector: 'app-live-player-score',
  templateUrl: './live-player-score.component.html',
  styleUrls: ['./live-player-score.component.scss']
})
export class LivePlayerScoreComponent implements OnInit {

  errorMessage: string;
  live: any[] = [];
  
  _listFilter: string;
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value:string){
    this._listFilter = value;
    this.filterdLive=this.listFilter ? this.performFilter(this.listFilter) : this.live;
  }

  filterdLive: any[];


  performFilter(filterBy: string): any[]{
    filterBy = filterBy.toLocaleLowerCase();
    return this.live.filter((teams: any) =>
      teams.player.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }


  constructor(public _liveScoreService:LiveScoreService) {
    this.filterdLive = this.live;
    this._listFilter = 'cart';
   }


  ngOnInit() {
    this._liveScoreService.getPlayer()
    .subscribe(live => {
      this.live = live;},
      error => this.errorMessage=<any>error);
     
   }
  }

