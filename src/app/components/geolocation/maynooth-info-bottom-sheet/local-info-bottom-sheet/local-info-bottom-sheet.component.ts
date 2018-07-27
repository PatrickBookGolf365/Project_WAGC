import { Component, OnInit } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'app-local-info-bottom-sheet',
  templateUrl: './local-info-bottom-sheet.component.html',
  styleUrls: ['./local-info-bottom-sheet.component.scss']
})
export class LocalInfoBottomSheetComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<LocalInfoBottomSheetComponent>) { }

  ngOnInit() {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

}
