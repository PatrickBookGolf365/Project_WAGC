import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer} from '@angular/core';
import { environment } from '../../../environments/environment';
import { tileLayer, latLng, marker, icon } from 'leaflet';
// import L from 'leaflet';


// var map: any;

@Component({
  selector: 'app-test-geo',
  templateUrl: './test-geo.component.html',
  styleUrls: ['./test-geo.component.scss']
})
export class TestGeoComponent implements OnInit {

  public pos: any;
  public myLat: any;
  public myLng: any;

  constructor() {

   }

  ngOnInit() {
  }

    // tslint:disable-next-line:member-ordering
    options = {
     layers: [
       // tslint:disable-next-line:max-line-length
       tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A',
       {
         maxZoom: 18,
         attribution: '...'
        }),
     ],
     zoom: 16.5,
     center: latLng(53.386012, -6.556897),
     pitch: 60, // pitch in degrees
   };
}
