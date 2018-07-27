import { Injectable } from '@angular/core';
import { TodoTeam} from '../classes/todo-team';

@Injectable({
  providedIn: 'root'
})
export class TodoTeamService {

private todosTeam: TodoTeam[];
private nextId: number;

  constructor() { 
   let todosTeam = this.getTodosTeam();

    if(todosTeam.length == 0){
      this.nextId = 0;
    } else {
      let maxId = todosTeam[todosTeam.length -1].id;
      this.nextId = maxId + 1;
    }
  }

  public addTodoTeam(teamName: string): void{
    let todoTeam = new TodoTeam(this.nextId, teamName);
    let todosTeam = this.getTodosTeam();
    todosTeam.push(todoTeam);

    this.setLocalStorageTodosTeam(todosTeam);
    this.nextId;
  }

  public getTodosTeam(): TodoTeam[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todosTeam'));
    return localStorageItem == null ? [] : localStorageItem.todosTeam;
  }

  public removeTodoTeam(id: number): void{
    let todosTeam = this.getTodosTeam();
   todosTeam = todosTeam.filter((todoTeam) => todoTeam.id !== id);
   this.setLocalStorageTodosTeam(todosTeam);
  }

  private setLocalStorageTodosTeam(todosTeam: TodoTeam[]): void {
    localStorage.setItem('todosTeam', JSON.stringify({todosTeam: todosTeam}));
  }
}
