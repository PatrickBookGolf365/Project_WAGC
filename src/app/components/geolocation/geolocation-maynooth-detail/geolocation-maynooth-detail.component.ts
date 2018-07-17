import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MaynoothMapService } from '../services/maynooth-map.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { BottomSheetOverviewComponent } from '../bottom-sheet/bottom-sheet-overview.component';

@Component({
  selector: 'app-geolocation-maynooth-detail',
  templateUrl: './geolocation-maynooth-detail.component.html',
  styleUrls: ['./geolocation-maynooth-detail.component.scss']
})
export class GeolocationMaynoothDetailComponent implements OnInit {


  constructor(private _route: ActivatedRoute,
              private _maynooth: MaynoothMapService,
              private bottomSheet: MatBottomSheet) { }

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewComponent);
    }

  ngOnInit() {
    this._route.paramMap.
         subscribe((params: ParamMap) =>
         this._maynooth.showMap(+params.get('id'))
        );
  }

}

