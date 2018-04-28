import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
import {AgmCoreModule} from '@agm/core';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/nav/navigation.component';
import { HomepageComponent } from './components//homepage/homepage.component';
import { LiveScoreComponent } from './components//live-score/live-score.component';
import { GeolocationComponent } from './components//geolocation/geolocation.component';
import { TransportComponent } from './components/events/transport/transport.component';
import { TeamProfilesComponent } from './components/team-profiles/team-profiles.component';
import { ToolbarComponent } from './components/navigation/toolbar/toolbar.component';

import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { NewsComponent } from './components/additional-info/news/news.component';
import { AboutComponent } from './components/additional-info/about/about.component';
import { EligibilityComponent } from './components/additional-info/eligibitity/eligibility.component';
import { ScheduleComponent } from './components/additional-info/schedule/schedule.component';
import { ContactComponent } from './components/additional-info/contact/contact.component';
import { EventsComponent } from './components/events/events.component';


import { WeatherService} from './components/homepage/services/weather.service';
import { NewsService} from './components/additional-info/news/news.service';
import { HomeNewsService } from './components/homepage/services/weather.service';
import { YelpService } from './components/events/events.service';
import { EventComponent } from './components/events/event/event.component';
import { LiveScoreService } from './components/live-score/live-score.service';
import { LivePlayerScoreComponent } from './components/live-score/live-player-score/live-player-score.component';
import { LiveTeamScoreComponent } from './components/live-score/live-team-score/live-team-score.component';
const appRoutes:
  Routes = [
    { path: "", component: HomepageComponent },
    { path: 'live-score', component: LiveScoreComponent },
    { path: 'geo-location', component: GeolocationComponent },
    { path: 'events', component: EventsComponent },
    { path: 'add-info', component: AdditionalInfoComponent },
    { path: 'teamprofiles', component: TeamProfilesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news' , component: NewsComponent},
    { path: 'eligibility', component: EligibilityComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ]

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    LiveScoreComponent,
    GeolocationComponent,
    TransportComponent,
    AdditionalInfoComponent,
    NewsComponent,
    AboutComponent,
    EligibilityComponent,
    ScheduleComponent,
    ContactComponent,
    TransportComponent,
    EventsComponent,
    TeamProfilesComponent,
    ToolbarComponent,
    EventComponent,
    LivePlayerScoreComponent,
    LiveTeamScoreComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDSNCNtbKTFkC6jUWtIdwAa-Kxz4CD69yY'
    }),

    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [WeatherService, NewsService, HomeNewsService, YelpService, LiveScoreService],
  bootstrap: [AppComponent]
})
export class AppModule { }
