import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

declare var L: any;


@Injectable({
  providedIn: 'root'
})
export class MontgomorieService {

  getHoles() { return of(HOLES); }


  getHole(id: number | string) {
    return this.getHoles().pipe(
      map(holes => holes.find(hole => hole.id === +id))
      );
  }

  getHoleLat(id: number | string) {
    return this.getHoles().pipe(
      map(holes => holes.find(hole => hole.id === +id).lat)
      );
  }

  getHoleLng(id: number | string) {
    return this.getHoles().pipe(
      map(holes => holes.find(hole => hole.id === +id).lng)
      );
  }

  showMap(id: number) {
    // tslint:disable-next-line:no-shadowed-variable
    let map;
    let coordsLng;
    let coordsLat;

    map = L.map('map').setView([53.384767, -6.564879] , 14);

    // tslint:disable-next-line:max-line-length
    L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
      attribution: '',
      maxZoom: 16,
    }).addTo(map);

     coordsLng = HOLES.find(hole => hole.id === id).lng;
     coordsLat = HOLES.find(hole => hole.id === id).lat;

     map.fitBounds([
       [coordsLat, coordsLng]
     ]);
  }
}

export class Hole {
  constructor(public id: number, public name: string, public lat: number, public lng: number) { }
}

const HOLES = [
  new Hole(1, 'Hole 1', 53.387792, -6.569634),
  new Hole(2, 'Hole 2', 53.386737, -6.574668),
  new Hole(3, 'Hole 3', 53.385048, -6.572094),
  new Hole(4, 'Hole 4', 53.382720, -6.565754),
  new Hole(5, 'Hole 5', 53.386264, -6.568703),
  new Hole(6, 'Hole 6', 53.383838, -6.563968),
  new Hole(7, 'Hole 7', 53.383164, -6.561684),
  new Hole(8, 'Hole 8', 53.381575, -6.568951),
  new Hole(9, 'Hole 9', 53.381030, -6.563088),
  new Hole(10, 'Hole 10', 53.379296, -6.556906),
  new Hole(11, 'Hole 11', 53.378104, -6.548422),
  new Hole(12, 'Hole 12', 53.379468, -6.548469),
  new Hole(13, 'Hole 13', 53.378950, -6.543071),
  new Hole(14, 'Hole 14', 53.380214, -6.547637),
  new Hole(15, 'Hole 15', 53.380593, -6.555184),
  new Hole(16, 'Hole 16', 53.382494, -6.560319),
  new Hole(17, 'Hole 17', 53.384131, -6.559146),
  new Hole(18, 'Hole 18', 53.386657, -6.565981),
];

