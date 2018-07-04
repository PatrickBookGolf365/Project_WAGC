import { Component, OnInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';
import {Sort} from '@angular/material';

@Component({
  selector: 'app-live-player-score',
  templateUrl: './live-player-score.component.html',
  styleUrls: ['./live-player-score.component.scss']
})
export class LivePlayerScoreComponent implements OnInit {

  errorMessage: string;
  playerdata ;
  data;
  playerinfo = [
    {
      event: {
        tournament: {
          players: {
            player: [
              {
                firstname: "Hannah",
                totals: {
                  position: "1",
                },
              },

              {
                firstname: "Bannana",
                totals: {
                  position: "8",
                },
              },

              {
                firstname: "Tanna",
                totals: {
                  position: "4",
                },
              },

              {
                firstname: "FriedHamma",
                totals: {
                  position: "7",
                }
              }
            ]
          }
        }
      }
    }
  ]

  ngOnInit(){

    this._liveScoreService.getRealJsonData()
    .subscribe(playerdata => {
      this.playerdata = playerdata;},
    error => this.errorMessage=<any>error);
      }
  
  
  
//   sortedData;


  
 
   constructor(public _liveScoreService:LiveScoreService) {
    //  this.sortedData = this.playerinfo;
    }
 
//       sortData(sort: Sort) {
//         const data = this.playerinfo;
//         if (!sort.active || sort.direction === '') {
//           this.sortedData = data;
//           return;
//         }
//         this.sortedData = data.sort((a, b) => {
//           const isAsc = sort.direction === 'asc';
//           switch (sort.active) {
//             case 'position': return compare(a.players, b.players, isAsc);
//             default: return 0;
//           }
//         });

// }

}

function compare(a, b, isAsc) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}