import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components//navigation/navigation.component';
import { HomepageComponent } from './components//homepage/homepage.component';
import { LiveScoreComponent } from './components//live-score/live-score.component';
import { GeolocationComponent } from './components//geolocation/geolocation.component';
import { TransportComponent } from './components//transport/transport.component';

import { AdditionalInfoComponent } from './components/additional-info/additional-info.component';
import { NewsComponent } from './components/additional-info/weather-warning/news.component';
import { AboutComponent } from './components/additional-info/about/about.component';
import { EligibilityComponent } from './components/additional-info/eligibitity/eligibility.component';
import { ScheduleComponent } from './components/additional-info/schedule/schedule.component';
import { ContactComponent } from './components/additional-info/contact/contact.component';
import { WeatherService} from './components/homepage/weather.service';

const appRoutes:
  Routes = [
    { path: "", component: HomepageComponent },
    { path: 'live-score', component: LiveScoreComponent },
    { path: 'geo-location', component: GeolocationComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'add-info', component: AdditionalInfoComponent },
    { path: 'news', component: NewsComponent },
    { path: 'about', component: AboutComponent },
    { path: 'eligibility', component: EligibilityComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
    
  ];

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
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
