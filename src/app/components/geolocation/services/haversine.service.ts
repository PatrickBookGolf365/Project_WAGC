import { Injectable } from '@angular/core';
import { GeoCoord } from './geo-coord';
@Injectable({
  providedIn: 'root'
})
export class HaversineService {

  constructor() { }

  private _earthRadiusInMeters = 6378137;
  private _earthRadiusInYards = 6975174.98;
  private _earthRadiusInKilometers = 6371;
  private _earthRadiusInMiles = 3960;

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
