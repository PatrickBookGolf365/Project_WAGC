import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { AgmMap } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  lat = 53.394427;
  lng = -6.560887;
  zoom: number = 17;

  constructor() { }

  ngOnInit() {

  }

}
