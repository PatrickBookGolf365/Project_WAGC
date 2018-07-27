import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MaynoothMapService } from '../services/maynooth-map.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { MaynoothInfoBottomSheetComponent } from '../maynooth-info-bottom-sheet/dublin-bus-bottom-sheet/maynooth-info-bottom-sheet';
import { LocalInfoBottomSheetComponent } from '../maynooth-info-bottom-sheet/local-info-bottom-sheet/local-info-bottom-sheet.component';

@Component({
  selector: 'app-geolocation-maynooth-detail',
  templateUrl: './geolocation-maynooth-detail.component.html',
  styleUrls: ['./geolocation-maynooth-detail.component.scss']
})
export class GeolocationMaynoothDetailComponent implements OnInit {


  constructor(private _route: ActivatedRoute,
              private _maynooth: MaynoothMapService,
              private bottomSheet: MatBottomSheet) { }

  ngOnInit() {
    this._route.paramMap.
         subscribe((params: ParamMap) =>
         this._maynooth.showMap(+params.get('id'))
        );
  }

  busBottomSheet(): void {
    this.bottomSheet.open(MaynoothInfoBottomSheetComponent);
  }

  localBottomSheet(): void {
    this.bottomSheet.open(LocalInfoBottomSheetComponent);
  }
}

