import { Component, OnInit, AfterViewInit, Input } from '@angular/core';
import { LiveScoreService } from '../live-score.service';
import { TodoTeamService} from '../../../services/todo-team.service';
import { TodoTeam } from '../../../classes/todo-team';

import { ITeam } from './live-team-score';
import { Sort } from '@angular/material';


@Component({
  selector: 'app-live-team-score',
  templateUrl: './live-team-score.component.html',
  styleUrls: ['./live-team-score.component.scss']
})

export class LiveTeamScoreComponent implements OnInit {

  @Input()
  private todoTeam: TodoTeam;

  private todoTeamText: string;
  errorMessage: string;
  hideStuff = [];
  data;

  constructor(public _liveScoreService: LiveScoreService, private todoTeamService: TodoTeamService) {
    this.todoTeamText = '';
  }


  ngOnInit() {
    this._liveScoreService.getRealJsonData()
      .subscribe(data => {
        this.data = data;
      },
        error => this.errorMessage = <any>error);
  }

  private removeTodoTeam(): void{
    this.todoTeamService.removeTodoTeam(this.todoTeam.id);
  }

  private addTodoTeam(): void{
    this.todoTeamService.addTodoTeam(this.todoTeamText);
    this.todoTeamText = '';
  }




}

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }
// class Defualt {
//   private profiles: string;
// }

// get default(){
//       return this.profiles 
// }
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
