import { Component, OnInit, Output } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/do";

declare var meters: any;
declare var yards: any;
declare var kilometres: any;
declare var miles: any;



@Component({
  selector: 'app-test-comp-2',
  templateUrl: './test-comp-2.component.html',
  styleUrls: ['./test-comp-2.component.scss']
})
export class TestComp2Component implements OnInit {
  
  myLat: any;
  myLng: any;
  metres: any;
  kilometres: any;
  miles: any;
  yards: any;

  private _earthRadiusInMeters: number = 6378137;
  private _earthRadiusInYards: number = 6975174.98;
  private _earthRadiusInKilometers: number = 6371;
  private _earthRadiusInMiles: number = 3960;

  constructor() {
   
   }

  ngOnInit() {
    this.Haversine();
  }


  Haversine(): void {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(x => {
                this.myLat = x.coords.latitude;
                this.myLng = x.coords.longitude;
              
        console.log(`longitude: ${ this.myLat } | latitude: ${ this.myLng }`)
          
        
        let myCoords: GeoCoord = {
          latitude: this.myLat,
          longitude: this.myLng
        };

        let dominos: GeoCoord = {
            latitude: 53.355766,
            longitude: -6.280762
        };

        this.metres = this.getDistanceInMeters(myCoords, dominos);
        this.yards = this.getDistanceInYards(myCoords, dominos);
        this.kilometres = this.getDistanceInKilometers(myCoords, dominos);
        this.miles = this.getDistanceInMiles(myCoords, dominos);
        
     });
   }
  }

    private _toRadians(value: number): number {
        return value * Math.PI / 180;
    }

    private _getDistance(coord1: GeoCoord, coord2: GeoCoord): number {
        let φ1 = this._toRadians(coord1.latitude);
        let φ2 = this._toRadians(coord2.latitude);
        let Δφ = this._toRadians(coord2.latitude - coord1.latitude);
        let Δλ = this._toRadians(coord2.longitude - coord1.longitude);

        // a = sin²(Δφ / 2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ / 2)

        let a = Math.pow(Math.sin(Δφ / 2), 2) +
                Math.cos(φ1) *
                Math.cos(φ2) *
                Math.pow(Math.sin(Δλ / 2), 2);
        // c = 2 ⋅ atan2(√a, √(1−a))
        return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    }

    getDistanceInMeters(coord1: GeoCoord, coord2: GeoCoord): number {
        let c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMeters * c;
    }

    getDistanceInYards(coord1: GeoCoord, coord2: GeoCoord): number {
      let c = this._getDistance(coord1, coord2);
      // d = R ⋅ c
      return this._earthRadiusInYards * c;
  }

    getDistanceInKilometers(coord1: GeoCoord, coord2: GeoCoord): number {
        let c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInKilometers * c;
    }
    
    getDistanceInMiles(coord1: GeoCoord, coord2: GeoCoord): number {
        let c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMiles * c;
    }

}


