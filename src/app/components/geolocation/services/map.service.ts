import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

declare var L: any;

export class Hole {
  constructor(public id: number, public lat: number, public lng: number) { }
}

const HOLES = [
  new Hole(1, 53.387792, -6.569634),
  new Hole(2, 53.386737, -6.574668),
  new Hole(3, 53.387792, -6.569634),
  new Hole(4, 53.387792, -6.569634),
  new Hole(5, 53.387792, -6.569634),
  new Hole(6, 53.387792, -6.569634),
  new Hole(7, 53.387792, -6.569634),
  new Hole(8, 53.387792, -6.569634),
  new Hole(9, 53.387792, -6.569634),
  new Hole(10, 53.387792, -6.569634),
  new Hole(11, 53.387792, -6.569634),
  new Hole(12, 53.387792, -6.569634),
  new Hole(13, 53.387792, -6.569634),
  new Hole(14, 53.387792, -6.569634),
  new Hole(15, 53.387792, -6.569634),
  new Hole(16, 53.387792, -6.569634),
  new Hole(17, 53.387792, -6.569634),
  new Hole(18, 53.387792, -6.569634),
];

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  showMap(id: number) {
 // tslint:disable-next-line:no-shadowed-variable
        let map;

        map = L.map('map').setView([53.384973, -6.555245] , 14.6);

        // tslint:disable-next-line:max-line-length
        L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
          attribution: '',
          maxZoom: 18
        }).addTo(map);

      }

  getHoles() { return of(HOLES); }


  getHole(id: number | string) {
    return this.getHoles().pipe(
      map(holes => holes.find(hole => hole.id === +id))
      );
  }
}
