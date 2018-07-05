import { Component, OnInit, Output } from '@angular/core';
import { CourseDataService } from './services/course-data.service';
import { IHoles } from './services/holes.model';
import { HOLES_INFO } from './services/hole';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-geolocation',
  templateUrl: './geolocation.component.html',
  styleUrls: ['./geolocation.component.scss'],
})
export class GeolocationComponent implements OnInit {

  bottomSheetRef: any;
  showFiller = false;

  holes: IHoles[];

  constructor(private _courseDataService: CourseDataService) {}


  ngOnInit() {}



}
