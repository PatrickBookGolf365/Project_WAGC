import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD

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
    
=======




import { AppComponent } from './app.component';
import 'hammerjs';
import { NavigationComponent } from './navigation/navigation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LiveScoreComponent } from './live-score/live-score.component';
import { GeolocationComponent } from './geolocation/geolocation.component';
import { NewsComponent } from './news/news.component';
import { TransportComponent } from './transport/transport.component';
import { InformationComponent } from './information/information.component';
import { WeatherService} from './homepage/weather.service';

const appRoutes:
  Routes = [

    {
      path: "",
      component: HomepageComponent
    },

    {
      path: 'liveScore',
      component: LiveScoreComponent
    },

    {
      path: 'geoLocation',
      component: GeolocationComponent
    },

    {
      path: 'transport',
      component: TransportComponent
    },

    {
      path: 'news',
      component: NewsComponent
    },
    {
      path: 'info',
      component: InformationComponent
    }

>>>>>>> 7bbedacf334064f2652417aa4d5df2279c7f693c
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
<<<<<<< HEAD
    AboutComponent,
    EligibilityComponent,
    ScheduleComponent,
    ContactComponent
=======
    TransportComponent,
    InformationComponent
>>>>>>> 7bbedacf334064f2652417aa4d5df2279c7f693c
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
