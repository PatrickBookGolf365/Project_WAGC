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
  link = 'https://scontent.cdninstagram.com/vp/9c0895b9ad69153a42bd0230f29ec056/5B515265/t50.2886-16/36945138_1068663479958683_2957417478189219840_n.mp4';

  constructor(private _instagramFeed: InstagramFeedService) { }

  ngOnInit() {
    this._instagramFeed.getInstagramFeed()
    .subscribe(instaFeed => {
      this.instaFeed = instaFeed;
    });
  }

}
