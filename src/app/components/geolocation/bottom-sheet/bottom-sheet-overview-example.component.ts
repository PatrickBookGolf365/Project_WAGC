import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';
import { CourseDataService } from '../services/course-data.service';
import { HOLES_INFO } from '../services/hole';
import { IHoles } from '../services/holes.model';
import { GeoCoord } from '../services/geo-coord';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bottom-sheet-overview-example',
  templateUrl: './bottom-sheet-overview-example-sheet.html',
  styleUrls: ['./bottom-sheet.component.scss']
})

export class BottomSheetOverviewExampleSheetComponent implements OnInit {

     hole: any;
     holeHole: any;
     holePar: any;
     holeDesc: any;
     holeFly: any;


    openLink(event: MouseEvent): void {
      this.bottomSheetRef.dismiss();
      event.preventDefault();
    }


    constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheetComponent>,
                private _courseDataService: CourseDataService,
                private _route: ActivatedRoute) { }

    ngOnInit() {
    //  this.Haversine();
     console.log(this.hole);
     console.log(this._courseDataService.getHoles());
   }
}
