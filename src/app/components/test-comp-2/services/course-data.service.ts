import { Injectable } from '@angular/core';
import { IHoles } from './holes.model';
import { HOLES_INFO } from './hole';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map, switchMap } from 'rxjs/operators';
import { interval } from 'rxjs/observable/interval';

declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class CourseDataService {

  // hole: IHoles[] = [];

  // tslint:disable-next-line:max-line-length
  _montURL = 'https://gist.githubusercontent.com/Cavinnnn/f8a22ecb12fe1be811194131393895eb/raw/ebdfebf1ee157875eeeb4c2340465edaf6b3e5eb/Montgomerie';

  constructor(private _http: HttpClient) {}


  showMap(id: number) {

    // tslint:disable-next-line:no-shadowed-variable
    let map;
    // tslint:disable-next-line:prefer-const
    let defaultCoords;
    // tslint:disable-next-line:prefer-const
    let defaultZoom;

    map = L.map('map');


   // tslint:disable-next-line:max-line-length
   L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
     attribution: '',
     maxZoom: 18,
     center: [-122.420679, 37.772537],
     zoom: 13,
   }).addTo(map);

  }

    getSideNavHoles(): IHoles[] {
      return HOLES_INFO;
    }


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

