import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from './shared/material.module';
import { HttpClientModule } from '@angular/common/http';




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

  ];





@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomepageComponent,
    LiveScoreComponent,
    GeolocationComponent,
    NewsComponent,
    TransportComponent,
    InformationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )

  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
