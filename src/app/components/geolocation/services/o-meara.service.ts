import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class OMearaService {

  constructor() { }

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

export class OMearaHole {
  constructor(public id: number, public name: string, public lat: number, public lng: number) { }
}

const HOLES = [
  new OMearaHole(1, 'Hole 1', 53.390628, -6.559754),
  new OMearaHole(2, 'Hole 2', 53.390556, -6.554545),
  new OMearaHole(3, 'Hole 3', 53.390181, -6.548800),
  new OMearaHole(4, 'Hole 4', 53.388788, -6.543605),
  new OMearaHole(5, 'Hole 5', 53.387883, -6.546602),
  new OMearaHole(6, 'Hole 6', 53.385835, -6.546126),
  new OMearaHole(7, 'Hole 7', 53.384070, -6.541112),
  new OMearaHole(8, 'Hole 8', 53.384545, -6.545992),
  new OMearaHole(9, 'Hole 9', 53.386295, -6.548692),
  new OMearaHole(10, 'Hole 10', 53.389165, -6.551597),
  new OMearaHole(11, 'Hole 11', 53.391847, -6.551880),
  new OMearaHole(12, 'Hole 12', 53.388769, -6.555681),
  new OMearaHole(13, 'Hole 13', 53.386951, -6.550960),
  new OMearaHole(14, 'Hole 14', 53.383193, -6.550016),
  new OMearaHole(15, 'Hole 15', 53.382801, -6.547638),
  new OMearaHole(16, 'Hole 16', 53.383234, -6.557451),
  new OMearaHole(17, 'Hole 17', 53.383691, -6.552230),
  new OMearaHole(18, 'Hole 18', 53.386762, -6.559300),
];
