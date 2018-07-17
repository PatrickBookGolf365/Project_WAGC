import { Component, OnInit } from '@angular/core';
import { MontgomorieService } from './services/montgomorie.service';
import { ActivatedRoute } from '@angular/router';
import { MapService } from './services/map.service';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  constructor(private _mont: MontgomorieService,
              private _map: MapService,
              private _route: ActivatedRoute) {}


  ngOnInit() {
    this._map.showMap(+this._route.snapshot.params['id']);
  }

}
