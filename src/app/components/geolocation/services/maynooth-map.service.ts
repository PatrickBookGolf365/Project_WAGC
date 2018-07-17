import { Injectable } from '@angular/core';

declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class MaynoothMapService {

  constructor() { }

  showMap(id: number) {
    // tslint:disable-next-line:no-shadowed-variable
           let map;
          // ../assets/img/map.svg
           const myIcon =  L.divIcon('my-div-icon');
           map = L.map('map').setView([53.381635, -6.590960] , 14.6);

           // tslint:disable-next-line:max-line-length
           L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjjjwiuit35ru2smgwllle9um/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
             attribution: '',
             maxZoom: 18,
           }).addTo(map);

           L.marker([53.381635, -6.590960], myIcon).addTo(map);
         }
}
