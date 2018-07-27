import { Component, OnInit } from '@angular/core';
import { InstagramFeedService } from '../services/weather.service';

@Component({
  selector: 'app-instagram-feed',
  templateUrl: './instagram-feed.component.html',
  styleUrls: ['./instagram-feed.component.scss']
})
export class InstagramFeedComponent implements OnInit {

  instaFeed;
  title = 'title';
  // tslint:disable-next-line:max-line-length
  link = 'https://scontent.cdninstagram.com/vp/0732e16b298f133683ce204717f0af87/5B5A8CE5/t50.2886-16/36945138_1068663479958683_2957417478189219840_n.mp4';

  constructor(private _instagramFeed: InstagramFeedService) { }

  ngOnInit() {
    this._instagramFeed.getInstagramFeed()
    .subscribe(instaFeed => {
      this.instaFeed = instaFeed;
    });
  }

}
