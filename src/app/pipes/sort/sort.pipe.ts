import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from '../../components/live-score/live-team-score/live-team-score';

@Pipe({
  name: 'teamFilter'
})
export class SortPipe implements PipeTransform {

  transform(data: ITeam[], searchTerm:string){

  
  if(!data || !searchTerm){
    return data;
  }

    return data.filter(data => 
      data.teamname.toLowerCase().indexOf(searchTerm.toLocaleLowerCase()) !== -1);
  }
}
