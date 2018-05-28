import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav, MatBottomSheetRef, MatBottomSheet } from '@angular/material';
import { GeoCoord } from '../services/geo-coord';
import { CourseDataService } from '../services/course-data.service';
import { IHoles } from '../services/holes.model';
import { HOLES_INFO } from '../services/hole';
import { ActivatedRoute } from '@angular/router';
import { BottomSheetOverviewExampleSheetComponent } from '../bottom-sheet/bottom-sheet-overview-example.component';
import { Location } from '@angular/common';

declare var holes: IHoles[];

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @ViewChild('sidenav') sidenav: MatSidenav;

  ranVar;
  holeId: any;
  holes: any;
  hole: any;
  holeHole: any;
  holePar: any;
  holeDesc: any;
  holeFly: any;
  reason = '';

  close(reason: string) {
    this.reason = reason;
    this.sidenav.close();
  }

  constructor(private bottomSheet: MatBottomSheet,
              private _courseDataService: CourseDataService,
              private _route: ActivatedRoute) { }

  openBottomSheet(): void {
     window.location.reload();
    this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
  }

  refreshPage() {
  }

  getHolesId(id: number) {
    this._courseDataService.getHoleById(id).subscribe(
    hole => this.hole = hole
    );
  }

  ngOnInit() {
    this.holes = this._courseDataService.getSideNavHoles();
    this.hole = +this._route.snapshot.paramMap.get('id');
      if (this.hole) {
      const id = +this.hole;
      this.getHolesId(id);
      console.log(id);
    }
    console.log(this.hole);

  }
}





    // this.hole = this._courseDataService.getHoleBy(+this._route.snapshot.params.id);
    // this.holeId = this.hole.id;
    //  this.holeHole = this.hole.hole;
    //  this.holePar = this.hole.par;
    //  this.holeDesc = this.hole.description;
    //  this.holeFly = this.hole.flyover;
    // console.log(this.holeHole, this.holePar, this.holeDesc, this.holeFly);
