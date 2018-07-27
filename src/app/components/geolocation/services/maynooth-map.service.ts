import { Injectable } from '@angular/core';

declare var L: any;

@Injectable({
  providedIn: 'root'
})
export class MaynoothMapService {

  constructor() { }

    showMap(id: number) {
          let map;
          let iconUrl;
          let town;
          let dublinBusStop;
          let maynoothApartmentComplex;
          let maynoothPhoenixRestaurant;
          let maynoothPedestrianCrossing;
          let myLat;
          let myLng;
          let currentLocation;

          iconUrl = L.icon({
            iconUrl: './assets/img/blue-map.png',
            iconSize:     [30, 50],
            // popupAnchor:  [10, 10]
        });

        navigator.geolocation.getCurrentPosition( x => {

         myLat = x.coords.latitude;
         myLng = x.coords.longitude;

          console.log(myLat, myLng);


           map = L.map('map').setView([53.381065, -6.593579] , 15);


           // tslint:disable-next-line:max-line-length
           L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjjjwiuit35ru2smgwllle9um/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
             attribution: '',
             maxZoom: 18,
           }).addTo(map);

            town = L.marker([53.381635, -6.590960], {icon: iconUrl}).addTo(map);
          //  // Dublin Bus
            dublinBusStop = L.marker([53.379608, -6.588764], {icon: iconUrl}).addTo(map);
          //  // Maynooth Stops
            maynoothApartmentComplex = L.marker([53.385671, -6.596865], {icon: iconUrl}).addTo(map);
            maynoothPhoenixRestaurant = L.marker([53.384121, -6.603546], {icon: iconUrl}).addTo(map);
            maynoothPedestrianCrossing = L.marker([53.381920, -6.601228], {icon: iconUrl}).addTo(map);
           // Current Location
           currentLocation = L.marker([myLat, myLng], {icon: iconUrl}).addTo(map);

           town.bindPopup('<b>Hello!</b><br>This is maynooths main street.').openPopup();
           dublinBusStop.bindPopup('<b>66 & 67 bus stop!</b><br>Located across from the glenroyal hotel.');
           maynoothApartmentComplex.bindPopup('<b>Maynooth Apartment Complex</b><br>First stop for the travelling to Carton House.');
           maynoothPhoenixRestaurant.bindPopup('<b>Maynooth Pheonix Restaurant</b><br>Second bus stop for travelling to Carton House.');
           maynoothPedestrianCrossing.bindPopup('<b>Maynooth Pedestrian Crossing</b><br>Last bus stop for travelling to Carton House.');
           currentLocation.bindPopup('<b>Current Location</b>');
          });
         }
}
