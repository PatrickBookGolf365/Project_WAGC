import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
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


import { EventComponent } from './components/event/event.component';
// import { FavTeamProfilesComponent } from './components/fav-team-profiles/fav-team-profiles.component';


import { AdminCreateComponent } from './components/admin/admin-create/admin-create.component';
import { AdminComponent } from './components/admin/admin.component';
import { GeolocationComponent } from './components/geolocation/geolocation.component';
// import { BottomSheetOverviewExampleSheet } from './components/test-comp-2/side-nav/sidenav.component';
// import { BottomSheetComponent } from './components/test-comp-2/bottom-sheet/bottom-sheet.component';

const appRoutes:
  Routes = [
    { path: '', component: HomepageComponent },
    { path: 'live-score', component: LiveScoreComponent },
    { path: 'events', component: EventComponent },
    { path: 'add-info', component: AdditionalInfoComponent },
    { path: 'teamprofiles', component: TeamProfilesComponent },
    // { path: 'favteamprofiles' , component: FavTeamProfilesComponent},
    { path: 'about', component: AboutComponent },
    { path: 'news' , component: NewsComponent},
    { path: 'eligibility', component: EligibilityComponent },
    { path: 'schedule', component: ScheduleComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'livescoring', component: LiveScoreComponent },
    { path: 'transport', component: TransportComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin-create', component: AdminCreateComponent },
    { path: 'geolocation', component: GeolocationComponent },
    { path: 'geolocation/:id', component: GeolocationComponent },
    { path: '**', redirectTo: '', pathMatch: 'full'}
  ];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
