import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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
// import { FavTeamProfilesComponent } from './components/fav-team-profiles/fav-team-profiles.component';
import { LiveScoreService } from './components/live-score/live-score.service';
import { LivePlayerScoreComponent } from './components/live-score/live-player-score/live-player-score.component';
import { LiveTeamScoreComponent } from './components/live-score/live-team-score/live-team-score.component';
import { QuotesComponent } from './components/homepage/quotes/quotes.component';
import { QuoteService } from './shared/quote.service';
import { QuoteComponent } from './components/homepage/quote/quote.component';
import { NewsQuoteComponent } from './components/additional-info/news/news-quote/news-quote.component';
import { AdminCreateComponent } from './components/admin/admin-create/admin-create.component';
import { AdminQuoteComponent } from './components/admin/admin-quote/admin-quote.component';
import { AdminComponent } from './components/admin/admin.component';
import { TestGeoComponent } from './components/test/test-geo.component';
import { TestComp2Component } from './components/test-comp-2/test-comp-2.component';
// import { BottomSheetComponent } from './components/test-comp-2/bottom-sheet/bottom-sheet.component';

const appRoutes:
  Routes = [
    { path: '', component: HomepageComponent },
    { path: 'live-score', component: LiveScoreComponent },
    { path: 'geo-location', component: GeolocationComponent },
    { path: 'events', component: EventsComponent },
    { path: 'add-info', component: AdditionalInfoComponent },
    { path: 'teamprofiles', component: TeamProfilesComponent },
    // { path: 'favteamprofiles' , component: FavTeamProfilesComponent},
    { path: 'about', component: AboutComponent },
    { path: 'news' , component: NewsComponent},
    { path: 'eligibility', component: EligibilityComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin-create', component: AdminCreateComponent },
    { path: 'test2', component: TestComp2Component },
    { path: 'test-geo', component: TestGeoComponent },
    // { path: 'bot', component: BottomSheetComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
