import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { MontgomorieService, Hole } from '../services/montgomorie.service';
import { switchMap, map } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router} from '@angular/router';
import { MapService } from '../services/map.service';
import { HaversineService } from '../services/haversine.service';
import { GeoCoord } from '../services/geo-coord';

declare var L: any;

@Component({
  selector: 'app-geolocation-detail',
  templateUrl: './geolocation-detail.component.html',
  styleUrls: ['./geolocation-detail.component.scss']
})
export class GeolocationDetailComponent implements OnInit {

  hole$: Observable<Hole>;

  hole;
  hole1;
  myLat: any;
  myLng: any;
  courseLat: any;
  courseLng: any;
  metres: any;
  kilometres: any;
  miles: any;
  yards: any;
  latId;
  lngId;
  id;


  constructor(private _mont: MontgomorieService,
              private _route: ActivatedRoute,
              private _haversine: HaversineService,
              private router: Router,
              private _map: MapService) {}

      ngOnInit() {
        this.hole$ = this._route.paramMap.pipe(
          switchMap((params: ParamMap) =>
          this._mont.getHole(params.get('id')))
        );

         this._route.paramMap.
         subscribe((params: ParamMap) =>
         this._mont.showMap(+params.get('id'))
        );

        this.Haversine();

      }

      Back() {
        this.router.navigate(['../geolocation']);
      }

      Haversine(): void {

        const id = +this._route.snapshot.paramMap.get('id');

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition( x => {

          this.myLat = x.coords.latitude;
          this.myLng = x.coords.longitude;

         this._mont.getHoleLat(id).subscribe(hole => this.courseLat = hole);
         this._mont.getHoleLng(id).subscribe(hole => this.courseLng = hole);

        console.log(`longitude: ${ this.courseLat } | latitude: ${ this.courseLng }`);
        console.log(`longitude: ${ this.myLat } | latitude: ${ this.myLng }`);


        const myCoords: GeoCoord = {
          latitude: this.myLat,
          longitude: this.myLng
        };

        const courseCoords: GeoCoord = {
          latitude: this.courseLat,
          longitude: this.courseLng
        };

        this.metres = this._haversine.getDistanceInMeters(myCoords, courseCoords);
        this.yards = this._haversine.getDistanceInYards(myCoords, courseCoords);
        this.kilometres = this._haversine.getDistanceInKilometers(myCoords, courseCoords);
        this.miles = this._haversine.getDistanceInMiles(myCoords, courseCoords);

        this.metres = this.metres.toFixed(2);
        this.yards = this.yards.toFixed(2);
        this.kilometres = this.kilometres.toFixed(2);
        this.miles = this.miles.toFixed(2);
     });
    }
  }
}

