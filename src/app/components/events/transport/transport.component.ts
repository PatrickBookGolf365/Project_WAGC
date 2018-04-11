import { Component, OnInit } from '@angular/core';
import { trigger, state, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-transport',
  templateUrl: './transport.component.html',
  styleUrls: ['./transport.component.scss'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity: 1}))
      ])
    ])
  ]
})
export class TransportComponent{
  
  zoom: number = 14;

  displayedColumns = ['bus', 'times'];
  dataSource = ELEMENT_DATA;
  NationalAcademylat = 53.394427;
  NationalAcademylng = -6.560887;
  HotelReceptionlat = 53.391241;
  HotelReceptionlng = -6.566353;
  ClubHouseRoundaboutlat = 53.390675;
  ClubHouseRoundaboutlng = -6.567644;
  Cartondefaultlat = 53.390995;
  Cartondefaultlng = -6.566462;
  MaynoothDefaultlat = 53.380809; 
  MaynoothDefaultlng = -6.594588;
  ApartmentComplexlat = 53.380337;
  ApartmentComplexlng = -6.595629;
  PhoenixRestaurantlat = 53.383985;
  PhoenixRestaurantlng = -6.604083;
  PedestrianCrosslat = 53.382562;
  PedestrianCrosslng = -6.600772;
}

export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, name: '11:30', weight: 1.0079, symbol: 'H'},
  {position: 2, name: '11:00', weight: 4.0026, symbol: 'He'},
  
  
];
