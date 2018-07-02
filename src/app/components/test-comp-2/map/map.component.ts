import { Component, OnInit } from '@angular/core';
import { CourseDataService } from '../services/course-data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private _courseDataService: CourseDataService,
    private _route: ActivatedRoute) {}


  ngOnInit() {
  // this._courseDataService.showMap(+this._route.snapshot.params['id']);
  }
}
