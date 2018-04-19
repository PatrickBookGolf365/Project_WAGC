import { Component, OnInit } from '@angular/core';
import { YelpService} from '../events.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  errorMessage: string;
  yelp: any[] = [];

  constructor(public _newsService:YelpService) { }
  

  ngOnInit() {
    this._newsService.getYelp()
    .subscribe(yelp => { this.yelp = yelp;}, error => this.errorMessage=<any>error);
  }
}
