import { Component, OnInit, Input } from '@angular/core';
import { LiveScoreService } from '../live-score.service';
import { TodoService} from '../../../services/todo.service';
import {Todo} from '../../../classes/todo';




import {Sort} from '@angular/material';

@Component({
  selector: 'app-live-player-score',
  templateUrl: './live-player-score.component.html',
  styleUrls: ['./live-player-score.component.scss']
})
export class LivePlayerScoreComponent implements OnInit {

  @Input()
  private todo: Todo;

  
  private todoFirstname: string;
  private todoLastname: string;
  errorMessage: string;
  playerdata ;
  data;
 

  ngOnInit(){

    this._liveScoreService.getRealJsonData()
    .subscribe(playerdata => {
      this.playerdata = playerdata;},
    error => this.errorMessage=<any>error);
      }
  
  

   constructor(public _liveScoreService:LiveScoreService, private todoService:TodoService) {
    this.todoFirstname = '';
    this.todoLastname = '';
    }

    private addTodo(): void{
      this.todoService.addTodo(this.todoFirstname, this.todoLastname);
      
      
    }

    private removeTodo(): void {
      this.todoService.removeTodo(this.todo.id);
    }


 
}