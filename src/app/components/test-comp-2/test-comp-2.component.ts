import { Component, OnInit, Output } from '@angular/core';
import { CourseDataService } from './services/course-data.service';
import { IHoles } from './services/holes.model';
import { HOLES_INFO } from './services/hole';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-test-comp-2',
  templateUrl: './test-comp-2.component.html',
  styleUrls: ['./test-comp-2.component.scss'],
})
export class TestComp2Component implements OnInit {

  bottomSheetRef: any;
  showFiller = false;

  holes: IHoles[];

  constructor(private _courseDataService: CourseDataService) {}


  ngOnInit() {}



}
