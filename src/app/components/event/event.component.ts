import { Component, OnInit } from '@angular/core';
import { YelpService} from './event.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare var Twitch: any;

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  errorMessage: string;
  yelp: any[] = [];

  zoom = 17;
  lat = 53.360258;
  lng = -6.265690;

  constructor(public _newsService: YelpService) { }

  ngOnInit() {
    this._newsService.getYelp()
    .subscribe(yelp => {
      this.yelp = yelp;
    }, error => this.errorMessage = <any>error);

  }
}
