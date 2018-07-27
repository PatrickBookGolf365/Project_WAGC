import { Component } from '@angular/core';
import { TodoService} from './services/todo.service';
import {TodoTeamService} from './services/todo-team.service';

// import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(private todoservice: TodoService, private todoTeamService: TodoTeamService){
    
  }
}
