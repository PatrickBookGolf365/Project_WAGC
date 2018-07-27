import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, Component } from '@angular/core';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { NavigationComponent } from './components/navigation/nav/navigation.component';
import { HomepageComponent } from './components//homepage/homepage.component';
import { LiveScoreComponent } from './components//live-score/live-score.component';
import { TransportComponent } from './components/transport/transport.component';
import { TeamProfilesComponent } from './components/team-profiles/team-profiles.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';

import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { NewsComponent } from './components/additional-info/news/news.component';
import { AboutComponent } from './components/additional-info/about/about.component';
import { EligibilityComponent } from './components/additional-info/eligibitity/eligibility.component';
import { ScheduleComponent } from './components/additional-info/schedule/schedule.component';
import { ContactComponent } from './components/additional-info/contact/contact.component';

import { WeatherService, InstagramFeedService} from './components/homepage/services/weather.service';
import { NewsService} from './components/additional-info/news/news.service';
import { HomeNewsService } from './components/homepage/services/weather.service';
import { YelpService } from './components/event/event.service';
import { QuoteService } from './shared/quote.service';
import { LiveScoreService } from './components/live-score/live-score.service';
import { TodoService} from './services/todo.service';
import { TodoTeamService} from './services/todo-team.service';



import { EventComponent } from './components/event/event.component';
import { LivePlayerScoreComponent } from './components/live-score/live-player-score/live-player-score.component';
import { LiveTeamScoreComponent } from './components/live-score/live-team-score/live-team-score.component';
import { SidenavComponent } from './components/geolocation/side-nav/sidenav.component';
import { QuotesComponent } from './components/homepage/quotes/quotes.component';
import { QuoteComponent } from './components/homepage/quote/quote.component';
import { NewsQuoteComponent } from './components/additional-info/news/news-quote/news-quote.component';
import { AdminCreateComponent } from './components/admin/admin-create/admin-create.component';
import { AdminQuoteComponent } from './components/admin/admin-quote/admin-quote.component';
import { AdminComponent } from './components/admin/admin.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { InstagramFeedComponent } from './components/homepage/instagram-feed/instagram-feed.component';
import { GeolocationDetailComponent } from './components/geolocation/geolocation-detail/geolocation-detail.component';
import { MapService } from './components/geolocation/services/map.service';
import { HaversineService } from './components/geolocation/services/haversine.service';
// tslint:disable-next-line:max-line-length
import { GeolocationMaynoothDetailComponent } from './components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component';
import { BottomSheetOverviewComponent } from './components/geolocation/bottom-sheet/bottom-sheet-overview.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoTeamItemComponent } from './components/todo-team-item/todo-team-item.component';





@NgModule({
  declarations: [
    SortPipe,
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    LiveScoreComponent,
    TransportComponent,
    AdditionalInfoComponent,
    NewsComponent,
    AboutComponent,
    EligibilityComponent,
    ScheduleComponent,
    ContactComponent,
    TransportComponent,
    EventComponent,
    TeamProfilesComponent,
    ToolbarComponent,
    EventComponent,
    LivePlayerScoreComponent,
    LiveTeamScoreComponent,
    SidenavComponent,
    QuotesComponent,
    QuoteComponent,
    NewsQuoteComponent,
    AdminCreateComponent,
    AdminQuoteComponent,
    AdminComponent,
    GeolocationComponent,
    InstagramFeedComponent,
    GeolocationDetailComponent,
    BottomSheetOverviewComponent,
    GeolocationMaynoothDetailComponent,
    TodoItemComponent,
    TodoTeamItemComponent,
   
   
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCPZDSf-Sp9Ivqq7ojJx39IZhHPK54bjnI'
    }),
    routing
  ],
  entryComponents: [ BottomSheetOverviewComponent ],
  providers: [
    WeatherService,
    NewsService,
    InstagramFeedService,
    HomeNewsService,
    YelpService,
    LiveScoreService,
    QuoteService,
    MapService,
    HaversineService,
    TodoService,
    TodoTeamService,
   
    
   
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
