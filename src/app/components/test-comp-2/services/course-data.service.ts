import { Injectable } from '@angular/core';
import { IHoles } from './holes.model';
import { HOLES_INFO } from './hole';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  // hole: IHoles[] = [];

  // tslint:disable-next-line:max-line-length
  _montURL = 'https://gist.githubusercontent.com/Cavinnnn/f8a22ecb12fe1be811194131393895eb/raw/ebdfebf1ee157875eeeb4c2340465edaf6b3e5eb/Montgomerie';


  constructor(private _http: HttpClient) {}

    getSideNavHoles(): IHoles[] {
      return HOLES_INFO;
    }


  // getHoleById(id: number) {
  //   return HOLES_INFO.find(hole => hole.id === id );
  // }

  getHoles(): Observable<IHoles[]> {
    return this._http.get<IHoles[]>(this._montURL)
    .pipe(tap(data => console.log('All ' + JSON.stringify(data))));
  }


   getHoleById(id: number) {
     return this.getHoles()
     .pipe(map((holes: IHoles[]) => holes.find(hole => hole.id === id)));
    //  ,
    //        switchMap(() => interval(500)));
   }

 getHoleBy(id: number) {
   return HOLES_INFO.find(hole => hole.id === id );
 }
}

