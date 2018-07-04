import { Pipe, PipeTransform } from '@angular/core';
import { ITeam } from '../../components/live-score/live-team-score/live-team-score';

@Pipe({
  name: 'teamFilter'
})
export class SortPipe implements PipeTransform {
  transform(value: any[], args: string): any {
    if(args == 'up'){
        return value.sort();
      
    } else if (args == 'down'){
        return value.sort();
    }
  }
  
}
