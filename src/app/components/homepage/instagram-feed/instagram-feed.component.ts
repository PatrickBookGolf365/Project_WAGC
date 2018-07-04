import { Component, OnInit } from '@angular/core';
import { InstagramFeedService } from '../services/weather.service';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {

  instaFeed;

  constructor(private _instagramFeed: InstagramFeedService) { }

  ngOnInit() {
    this._instagramFeed.getInstagramFeed()
    .subscribe(instaFeed => {
      this.instaFeed = instaFeed;
    });
  }

}
