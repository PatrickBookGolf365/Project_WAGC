import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Renderer} from '@angular/core';
import { environment } from '../../../environments/environment';
import { tileLayer, latLng, marker, icon } from 'leaflet';
//import L from 'leaflet';

var apiToken = environment.mapbox;
//var map: any;
const defaultCoords: number[] = [40, -80]
const defaultZoom: number = 8

@Component({
  selector: 'app-test-geo',
  templateUrl: './test-geo.component.html',
  styleUrls: ['./test-geo.component.scss']
})
export class TestGeoComponent implements OnInit {
  
  @ViewChild('map') map;


  public pos: any;
  public myLat: any;
  public myLng: any; 
  

  constructor() {
    
   }

  ngOnInit() {
    this.GeoNavigator();
  }

  GeoNavigator(){
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
          this.myLat = position.coords.latitude;
          this.myLng = position.coords.longitude;
          var myDist = this.myLat + ' ' + this.myLng;
          console.log(myDist);

         
       });
    } else {
    console.log("Doesn't work!");
    }
   }

    options = {
     layers: [
       tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A',
       { 
         maxZoom: 18,
         attribution: '...' 
        }),
     ],
     zoom: 13.5,
     center: latLng(53.386012, -6.556897)
    
   };
}
