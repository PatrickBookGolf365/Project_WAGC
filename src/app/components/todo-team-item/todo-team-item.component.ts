import { Component, OnInit, Input } from '@angular/core';
import {TodoTeam} from '../../classes/todo-team';
import {TodoTeamService} from '../../services/todo-team.service';

@Component({
  selector: 'app-todo-team-item',
  templateUrl: './todo-team-item.component.html',
  styleUrls: ['./todo-team-item.component.scss']
})
export class TodoTeamItemComponent implements OnInit {
  
    @Input()
    private todoTeam: TodoTeam;
  
    constructor(private todoTeamService: TodoTeamService) { }
  
    ngOnInit() {
    }
  
    private removeTodoTeam(): void{
      this.todoTeamService.removeTodoTeam(this.todoTeam.id);
    }
  
  }
  