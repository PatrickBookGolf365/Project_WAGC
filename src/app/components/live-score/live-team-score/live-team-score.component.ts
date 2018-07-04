import { Component, OnInit, AfterViewInit } from '@angular/core';
import { LiveScoreService } from '../live-score.service';
import { ITeam } from './live-team-score';
import {Sort} from '@angular/material';


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
 
 
  // playerdata = [
  //   {players:{
  //     player:[
  //       {id: 1, position: 1, name: "patrick"},
  //       {id: 2, position: 5, name: "pat"},
  //       {id: 3, position: 3, name: "rick"},
  //       {id: 4, position: 6, name: "daniel"},
  //       {id: 5, position: 2, name: "dan"},
  //       {id: 6, position: 7, name: "iel"},
  //       {id: 7, position: 4, name: "ham"},
  //       {id: 8, position: 8, name: "pig"}
  //     ]
  //    }}
  // ];
  
 
  sortedData;
 
  constructor(public _liveScoreService:LiveScoreService) {
    // this.sortedData = this.playerdata;
   }

  ngOnInit(){

    this._liveScoreService.getRealJsonData()
    .subscribe(data => {
      this.data = data;},
    error => this.errorMessage=<any>error);
      }
     
      
//       sortData(sort: Sort) {
//         const data = this.playerdata;
//         if (!sort.active || sort.direction === '') {
//           this.sortedData = data;
//           return;
//         }
//         this.sortedData = data.sort((a, b) => {
//           const isAsc = sort.direction === 'asc';
//           switch (sort.active) {
//             case 'position': return compare(a.position, b.position, isAsc);
//             default: return 0;
//           }
//         });

// }
}

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }