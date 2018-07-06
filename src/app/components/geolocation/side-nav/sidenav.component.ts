import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSidenav, MatBottomSheet } from '@angular/material';
import { GeoCoord } from '../services/geo-coord';
import { CourseDataService } from '../services/course-data.service';
import { IHoles } from '../services/holes.model';
import { ActivatedRoute } from '@angular/router';
import {trigger, transition, style, animate, query, stagger} from '@angular/animations';

declare var holes: IHoles[];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
  trigger('listAnimation', [
    transition('* => *', [ // each time the binding value changes
      query(':leave', [
        stagger(100, [
          animate('0.5s', style({ opacity: 0 }))
        ])
      ]),
      query(':enter', [
        style({ opacity: 0 }),
        stagger(100, [
          animate('0.5s', style({ opacity: 1 }))
        ])
      ])
    ])
  ])
]
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;
  @ViewChild('button') button: ElementRef;

  private _earthRadiusInMeters = 6378137;
  private _earthRadiusInYards = 6975174.98;
  private _earthRadiusInKilometers = 6371;
  private _earthRadiusInMiles = 3960;

  ranVar;
  holeId: any;
  holes: any;
  hole: any;
  holeHole: any;
  holePar: any;
  holeDesc: any;
  holeFly: any;
  reason = '';
  myLat: any;
  myLng: any;
  courseLat: any;
  courseLng: any;
  metres: any;
  kilometres: any;
  miles: any;
  yards: any;
  errorMessage: any;


  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(private bottomSheet: MatBottomSheet,
              private _courseDataService: CourseDataService,
              private _route: ActivatedRoute) {}

  openBottomSheet(): void { window.location.reload(true); }

  refreshPage() {
  }

  getHolesId(id: number) {
    this._courseDataService.getHoleById(id).subscribe(
    hole => this.hole = hole
    );
  }

  ngOnInit() {
    this.Haversine();
    this.holes = this._courseDataService.getSideNavHoles();
    this.hole = +this._route.snapshot.paramMap.get('id');
    this._courseDataService.showMap(+this._route.snapshot.params['id']);
      if (this.hole) {
      const id = +this.hole;
      this.getHolesId(id);
      console.log(id);
    }
    console.log(this.hole);
  }

  Haversine(): void {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition( x => {

      this.myLat = x.coords.latitude;
      this.myLng = x.coords.longitude;

      this.courseLat = this._courseDataService.getCoordsLat;
      this.courseLng = this._courseDataService.getCoordsLng;


    console.log(`longitude: ${ this.myLat } | latitude: ${ this.myLng }`);
    // console.log(`longitude: ${ this.myLat } | latitude: ${ this.myLng }`);
    // get courseLat+Lng working

    const myCoords: GeoCoord = {
      latitude: this.myLat,
      longitude: this.myLng
    };

    const dominos: GeoCoord = {
      latitude: 53.354307,
      longitude:  -6.284543
        // latitude: this.courseLat,
        // longitude: this.courseLng
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
