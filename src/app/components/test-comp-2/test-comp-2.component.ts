import { Component, OnInit } from '@angular/core';
import { HaversineService, GeoCoord } from "ng2-haversine";



@Component({
  selector: 'app-test-comp-2',
  templateUrl: './test-comp-2.component.html',
  styleUrls: ['./test-comp-2.component.scss']
})
export class TestComp2Component implements OnInit {

   private myLat: any;
   private myLng: any;

  constructor(private _haversineService: HaversineService) { }

  ngOnInit() {
    this.tryHaversine();
  }


  tryHaversine(): void {

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
        latitude: 53.3607937,
        longitude: -6.2830543
    };

    let meters = this._haversineService.getDistanceInMeters(myCoords, dominos);
    let kilometers = this._haversineService.getDistanceInKilometers(myCoords, dominos);
    let miles = this._haversineService.getDistanceInMiles(myCoords, dominos);

    console.log(`
        The distance between myself and dominos is:
            - ${meters} meters
            - ${kilometers} kilometers
            - ${miles} miles
      `);
     });
   }
}


}
