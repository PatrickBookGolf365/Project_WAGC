import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-bottom-sheet-overview',
  templateUrl: './maynooth-info-bottom-sheet.html',
  styleUrls: ['./maynooth-info-bottom-sheet.scss']
})
export class MaynoothInfoBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<MaynoothInfoBottomSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
