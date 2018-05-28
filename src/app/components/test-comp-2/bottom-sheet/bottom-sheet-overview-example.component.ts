import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { CourseDataService } from '../services/course-data.service';
import { HOLES_INFO } from '../services/hole';
import { IHoles } from '../services/holes.model';
import { GeoCoord } from '../services/geo-coord';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet.component.scss']
})

export class BottomSheetOverviewExampleSheetComponent implements OnInit {

     hole: any;
     holeHole: any;
     holePar: any;
     holeDesc: any;
     holeFly: any;

     myLat: any;
     myLng: any;
     metres: any;
     kilometres: any;
     miles: any;
     yards: any;
     errorMessage: any;

     private _earthRadiusInMeters = 6378137;
     private _earthRadiusInYards = 6975174.98;
     private _earthRadiusInKilometers = 6371;
     private _earthRadiusInMiles = 3960;

    openLink(event: MouseEvent): void {
      this.bottomSheetRef.dismiss();
      event.preventDefault();
    }


    constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
                private _courseDataService: CourseDataService,
                private _route: ActivatedRoute) { }

    ngOnInit() {
     this.Haversine();
     console.log(this.hole);
     console.log(this._courseDataService.getHoles());
   }



    Haversine(): void {
     if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition( x => {

       this.myLat = x.coords.latitude;
       this.myLng = x.coords.longitude;

    console.log(`longitude: ${ this.myLat } | latitude: ${ this.myLng }`);


     const myCoords: GeoCoord = {
       latitude: this.myLat,
       longitude: this.myLng
     };

     const dominos: GeoCoord = {
         latitude: 53.352454,
         longitude: -6.295462
     };

     this.metres = this.getDistanceInMeters(myCoords, dominos);
     this.yards = this.getDistanceInYards(myCoords, dominos);
     this.kilometres = this.getDistanceInKilometers(myCoords, dominos);
     this.miles = this.getDistanceInMiles(myCoords, dominos);

     this.metres = this.metres.toFixed(2);
     this.yards = this.yards.toFixed(2);
     this.kilometres = this.kilometres.toFixed(2);
     this.miles = this.miles.toFixed(2);
  });
 }

 }

 private _toRadians(value: number): number {
     return value * Math.PI / 180;
 }

 private _getDistance(coord1: GeoCoord, coord2: GeoCoord): number {
   const φ1 = this._toRadians(coord1.latitude);
   const φ2 = this._toRadians(coord2.latitude);
   const Δφ = this._toRadians(coord2.latitude - coord1.latitude);
   const Δλ = this._toRadians(coord2.longitude - coord1.longitude);

     // a = sin²(Δφ / 2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ / 2)

     const a = Math.pow(Math.sin(Δφ / 2), 2) +
             Math.cos(φ1) *
             Math.cos(φ2) *
             Math.pow(Math.sin(Δλ / 2), 2);
     // c = 2 ⋅ atan2(√a, √(1−a))
     return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
 }

 getDistanceInMeters(coord1: GeoCoord, coord2: GeoCoord): number {
     const c = this._getDistance(coord1, coord2);
     // d = R ⋅ c
     return this._earthRadiusInMeters * c;
 }

 getDistanceInYards(coord1: GeoCoord, coord2: GeoCoord): number {
   const c = this._getDistance(coord1, coord2);
   // d = R ⋅ c
   return this._earthRadiusInYards * c;
 }

   getDistanceInKilometers(coord1: GeoCoord, coord2: GeoCoord): number {
     const c = this._getDistance(coord1, coord2);
       // d = R ⋅ c
       return this._earthRadiusInKilometers * c;
  }

   getDistanceInMiles(coord1: GeoCoord, coord2: GeoCoord): number {
     const c = this._getDistance(coord1, coord2);
       // d = R ⋅ c
       return this._earthRadiusInMiles * c;
  }
}
