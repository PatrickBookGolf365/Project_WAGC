import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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

import { EventComponent } from './components/event/event.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
// tslint:disable-next-line:max-line-length
import { GeolocationDetailComponent } from './components/geolocation/geolocation-detail/geolocation-detail-mont/geolocation-detail.component';
import { OMearaDetailComponent } from './components/geolocation/geolocation-detail/geolocation-detail-omeara/o-meara-detail.component';
// tslint:disable-next-line:max-line-length
import { GeolocationMaynoothDetailComponent } from './components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component';

const appRoutes:
  Routes = [
    { path: '', component: HomepageComponent },
    { path: 'live-score', component: LiveScoreComponent },
    { path: 'events', component: EventComponent },
    { path: 'add-info', component: AdditionalInfoComponent },
    { path: 'teamprofiles', component: TeamProfilesComponent },
    { path: 'about', component: AboutComponent },
    { path: 'news' , component: NewsComponent},
    { path: 'eligibility', component: EligibilityComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'livescoring', component: LiveScoreComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'geolocation', component: GeolocationComponent },
    { path: 'geolocation/:id', component: GeolocationDetailComponent },
    { path: 'geolocation-meara/:id', component: OMearaDetailComponent },
    { path: 'geolocation-maynooth', component: GeolocationMaynoothDetailComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
