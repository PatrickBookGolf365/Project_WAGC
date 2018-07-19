(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// import * as $ from 'jquery';
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_navigation_nav_navigation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navigation/nav/navigation.component */ "./src/app/components/navigation/nav/navigation.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components//homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components//live-score/live-score.component */ "./src/app/components/live-score/live-score.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/components/transport/transport.component.ts");
/* harmony import */ var _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/team-profiles/team-profiles.component */ "./src/app/components/team-profiles/team-profiles.component.ts");
/* harmony import */ var _components_navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/navigation/toolbar/toolbar.component */ "./src/app/components/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/additional-info/additional-info.component */ "./src/app/components/additional-info/additional-info.component.ts");
/* harmony import */ var _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/additional-info/news/news.component */ "./src/app/components/additional-info/news/news.component.ts");
/* harmony import */ var _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/additional-info/about/about.component */ "./src/app/components/additional-info/about/about.component.ts");
/* harmony import */ var _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/additional-info/eligibitity/eligibility.component */ "./src/app/components/additional-info/eligibitity/eligibility.component.ts");
/* harmony import */ var _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/additional-info/schedule/schedule.component */ "./src/app/components/additional-info/schedule/schedule.component.ts");
/* harmony import */ var _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/additional-info/contact/contact.component */ "./src/app/components/additional-info/contact/contact.component.ts");
/* harmony import */ var _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/homepage/services/weather.service */ "./src/app/components/homepage/services/weather.service.ts");
/* harmony import */ var _components_additional_info_news_news_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/additional-info/news/news.service */ "./src/app/components/additional-info/news/news.service.ts");
/* harmony import */ var _components_event_event_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/event/event.service */ "./src/app/components/event/event.service.ts");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./shared/quote.service */ "./src/app/shared/quote.service.ts");
/* harmony import */ var _components_live_score_live_score_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/live-score/live-score.service */ "./src/app/components/live-score/live-score.service.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_live_score_live_player_score_live_player_score_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/live-score/live-player-score/live-player-score.component */ "./src/app/components/live-score/live-player-score/live-player-score.component.ts");
/* harmony import */ var _components_live_score_live_team_score_live_team_score_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/live-score/live-team-score/live-team-score.component */ "./src/app/components/live-score/live-team-score/live-team-score.component.ts");
/* harmony import */ var _components_geolocation_side_nav_sidenav_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/geolocation/side-nav/sidenav.component */ "./src/app/components/geolocation/side-nav/sidenav.component.ts");
/* harmony import */ var _components_homepage_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/homepage/quotes/quotes.component */ "./src/app/components/homepage/quotes/quotes.component.ts");
/* harmony import */ var _components_homepage_quote_quote_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/homepage/quote/quote.component */ "./src/app/components/homepage/quote/quote.component.ts");
/* harmony import */ var _components_additional_info_news_news_quote_news_quote_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/additional-info/news/news-quote/news-quote.component */ "./src/app/components/additional-info/news/news-quote/news-quote.component.ts");
/* harmony import */ var _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/admin/admin-create/admin-create.component */ "./src/app/components/admin/admin-create/admin-create.component.ts");
/* harmony import */ var _components_admin_admin_quote_admin_quote_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/admin-quote/admin-quote.component */ "./src/app/components/admin/admin-quote/admin-quote.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/geolocation/geolocation.component */ "./src/app/components/geolocation/geolocation.component.ts");
/* harmony import */ var _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pipes/sort/sort.pipe */ "./src/app/pipes/sort/sort.pipe.ts");
/* harmony import */ var _components_homepage_instagram_feed_instagram_feed_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/homepage/instagram-feed/instagram-feed.component */ "./src/app/components/homepage/instagram-feed/instagram-feed.component.ts");
/* harmony import */ var _components_geolocation_geolocation_detail_geolocation_detail_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/geolocation/geolocation-detail/geolocation-detail.component */ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.ts");
/* harmony import */ var _components_geolocation_services_map_service__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/geolocation/services/map.service */ "./src/app/components/geolocation/services/map.service.ts");
/* harmony import */ var _components_geolocation_services_haversine_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/geolocation/services/haversine.service */ "./src/app/components/geolocation/services/haversine.service.ts");
/* harmony import */ var _components_geolocation_geolocation_maynooth_detail_geolocation_maynooth_detail_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component */ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.ts");
/* harmony import */ var _components_geolocation_bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/geolocation/bottom-sheet/bottom-sheet-overview.component */ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












































// tslint:disable-next-line:max-line-length


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_38__["SortPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_navigation_nav_navigation_component__WEBPACK_IMPORTED_MODULE_10__["NavigationComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_11__["HomepageComponent"],
                _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_12__["LiveScoreComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_13__["TransportComponent"],
                _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_16__["AdditionalInfoComponent"],
                _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_17__["NewsComponent"],
                _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_18__["AboutComponent"],
                _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_19__["EligibilityComponent"],
                _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_20__["ScheduleComponent"],
                _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_21__["ContactComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_13__["TransportComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_27__["EventComponent"],
                _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_14__["TeamProfilesComponent"],
                _components_navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_15__["ToolbarComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_27__["EventComponent"],
                _components_live_score_live_player_score_live_player_score_component__WEBPACK_IMPORTED_MODULE_28__["LivePlayerScoreComponent"],
                _components_live_score_live_team_score_live_team_score_component__WEBPACK_IMPORTED_MODULE_29__["LiveTeamScoreComponent"],
                _components_geolocation_side_nav_sidenav_component__WEBPACK_IMPORTED_MODULE_30__["SidenavComponent"],
                _components_homepage_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_31__["QuotesComponent"],
                _components_homepage_quote_quote_component__WEBPACK_IMPORTED_MODULE_32__["QuoteComponent"],
                _components_additional_info_news_news_quote_news_quote_component__WEBPACK_IMPORTED_MODULE_33__["NewsQuoteComponent"],
                _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_34__["AdminCreateComponent"],
                _components_admin_admin_quote_admin_quote_component__WEBPACK_IMPORTED_MODULE_35__["AdminQuoteComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_36__["AdminComponent"],
                _components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_37__["GeolocationComponent"],
                _components_homepage_instagram_feed_instagram_feed_component__WEBPACK_IMPORTED_MODULE_39__["InstagramFeedComponent"],
                _components_geolocation_geolocation_detail_geolocation_detail_component__WEBPACK_IMPORTED_MODULE_40__["GeolocationDetailComponent"],
                _components_geolocation_bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_44__["BottomSheetOverviewComponent"],
                _components_geolocation_geolocation_maynooth_detail_geolocation_maynooth_detail_component__WEBPACK_IMPORTED_MODULE_43__["GeolocationMaynoothDetailComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCPZDSf-Sp9Ivqq7ojJx39IZhHPK54bjnI'
                }),
                _app_routing__WEBPACK_IMPORTED_MODULE_9__["routing"]
            ],
            entryComponents: [_components_geolocation_bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_44__["BottomSheetOverviewComponent"]],
            providers: [
                _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_22__["WeatherService"],
                _components_additional_info_news_news_service__WEBPACK_IMPORTED_MODULE_23__["NewsService"],
                _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_22__["InstagramFeedService"],
                _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_22__["HomeNewsService"],
                _components_event_event_service__WEBPACK_IMPORTED_MODULE_24__["YelpService"],
                _components_live_score_live_score_service__WEBPACK_IMPORTED_MODULE_26__["LiveScoreService"],
                _shared_quote_service__WEBPACK_IMPORTED_MODULE_25__["QuoteService"],
                _components_geolocation_services_map_service__WEBPACK_IMPORTED_MODULE_41__["MapService"],
                _components_geolocation_services_haversine_service__WEBPACK_IMPORTED_MODULE_42__["HaversineService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components//homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components//live-score/live-score.component */ "./src/app/components/live-score/live-score.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/components/transport/transport.component.ts");
/* harmony import */ var _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/team-profiles/team-profiles.component */ "./src/app/components/team-profiles/team-profiles.component.ts");
/* harmony import */ var _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/additional-info/additional-info.component */ "./src/app/components/additional-info/additional-info.component.ts");
/* harmony import */ var _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/additional-info/news/news.component */ "./src/app/components/additional-info/news/news.component.ts");
/* harmony import */ var _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/additional-info/about/about.component */ "./src/app/components/additional-info/about/about.component.ts");
/* harmony import */ var _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/additional-info/eligibitity/eligibility.component */ "./src/app/components/additional-info/eligibitity/eligibility.component.ts");
/* harmony import */ var _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/additional-info/schedule/schedule.component */ "./src/app/components/additional-info/schedule/schedule.component.ts");
/* harmony import */ var _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/additional-info/contact/contact.component */ "./src/app/components/additional-info/contact/contact.component.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/admin-create/admin-create.component */ "./src/app/components/admin/admin-create/admin-create.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/geolocation/geolocation.component */ "./src/app/components/geolocation/geolocation.component.ts");
/* harmony import */ var _components_geolocation_geolocation_detail_geolocation_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/geolocation/geolocation-detail/geolocation-detail.component */ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.ts");
/* harmony import */ var _components_geolocation_geolocation_maynooth_detail_geolocation_maynooth_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component */ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.ts");












// import { FavTeamProfilesComponent } from './components/fav-team-profiles/fav-team-profiles.component';




// tslint:disable-next-line:max-line-length

var appRoutes = [
    { path: '', component: _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_1__["HomepageComponent"] },
    { path: 'live-score', component: _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_2__["LiveScoreComponent"] },
    { path: 'events', component: _components_event_event_component__WEBPACK_IMPORTED_MODULE_11__["EventComponent"] },
    { path: 'add-info', component: _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_5__["AdditionalInfoComponent"] },
    { path: 'teamprofiles', component: _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_4__["TeamProfilesComponent"] },
    // { path: 'favteamprofiles' , component: FavTeamProfilesComponent},
    { path: 'about', component: _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"] },
    { path: 'news', component: _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_6__["NewsComponent"] },
    { path: 'eligibility', component: _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_8__["EligibilityComponent"] },
    { path: 'schedule', component: _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleComponent"] },
    { path: 'contact', component: _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'livescoring', component: _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_2__["LiveScoreComponent"] },
    { path: 'transport', component: _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_3__["TransportComponent"] },
    { path: 'contact', component: _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"] },
    { path: 'admin', component: _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_13__["AdminComponent"] },
    { path: 'admin-create', component: _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_12__["AdminCreateComponent"] },
    { path: 'geolocation', component: _components_geolocation_geolocation_component__WEBPACK_IMPORTED_MODULE_14__["GeolocationComponent"] },
    { path: 'geolocation/:id', component: _components_geolocation_geolocation_detail_geolocation_detail_component__WEBPACK_IMPORTED_MODULE_15__["GeolocationDetailComponent"] },
    { path: 'geolocation-maynooth', component: _components_geolocation_geolocation_maynooth_detail_geolocation_maynooth_detail_component__WEBPACK_IMPORTED_MODULE_16__["GeolocationMaynoothDetailComponent"] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/additional-info/about/about.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title><h3>About</h3></mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <!-- C:\\Users\\HappyUser\\Project_WAGC-4\\src\\assets\\img\\about.jpg -->\r\n    <img class=\"mat-card-image\" src=\"assets/img/eligibility.jpg\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>About WATC 2018 in Ireland</h3>\r\n      <p>\r\n          The Golfing Union of Ireland (GUI) and the Irish Ladies Golfing Union (ILGU) will host the 2018 World Amateur Team Championships - with the Epsirito Santo Trophy (women) being competed for from Wednesday 29th August until Saturday 1st September and the Eisenhower Trophy (men) being competed for from Wednesday 5th September until Saturday 8th September. The two events will be staged at Carton House, where players will be tested on the world-famous O’Meara and Montgomerie courses . The Championships together represent an international festival of golf, during which time a Championship Gala Dinner for all participants will be staged at Maynooth University and the Biennial Meeting of the International Golf Federation will be held in Carton House on Monday 3rd September.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/additional-info/about/about.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  position: relative;\n  margin: 0;\n  height: 300px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: justify;\n  text-justify: inter-word; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/additional-info/about/about.component.ts ***!
  \*********************************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/additional-info/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.scss */ "./src/app/components/additional-info/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/additional-info.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\r\n  <mat-list-item role=\"listitem\" routerLink=\"/news\">\r\n\r\n    <span>News</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/about\">\r\n\r\n    <span>About</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/eligibility\">\r\n\r\n    <span>Eligibility</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/schedule\">\r\n\r\n    <span>Full Schedule</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/contact\">\r\n\r\n    <span>Contact</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/teamprofiles\">\r\n\r\n    <span>Team Profiles</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/livescoring\">\r\n\r\n    <span>Live Scoring</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/geolocation\">\r\n\r\n    <span>Geo-location</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/transport\">\r\n\r\n    <span>Transport</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/events\">\r\n\r\n    <span>Events</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/additional-info.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".material-icons {\n  position: fixed;\n  right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/additional-info/additional-info.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdditionalInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdditionalInfoComponent", function() { return AdditionalInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdditionalInfoComponent = /** @class */ (function () {
    function AdditionalInfoComponent() {
    }
    AdditionalInfoComponent.prototype.ngOnInit = function () {
    };
    AdditionalInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-additional-info',
            template: __webpack_require__(/*! ./additional-info.component.html */ "./src/app/components/additional-info/additional-info.component.html"),
            styles: [__webpack_require__(/*! ./additional-info.component.scss */ "./src/app/components/additional-info/additional-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionalInfoComponent);
    return AdditionalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/contact/contact.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title><h3>Contact Us</h3></mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    \r\n    <mat-card-content>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"3:1\">\r\n          <mat-grid-tile>\r\n            <i class=\"material-icons\">phone</i>\r\n            <h3>Telephone</h3>\r\n          </mat-grid-tile>\r\n          \r\n          <mat-grid-tile>\r\n              <i class=\"material-icons\">email</i>\r\n            <h3>Email</h3>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <a  class=\"para\"href=\"tel:+123 123456789\">+123 123456789</a>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <a class=\"para\" href=\"mailto:info@watc2018.ie\" target=\"_top\">info@watc2018.ie</a>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content class=\"mat-card-content-head\">\r\n      \r\n          <h3>Address</h3>\r\n          <p>Carton Demesne,\r\n              Maynooth,\r\n              County Kildare,\r\n              ​Ireland\r\n          </p>\r\n        </mat-card-content>\r\n\r\n    <mat-card-content id=\"contactCard\">\r\n        <mat-grid-list cols=\"3\" rowHeight=\"1.5:1\">\r\n          <mat-grid-tile>\r\n\r\n            <a href=\"https://www.facebook.com/golfingunionofireland/ \">\r\n              <img class=\"socialImage\" src=\"/assets/img/facebook.png\" >\r\n            </a>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n\r\n              <a href=\"https://www.facebook.com/golfingunionofireland/ \">\r\n                <img class=\"socialImage\" src=\"/assets/img/instagram.png\" >\r\n              </a>\r\n            </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n            <a href=\"https://twitter.com/guigolf?lang=en\">\r\n              <img class=\"socialImage\" src=\"/assets/img/twitter.png\">\r\n            </a>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>    \r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/contact/contact.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-content-head {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: justify;\n  text-justify: inter-word;\n  padding: -30px; }\n\n.mat-toolbar-add-info {\n  width: 100%;\n  height: 40px;\n  background-color: #5cd65c; }\n\n.material-icons {\n  font-size: 38px;\n  height: 38px;\n  width: 38px;\n  margin: 5px; }\n\n#contactCard {\n  text-align: center; }\n\n.socialImage {\n  width: 50%; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/additional-info/contact/contact.component.ts ***!
  \*************************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/components/additional-info/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/additional-info/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/components/additional-info/eligibitity/eligibility.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Eligibility</mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"mat-card-image\" src=\"assets/img/about.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>Eligibility</h3>\r\n      <p>\r\n          IGF National Federation Members may enter one women’s team and one men’s team. Players must be amateur golfers under the Rules of Amateur Status of the R&A and the United States Golf Association and nationals of the countries they represent, as defined in the IGF’s Nationality Policy.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/components/additional-info/eligibitity/eligibility.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  position: relative;\n  margin: 0;\n  height: 300px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 10px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: justify;\n  text-justify: inter-word; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/components/additional-info/eligibitity/eligibility.component.ts ***!
  \*********************************************************************************/
/*! exports provided: EligibilityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EligibilityComponent", function() { return EligibilityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EligibilityComponent = /** @class */ (function () {
    function EligibilityComponent() {
    }
    EligibilityComponent.prototype.ngOnInit = function () {
    };
    EligibilityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-eligibility',
            template: __webpack_require__(/*! ./eligibility.component.html */ "./src/app/components/additional-info/eligibitity/eligibility.component.html"),
            styles: [__webpack_require__(/*! ./eligibility.component.scss */ "./src/app/components/additional-info/eligibitity/eligibility.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EligibilityComponent);
    return EligibilityComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/news/news-quote/news-quote.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/additional-info/news/news-quote/news-quote.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-card-severity-{{quote.severity}}\">\r\n  <mat-list>\r\n    <mat-list-item>\r\n  \r\n    <div class=\"image-card-severity-{{quote.severity}}\">\r\n      <img src=\"assets/img/{{quote.severity}}.svg\">\r\n    </div>\r\n    \r\n    <div>\r\n      <p>{{ quote.content }}</p>\r\n    </div>\r\n\r\n\r\n    </mat-list-item>  \r\n  </mat-list>\r\n</div>"

/***/ }),

/***/ "./src/app/components/additional-info/news/news-quote/news-quote.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/additional-info/news/news-quote/news-quote.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-card-severity-1 {\n  color: white;\n  font-size: 1.2em;\n  background: #27ae60;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-1 {\n  margin-right: 5%; }\n\n.news-card-severity-2 {\n  color: white;\n  font-size: 1.2em;\n  background: #3498db;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-2 {\n  margin-right: 5%; }\n\n.image-card-severity-3 {\n  margin-right: 5%; }\n\n.news-card-severity-3 {\n  color: white;\n  font-size: 1.2em;\n  background: #f39c12;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-4 {\n  margin-right: 5%; }\n\n.news-card-severity-4 {\n  color: white;\n  font-size: 1.2em;\n  background: #e74c3c;\n  padding: 3%;\n  margin-bottom: 5%; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/news/news-quote/news-quote.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/additional-info/news/news-quote/news-quote.component.ts ***!
  \************************************************************************************/
/*! exports provided: NewsQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsQuoteComponent", function() { return NewsQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsQuoteComponent = /** @class */ (function () {
    function NewsQuoteComponent() {
    }
    NewsQuoteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], NewsQuoteComponent.prototype, "quote", void 0);
    NewsQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-quote',
            template: __webpack_require__(/*! ./news-quote.component.html */ "./src/app/components/additional-info/news/news-quote/news-quote.component.html"),
            styles: [__webpack_require__(/*! ./news-quote.component.scss */ "./src/app/components/additional-info/news/news-quote/news-quote.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsQuoteComponent);
    return NewsQuoteComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/additional-info/news/news.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n   <div *ngFor=\"let news of news.update\">\r\n        <mat-expansion-panel  id=\"newsUpdate\" >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title id=\"newsMain\">\r\n              <div class=\"box\">\r\n                <span id=\"newsTimeStamp\">{{news.timeStamp}}</span>\r\n                <span><mat-icon id=\"newsSeverity{{news.severity}}\">{{news.type}}</mat-icon></span>\r\n                <span id=\"newsDesc\">{{news.desc}}</span>\r\n               \r\n                \r\n              </div>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          {{news.content}}\r\n        </mat-expansion-panel>\r\n      </div>"

/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/additional-info/news/news.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newsSeverity1 {\n  color: red;\n  padding-right: 15px; }\n\n#newsSeverity2 {\n  color: orange;\n  padding-right: 15px; }\n\n#newsSeverity3 {\n  color: green;\n  padding-right: 15px; }\n\n#newsDesc {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n#newsTimeStamp {\n  padding-right: 15px; }\n\n#newsUpdate {\n  margin: 1%;\n  margin-top: 2%; }\n\n.box {\n  display: flex;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/additional-info/news/news.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./news.service */ "./src/app/components/additional-info/news/news.service.ts");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/quote.service */ "./src/app/shared/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NewsComponent = /** @class */ (function () {
    function NewsComponent(_newsService, quoteService) {
        this._newsService = _newsService;
        this.quoteService = quoteService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getNews()
            .subscribe(function (news) {
            _this.news = news;
        }, function (error) { return _this.errorMessage = error; });
        // this.quoteService.getQuotes()
        //   .subscribe(
        //     (quotes: Quote[]) => this.quotes = quotes,
        //     (error: Response) => console.log(error)
        //    );
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/components/additional-info/news/news.component.html"),
            styles: [__webpack_require__(/*! ./news.component.scss */ "./src/app/components/additional-info/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [_news_service__WEBPACK_IMPORTED_MODULE_1__["NewsService"], _shared_quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/news/news.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/additional-info/news/news.service.ts ***!
  \*****************************************************************/
/*! exports provided: NewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsService", function() { return NewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = /** @class */ (function () {
    function NewsService(_http) {
        this._http = _http;
        this._newsUrl = "http://watc.bookgolf365.ie/news.json";
    }
    NewsService.prototype.getNews = function () {
        return this._http.get(this._newsUrl)
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    NewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsService);
    return NewsService;
}());

//    ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx


/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/components/additional-info/schedule/schedule.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main\">\r\n<mat-accordion class=\"example-headers-align\">\r\n    <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Friday 24th August\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            Women's Team Arrivals\r\n        <mat-icon>account_circle</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n          <ul>\r\n            <li>\r\n              Women's Team Arrivals\r\n            </li>\r\n            <li>\r\n              Courses are Closed.\r\n            </li>\r\n          </ul>\r\n      <mat-action-row>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            Saturday 25th August\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            Women's Registration\r\n          <mat-icon>map</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <ul>\r\n          <li>\r\n            Women's Team Arrivals\r\n          </li>\r\n          <li>\r\n            Courses are Closed.\r\n          </li>\r\n          <li>\r\n            Women's Registration  (10:00hrs-18:00hrs)\r\n          </li>\r\n      </ul>\r\n      <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n            Sunday 26th August\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            Women's Registration\r\n          <mat-icon>date_range</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <ul>\r\n          <li>\r\n            Courses are Closed; Teams can walk courses and Practice Facilities will be Open.\r\n          </li>\r\n          <li>\r\n            Women's Registration  (08:00hrs-18:00hrs)\r\n          </li>\r\n      </ul>\r\n      <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 3\" (opened)=\"setStep(3)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n              Monday 27th August\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            Women's Practice Round\r\n          <mat-icon>date_range</mat-icon>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        <ul>\r\n            <li>\r\n              Team Captains' Meeting (16:00hrs, Carton House Kildare Suites on first floor)\r\n            </li>\r\n        </ul>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n        </mat-action-row>\r\n      </mat-expansion-panel>\r\n\r\n      <mat-expansion-panel [expanded]=\"step === 4\" (opened)=\"setStep(4)\" hideToggle>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              Tuesday 28th August\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              Women's Practice Round\r\n            <mat-icon>date_range</mat-icon>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          <ul>\r\n              <li>\r\n                Referee's Meeting (1100hrs, Carton House Kildare Suites on first floor)\r\n              </li>\r\n              <li>\r\n                  Women's Team Photographs (Tyrconnell Room near Carton House courtyard, timetable TBC)\r\n              </li>\r\n              <li>\r\n                  Women's Opening Ceremony, followed by reception (Carton House)\r\n              </li>\r\n          </ul>\r\n          <mat-action-row>\r\n            <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n            <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n          </mat-action-row>\r\n        </mat-expansion-panel>\r\n\r\n        <mat-expansion-panel [expanded]=\"step === 5\" (opened)=\"setStep(5)\" hideToggle>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n                  Wednesday 29th August\r\n              </mat-panel-title>\r\n              <mat-panel-description>\r\n                  Espirito Santo Trophy, First Round\r\n              <mat-icon>date_range</mat-icon>\r\n              </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n            <ul>\r\n                <li>\r\n                    Espirito Santo Trophy, First Round\r\n                </li>\r\n            </ul>\r\n            <mat-action-row>\r\n              <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n              <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n            </mat-action-row>\r\n          </mat-expansion-panel>\r\n\r\n          <mat-expansion-panel [expanded]=\"step === 6\" (opened)=\"setStep(6)\" hideToggle>\r\n              <mat-expansion-panel-header>\r\n                <mat-panel-title>\r\n                    Thursday 30th August\r\n                </mat-panel-title>\r\n                <mat-panel-description>\r\n                    Espirito Santo Trophy, Second Round\r\n                <mat-icon>date_range</mat-icon>\r\n                </mat-panel-description>\r\n              </mat-expansion-panel-header>\r\n              <ul>\r\n                  <li>\r\n              Espirito Santo Trophy, Second Round\r\n            </li>\r\n          </ul>\r\n        <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 7\" (opened)=\"setStep(7)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n         Friday 31st August\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Espirito Santo Trophy, Third Round\r\n      <mat-icon>date_range</mat-icon>\r\n    </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n      <ul>\r\n        <li>\r\n          Espirito Santo Trophy, Third Round\r\n       </li>\r\n    </ul>\r\n  <mat-action-row>\r\n    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n  </mat-action-row>\r\n</mat-expansion-panel>\r\n\r\n  <mat-expansion-panel [expanded]=\"step === 8\" (opened)=\"setStep(8)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Saturday 1st September\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n        Men's Team Arrivals\r\n      <mat-icon>date_range</mat-icon>\r\n    </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ul>\r\n      <li>\r\n        Men's Registration (1000-1800hrs)\r\n      </li>\r\n      <li>\r\n        Espirito Santo Trophy, Fourth Round\r\n      </li>\r\n      <li>\r\n        Men's Teams may walk golf courses as spectators in Espirito Santo Trophy Final Round\r\n      </li>\r\n      <li>\r\n         Practice Facilities Open\r\n      </li>\r\n      <li>\r\n          Women's Awards Ceremony / Gala Dinner (Maynooth University)\r\n      </li>\r\n    </ul>\r\n  <mat-action-row>\r\n    <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n    <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n  </mat-action-row>\r\n</mat-expansion-panel>\r\n\r\n<mat-expansion-panel [expanded]=\"step === 9\" (opened)=\"setStep(9)\" hideToggle>\r\n  <mat-expansion-panel-header>\r\n    <mat-panel-title>\r\n       Sunday 2nd September\r\n    </mat-panel-title>\r\n      <mat-panel-description>\r\n        Men's Team Arrivals\r\n      <mat-icon>date_range</mat-icon>\r\n    </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n      <ul>\r\n        <li>\r\n          Men's Registration (1000-1800hrs)\r\n        </li>\r\n        <li>\r\n          Espirito Santo Trophy, Fourth Round\r\n        </li>\r\n        <li>\r\n          Men's Teams may walk golf courses as spectators in Espirito Santo Trophy Final Round\r\n        </li>\r\n        <li>\r\n          Practice Facilities Open\r\n        </li>\r\n        <li>\r\n          Women's Awards Ceremony / Gala Dinner (Maynooth University)\r\n        </li>\r\n      </ul>\r\n      <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n<mat-expansion-panel [expanded]=\"step === 10\" (opened)=\"setStep(10)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n          Monday 3rd September\r\n      </mat-panel-title>\r\n      <mat-panel-description>\r\n          IGF Biennial Meeting (Carton House - Carton Suites)\r\n      <mat-icon>date_range</mat-icon>\r\n    </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n    <ul>\r\n      <li>\r\n        IGF Biennial Meeting (Carton House - Carton Suites)\r\n      </li>\r\n      <li>\r\n          Men's Practice Round\r\n     </li>\r\n      <li>\r\n          Team Captains' Meeting (1600hrs, Carton House Kildare Suites on first floor)\r\n      </li>\r\n      <li>\r\n          Delegates and Duffers Competition (Luttrellstown Castle)\r\n      </li>\r\n      <li>\r\n          Women's Team Departures\r\n      </li>\r\n    </ul>\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 11\" (opened)=\"setStep(11)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Tuesday 4th September\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n            Men's Practice Round\r\n        <mat-icon>date_range</mat-icon>\r\n      </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n       <ul>\r\n         <li>\r\n          Referee's Meeting (1100hrs, Carton House Kildare Suites on first floor)\r\n        </li>\r\n         <li>\r\n          Men's Team Photographs (Tyrconnell Room near Carton House courtyard, timetable TBC)\r\n        </li>\r\n        <li>\r\n          Men's Opening Ceremony, followed by reception (Carton House)\r\n        </li>\r\n         <li>\r\n          Practice Facilities Open\r\n        </li>\r\n      </ul>\r\n    <mat-action-row>\r\n      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n    </mat-action-row>\r\n  </mat-expansion-panel>\r\n\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 12\" (opened)=\"setStep(12)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Wednesday 5th September\r\n        </mat-panel-title>\r\n          <mat-panel-description>\r\n            Eisenhower Trophy, First Round\r\n          <mat-icon>date_range</mat-icon>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      <ul>\r\n        <li>\r\n        Men's Registration (1000-1800hrs)\r\n       </li>\r\n        <li>\r\n          Espirito Santo Trophy, Fourth Round\r\n        </li>\r\n        <li>\r\n          Men's Teams may walk golf courses as spectators in Espirito Santo Trophy Final Round\r\n        </li>\r\n        <li>\r\n          Practice Facilities Open\r\n        </li>\r\n        <li>\r\n          Women's Awards Ceremony / Gala Dinner (Maynooth University)\r\n        </li>\r\n      </ul>\r\n       <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n      </mat-action-row>\r\n   </mat-expansion-panel>\r\n\r\n   <mat-expansion-panel [expanded]=\"step === 13\" (opened)=\"setStep(13)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n          Friday 7th September\r\n         </mat-panel-title>\r\n         <mat-panel-description>\r\n           Men's Team Arrivals\r\n        <mat-icon>date_range</mat-icon>\r\n      </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n            <ul>\r\n              <li>\r\n                Men's Registration (1000-1800hrs)\r\n              </li>\r\n              <li>\r\n                Espirito Santo Trophy, Fourth Round\r\n              </li>\r\n              <li>\r\n                Men's Teams may walk golf courses as spectators in Espirito Santo Trophy Final Round\r\n              </li>\r\n              <li>\r\n                Practice Facilities Open\r\n              </li>\r\n              <li>\r\n                Women's Awards Ceremony / Gala Dinner (Maynooth University)\r\n              </li>\r\n          </ul>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n       </mat-action-row>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel [expanded]=\"step === 14\" (opened)=\"setStep(14)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            Saturday 8th September\r\n         </mat-panel-title>\r\n         <mat-panel-description>\r\n           Men's Team Arrivals\r\n        <mat-icon>date_range</mat-icon>\r\n      </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n            <ul>\r\n              <li>\r\n                Eisenhower Trophy, Fourth Round\r\n              </li>\r\n              <li>\r\n                  Men's Awards Ceremony / Farewell Reception\r\n              </li>\r\n              <li>\r\n                Men's Teams may walk golf courses as spectators in Espirito Santo Trophy Final Round\r\n              </li>\r\n          </ul>\r\n        <mat-action-row>\r\n          <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n          <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n       </mat-action-row>\r\n    </mat-expansion-panel>\r\n  \r\n\r\n  <mat-expansion-panel [expanded]=\"step === 15\" (opened)=\"setStep(15)\" hideToggle>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n        Sunday 9th September​\r\n       </mat-panel-title>\r\n       <mat-panel-description>\r\n         Men's Team Arrivals\r\n      <mat-icon>date_range</mat-icon>\r\n    </mat-panel-description>\r\n    </mat-expansion-panel-header>\r\n          <ul>\r\n            <li>\r\n                Completion of Eisenhower Trophy (if needed)\r\n            </li>\r\n            <li>\r\n                Men's Awards Ceremony (if needed)\r\n            </li>\r\n        </ul>\r\n      <mat-action-row>\r\n        <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n        <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n     </mat-action-row>\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/additional-info/schedule/schedule.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  overflow: hidden;\n  height: 100%; }\n\n.main {\n  height: 100vh;\n  overflow-y: scroll; }\n\n.mat-accordion {\n  height: 10%; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/schedule/schedule.component.ts ***!
  \***************************************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
        this.step = 0;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    ScheduleComponent.prototype.nextStep = function () {
        this.step++;
    };
    ScheduleComponent.prototype.prevStep = function () {
        this.step--;
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.component.html */ "./src/app/components/additional-info/schedule/schedule.component.html"),
            styles: [__webpack_require__(/*! ./schedule.component.scss */ "./src/app/components/additional-info/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-create/admin-create.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-create/admin-create.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"example-container\">\r\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\r\n    <mat-form-field>\r\n      <input matInput id=\"title\" name=\"title\" ngModel placeholder=\"Title\">\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n      <textarea matInput id=\"content\" name=\"content\" ngModel placeholder=\"Content\"></textarea>\r\n    </mat-form-field>\r\n  \r\n    <mat-form-field>\r\n        <input matInput id=\"severity\" name=\"severity\" ngModel placeholder=\"Severity\">\r\n    </mat-form-field>\r\n    <button mat-button type=\"submit\" class=\"button\">Submit</button>\r\n</form> \r\n</div>"

/***/ }),

/***/ "./src/app/components/admin/admin-create/admin-create.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/admin/admin-create/admin-create.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  display: flex;\n  flex-direction: column; }\n\n.example-container > * {\n  width: 100%; }\n\nmat-form-field {\n  width: 100%; }\n\n.button {\n  color: white;\n  background-color: #0066ff; }\n"

/***/ }),

/***/ "./src/app/components/admin/admin-create/admin-create.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-create/admin-create.component.ts ***!
  \*************************************************************************/
/*! exports provided: AdminCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminCreateComponent", function() { return AdminCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/quote.service */ "./src/app/shared/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminCreateComponent = /** @class */ (function () {
    function AdminCreateComponent(quoteService) {
        this.quoteService = quoteService;
    }
    AdminCreateComponent.prototype.ngOnInit = function () {
    };
    AdminCreateComponent.prototype.onSubmit = function (form) {
        this.quoteService.addQuote(form.value.title, form.value.content, form.value.severity)
            .subscribe(function () { return alert('Quote created!'); });
        form.reset();
    };
    AdminCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-create',
            template: __webpack_require__(/*! ./admin-create.component.html */ "./src/app/components/admin/admin-create/admin-create.component.html"),
            styles: [__webpack_require__(/*! ./admin-create.component.scss */ "./src/app/components/admin/admin-create/admin-create.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], AdminCreateComponent);
    return AdminCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin-quote/admin-quote.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-quote/admin-quote.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"news-card-severity-{{quote.severity}}\">\r\n  <mat-list>\r\n    <mat-list-item>\r\n      \r\n      <div class=\"image-card-severity-{{quote.severity}}\">\r\n        <img src=\"assets/img/{{quote.severity}}.svg\">\r\n      </div>\r\n        \r\n      <div>\r\n        <p>{{ quote.content }}</p>\r\n      </div>\r\n\r\n  </mat-list-item> \r\n</mat-list>\r\n<div *ngIf=\"editing\">\r\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueTitle\">\r\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueContent\">\r\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueSeverity\">\r\n    <button mat-button (click)=\"onUpdate()\">Update</button>\r\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\r\n  </div>\r\n  <div *ngIf=\"!editing\">\r\n    <button mat-button (click)=\"onEdit()\">Edit</button>\r\n    <button mat-button (click)=\"onDelete()\">Delete</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin-quote/admin-quote.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/components/admin/admin-quote/admin-quote.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-card-severity-1 {\n  color: white;\n  font-size: 1.2em;\n  background: #27ae60;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-1 {\n  margin-right: 5%; }\n\n.news-card-severity-2 {\n  color: white;\n  font-size: 1.2em;\n  background: #3498db;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-2 {\n  margin-right: 5%; }\n\n.image-card-severity-3 {\n  margin-right: 5%; }\n\n.news-card-severity-3 {\n  color: white;\n  font-size: 1.2em;\n  background: #f39c12;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.image-card-severity-4 {\n  margin-right: 5%; }\n\n.news-card-severity-4 {\n  color: white;\n  font-size: 1.2em;\n  background: #e74c3c;\n  padding: 3%;\n  margin-bottom: 5%; }\n\n.input {\n  height: 25px;\n  width: 80%;\n  margin: 3%;\n  margin-right: 10%; }\n"

/***/ }),

/***/ "./src/app/components/admin/admin-quote/admin-quote.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/admin/admin-quote/admin-quote.component.ts ***!
  \***********************************************************************/
/*! exports provided: AdminQuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminQuoteComponent", function() { return AdminQuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/quote.service */ "./src/app/shared/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminQuoteComponent = /** @class */ (function () {
    function AdminQuoteComponent(quoteService) {
        this.quoteService = quoteService;
        this.quoteDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.editing = false;
        this.editValueTitle = '';
        this.editValueContent = '';
        this.editValueSeverity = '';
    }
    AdminQuoteComponent.prototype.ngOnInit = function () {
    };
    AdminQuoteComponent.prototype.onEdit = function () {
        this.editing = true;
        this.editValueTitle = this.quote.title;
        this.editValueContent = this.quote.content;
        this.editValueSeverity = this.quote.severity;
    };
    AdminQuoteComponent.prototype.onUpdate = function () {
        var _this = this;
        this.quoteService.updateQuote(this.quote.id, this.editValueTitle, this.editValueContent, this.editValueSeverity)
            .subscribe(function (quote) {
            _this.quote.title = _this.editValueTitle;
            _this.quote.content = _this.editValueContent;
            _this.quote.severity = _this.editValueSeverity;
            _this.editValueTitle = '';
            _this.editValueContent = '';
            _this.editValueSeverity = '';
        });
        this.editing = false;
    };
    AdminQuoteComponent.prototype.onDelete = function () {
        var _this = this;
        this.quoteService.deleteQuote(this.quote.id)
            .subscribe(function () {
            _this.quoteDeleted.emit(_this.quote);
            console.log('Quote deleted');
        });
    };
    AdminQuoteComponent.prototype.onCancel = function () {
        this.editValueTitle = '';
        this.editValueContent = '';
        this.editValueSeverity = '';
        this.editing = false;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], AdminQuoteComponent.prototype, "quote", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], AdminQuoteComponent.prototype, "quoteDeleted", void 0);
    AdminQuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-quote',
            template: __webpack_require__(/*! ./admin-quote.component.html */ "./src/app/components/admin/admin-quote/admin-quote.component.html"),
            styles: [__webpack_require__(/*! ./admin-quote.component.scss */ "./src/app/components/admin/admin-quote/admin-quote.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], AdminQuoteComponent);
    return AdminQuoteComponent;
}());



/***/ }),

/***/ "./src/app/components/admin/admin.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button mat-button class=\"button\"  [routerLink]=\"['/admin-create']\" >Create</button>\r\n\r\n<app-admin-quote *ngFor=\"let quote of quotes\" [quote]=\"quote\" (quoteDeleted)=\"onDeleted($event)\"></app-admin-quote>\r\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/admin/admin.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\n  height: 100%; }\n\n.button {\n  color: white;\n  background-color: purple;\n  margin-bottom: 20px; }\n"

/***/ }),

/***/ "./src/app/components/admin/admin.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/admin/admin.component.ts ***!
  \*****************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/quote.service */ "./src/app/shared/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminComponent = /** @class */ (function () {
    function AdminComponent(quoteService) {
        this.quoteService = quoteService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.getQuotes()
            .subscribe(function (quotes) { return _this.quotes = quotes; }, function (error) { return console.log(error); });
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/components/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/components/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"event-main\" >\r\n    <ng-container>\r\n        <agm-map [latitude]=\"lat\" [longitude]=\"lng\" [zoom]=\"zoom\"  [disableDefaultUI] =\"true\">\r\n            \r\n          <!-- Automatic locations -->\r\n          <agm-marker *ngFor=\"let yelp of yelp.businesses\" [latitude]=\"yelp.coordinates.latitude\" [longitude]=\"yelp.coordinates.longitude\">\r\n              <agm-info-window>\r\n                  <!-- <ng-container *ngFor=\"let yelp of yelp.businesses\"> -->\r\n                    <strong>\r\n                      <table>\r\n                        <tr>\r\n                            <th id=\"nameMiddle\">{{yelp.name}}</th>\r\n                          <th>\r\n                              <span *ngIf=\"yelp.is_closed == 'true'\" id=\"foot-status-closed\">Closed</span>\r\n                              <span *ngIf=\"yelp.is_closed == 'false'\" id=\"foot-status-open\">Open</span>\r\n                          </th>\r\n                        </tr>\r\n                        <tr>\r\n                          <td id=\"star-img\">\r\n                              <span *ngIf=\"yelp.rating >= 1 && yelp.rating <= 1.5\">\r\n                                <img src=\"./assets/img/1star.png\">\r\n                              </span>\r\n                              <span *ngIf=\"yelp.rating >= 2 && yelp.rating <= 2.5\">\r\n                                <img src=\"./assets/img/2star.png\">\r\n                              </span>\r\n                              <span *ngIf=\"yelp.rating >= 3 && yelp.rating <= 3.5\">\r\n                                <img src=\"./assets/img/3star.png\">\r\n                              </span>\r\n                              <span *ngIf=\"yelp.rating >= 4 && yelp.rating <= 4.5\">\r\n                                <img src=\"./assets/img/4star.png\">\r\n                              </span>\r\n                              <span *ngIf=\"yelp.rating >= 5\">\r\n                                <img src=\"./assets/img/5star.png\">\r\n                              </span>\r\n                          </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{yelp.location.city}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td>{{yelp.location.address1}}</td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td><a class=\"para\" href=\"tel:{{yelp.display_phone}}\">{{yelp.display_phone}}</a></td>\r\n                          </tr>\r\n                          <tr>\r\n                            <td><a href=\"{{yelp.url}}\">More Info</a></td>\r\n                          </tr>\r\n                      </table>\r\n                    </strong>\r\n                  <!-- </ng-container>   -->\r\n                  </agm-info-window>\r\n            </agm-marker>\r\n            \r\n            \r\n          <!-- Player picked location -->\r\n            <agm-marker [latitude]=\"lat\" [longitude]=\"lng\">\r\n              <agm-info-window>\r\n                <!-- <ng-container *ngFor=\"let yelp of yelp.businesses\"> -->\r\n                  <strong>\r\n                    <table>\r\n                      <tr>\r\n                          <th id=\"nameMiddle\">{{yelpName}}</th>\r\n                        <th>\r\n                            <span *ngIf=\"yelpClose == 'true'\" id=\"foot-status-closed\">Closed</span>\r\n                            <span *ngIf=\"yelpClose == 'false'\" id=\"foot-status-open\">Open</span>\r\n                        </th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td id=\"star-img\">\r\n                            <span *ngIf=\"yelpRating >= 1 && yelpRating <= 1.5\">\r\n                              <img src=\"./assets/img/1star.png\">\r\n                            </span>\r\n                            <span *ngIf=\"yelpRating >= 2 && yelpRating <= 2.5\">\r\n                              <img src=\"./assets/img/2star.png\">\r\n                            </span>\r\n                            <span *ngIf=\"yelpRating >= 3 && yelpRating <= 3.5\">\r\n                              <img src=\"./assets/img/3star.png\">\r\n                            </span>\r\n                            <span *ngIf=\"yelpRating >= 4 && yelpRating <= 4.5\">\r\n                              <img src=\"./assets/img/4star.png\">\r\n                            </span>\r\n                            <span *ngIf=\"yelpRating >= 5\">\r\n                              <img src=\"./assets/img/5star.png\">\r\n                            </span>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                          <td>{{yelpCity}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td>{{yelpAddress}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td><a class=\"para\" href=\"tel:{{yelpNumber}}\">{{yelpNumber}}</a></td>\r\n                        </tr>\r\n                        <tr>\r\n                          <td><a href=\"{{YelpURL}}\">More Info</a></td>\r\n                        </tr>\r\n                    </table>\r\n                    \r\n                  </strong>\r\n                <!-- </ng-container>   -->\r\n                \r\n                </agm-info-window>\r\n          </agm-marker>\r\n        </agm-map>\r\n        </ng-container>\r\n        \r\n        \r\n        <div id=\"yelp-container-child\">\r\n            <ng-container *ngFor=\"let yelp of yelp.businesses\">\r\n          <mat-toolbar id=\"head-toolbar\">\r\n            \r\n            <div id=\"name\">\r\n              {{yelp.name}}\r\n            </div>\r\n            <span class=\"example-fill-remaining-space\"></span>\r\n            <button mat-button id=\"foot-button\" (click)=\"lat = (yelp.coordinates.latitude); lng = (yelp.coordinates.longitude); \r\n            yelpID     = [yelp.id]; \r\n            yelpName   = [yelp.name];\r\n            yelpClose  = [yelp.is_closed];\r\n            yelpRating = [yelp.rating];\r\n            yelpCity   = [yelp.location.city];\r\n            yelpAddress= [yelp.location.address1];\r\n            yelpNumber = [yelp.display_phone];\r\n            YelpURL    = [yelp.url];\r\n            \">Location</button>\r\n            \r\n           \r\n          </mat-toolbar>\r\n          <mat-divider></mat-divider>\r\n          </ng-container>\r\n                    </div>\r\n                   \r\n                   \r\n          <!-- <mat-toolbar id=\"foot-toolbar\" >\r\n             \r\n          \r\n          <!-- <span *ngIf=\"yelp.is_closed == true\" id=\"foot-status-closed\">Closed</span>\r\n          <span *ngIf=\"yelp.is_closed == false\" id=\"foot-status-open\">Open</span> -->\r\n        <!-- </mat-toolbar> -->\r\n       \r\n</div>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/event/event.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/event/event.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n#head-toolbar img {\n  width: 90%;\n  height: 90%;\n  vertical-align: middle;\n  float: right; }\n\nagm-map {\n  height: 250px; }\n\n#foot-button {\n  font-size: 78%;\n  background-color: #999999; }\n\n#yelp-container-child {\n  margin: 2%;\n  overflow-y: auto;\n  height: 260px; }\n\n#event-main {\n  margin-bottom: 17.5%; }\n\n#text-center {\n  vertical-align: middle;\n  margin-right: 20%; }\n\n#name {\n  width: 60%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 78%; }\n\n#nameMiddle {\n  vertical-align: middle; }\n\n#star-img img {\n  width: 115px;\n  height: 20px; }\n\n#head-toolbar {\n  background-color: #ffffff;\n  margin-bottom: 2%;\n  width: 100%; }\n\n#img-wrapper img {\n  width: 50%;\n  height: 50%;\n  vertical-align: middle; }\n\n#foot-status-closed {\n  color: red;\n  font-size: 85%; }\n\n#foot-status-open {\n  color: green;\n  font-size: 85%; }\n"

/***/ }),

/***/ "./src/app/components/event/event.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/event/event.component.ts ***!
  \*****************************************************/
/*! exports provided: EventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventComponent", function() { return EventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.service */ "./src/app/components/event/event.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(_newsService) {
        this._newsService = _newsService;
        this.yelp = [];
        this.zoom = 17;
        this.lat = 53.360258;
        this.lng = -6.265690;
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getYelp()
            .subscribe(function (yelp) {
            _this.yelp = yelp;
        }, function (error) { return _this.errorMessage = error; });
    };
    EventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event',
            template: __webpack_require__(/*! ./event.component.html */ "./src/app/components/event/event.component.html"),
            styles: [__webpack_require__(/*! ./event.component.scss */ "./src/app/components/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [_event_service__WEBPACK_IMPORTED_MODULE_1__["YelpService"]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/event/event.service.ts":
/*!***************************************************!*\
  !*** ./src/app/components/event/event.service.ts ***!
  \***************************************************/
/*! exports provided: YelpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YelpService", function() { return YelpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YelpService = /** @class */ (function () {
    function YelpService(_http) {
        this._http = _http;
        this._yelpUrl = 'https://api.yelp.com/v3/businesses/search?location=Dublin,Ireland';
        this._yelpBUrl = 'https://api.yelp.com/v3/businesses?locale=en_IE';
        this._LiveBus = '';
    }
    YelpService.prototype.getYelp = function () {
        return this._http.get(this._yelpUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                // tslint:disable-next-line:max-line-length
                'Authorization': 'Bearer ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx',
                'Access-Control-Allow-Origin': '*'
            })
        })
            .do(function (data) { return console.log('All: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    YelpService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    YelpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], YelpService);
    return YelpService;
}());



/***/ }),

/***/ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list >\r\n  <p>Info Coming Soon!</p>\r\n</mat-nav-list>\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.ts ***!
  \****************************************************************************************/
/*! exports provided: BottomSheetOverviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewComponent", function() { return BottomSheetOverviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BottomSheetOverviewComponent = /** @class */ (function () {
    function BottomSheetOverviewComponent(bottomSheetRef) {
        this.bottomSheetRef = bottomSheetRef;
    }
    BottomSheetOverviewComponent.prototype.ngOnInit = function () {
    };
    BottomSheetOverviewComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet-overview',
            template: __webpack_require__(/*! ./bottom-sheet-overview.component.html */ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet-overview.component.scss */ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], BottomSheetOverviewComponent);
    return BottomSheetOverviewComponent;
}());



/***/ }),

/***/ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"map\"></div>\r\n\r\n<div *ngIf=\"hole$ | async as hole\">\r\n    <div class=\"contain\">\r\n        <mat-card class=\"mat-elevation-z10\">\r\n          <div class=\"flex-item1\">\r\n              <p>Metres: {{metres}}</p>\r\n\r\n              <p>Yards: {{yards}}</p>\r\n\r\n              <p>Kilometres: {{kilometres}}</p>\r\n\r\n              <p>Miles: {{miles}}</p>\r\n          </div>\r\n\r\n          <div class=\"flex-item2\">\r\n              <p>{{ hole.name }}</p>\r\n\r\n              <p>par {{ hole.par }}</p>\r\n\r\n              <p>Description {{hole.description}}</p>\r\n              <a href=\"https://vimeo.com/269921381\">Flyover</a>\r\n              <!-- <p> Flyover {{hole.flyover }}</p> -->\r\n          </div>\r\n        </mat-card>\r\n      </div>\r\n<div>\r\n\r\n<button class=\"mat-button\" mat-button (click)=\"Back()\">Back</button>\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  margin-top: -15px;\n  position: absolute;\n  height: 50%;\n  width: 100%;\n  z-index: -1; }\n\n.mat-button {\n  position: absolute;\n  bottom: 10%;\n  right: 5px;\n  margin: 3%;\n  background-color: #D8D8D8; }\n\n.contain {\n  position: fixed;\n  top: 50%;\n  width: 100%;\n  display: flex;\n  flex-direction: column; }\n\n.flex-item1 {\n  justify-content: space-between;\n  text-align: center;\n  width: 50%;\n  float: left; }\n\n.flex-item2 {\n  margin-left: 50%;\n  justify-content: space-between;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: GeolocationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationDetailComponent", function() { return GeolocationDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_montgomorie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/montgomorie.service */ "./src/app/components/geolocation/services/montgomorie.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/map.service */ "./src/app/components/geolocation/services/map.service.ts");
/* harmony import */ var _services_haversine_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/haversine.service */ "./src/app/components/geolocation/services/haversine.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var GeolocationDetailComponent = /** @class */ (function () {
    function GeolocationDetailComponent(_mont, _route, _haversine, router, _map) {
        this._mont = _mont;
        this._route = _route;
        this._haversine = _haversine;
        this.router = router;
        this._map = _map;
    }
    GeolocationDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hole$ = this._route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) {
            return _this._mont.getHole(params.get('id'));
        }));
        this._route.paramMap.
            subscribe(function (params) {
            return _this._mont.showMap(+params.get('id'));
        });
        this.Haversine();
    };
    GeolocationDetailComponent.prototype.Back = function () {
        this.router.navigate(['../geolocation']);
    };
    GeolocationDetailComponent.prototype.Haversine = function () {
        var _this = this;
        var id = +this._route.snapshot.paramMap.get('id');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (x) {
                _this.myLat = x.coords.latitude;
                _this.myLng = x.coords.longitude;
                _this._mont.getHoleLat(id).subscribe(function (hole) { return _this.courseLat = hole; });
                _this._mont.getHoleLng(id).subscribe(function (hole) { return _this.courseLng = hole; });
                console.log("longitude: " + _this.courseLat + " | latitude: " + _this.courseLng);
                console.log("longitude: " + _this.myLat + " | latitude: " + _this.myLng);
                var myCoords = {
                    latitude: _this.myLat,
                    longitude: _this.myLng
                };
                var courseCoords = {
                    latitude: _this.courseLat,
                    longitude: _this.courseLng
                };
                _this.metres = _this._haversine.getDistanceInMeters(myCoords, courseCoords);
                _this.yards = _this._haversine.getDistanceInYards(myCoords, courseCoords);
                _this.kilometres = _this._haversine.getDistanceInKilometers(myCoords, courseCoords);
                _this.miles = _this._haversine.getDistanceInMiles(myCoords, courseCoords);
                _this.metres = _this.metres.toFixed(2);
                _this.yards = _this.yards.toFixed(2);
                _this.kilometres = _this.kilometres.toFixed(2);
                _this.miles = _this.miles.toFixed(2);
            });
        }
    };
    GeolocationDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geolocation-detail',
            template: __webpack_require__(/*! ./geolocation-detail.component.html */ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.html"),
            styles: [__webpack_require__(/*! ./geolocation-detail.component.scss */ "./src/app/components/geolocation/geolocation-detail/geolocation-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_montgomorie_service__WEBPACK_IMPORTED_MODULE_1__["MontgomorieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_haversine_service__WEBPACK_IMPORTED_MODULE_5__["HaversineService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_4__["MapService"]])
    ], GeolocationDetailComponent);
    return GeolocationDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n\r\n    <p>\r\n      <button mat-icon-button [matMenuTriggerFor]=\"menu\" class=\"mat-ham-button\">\r\n          <i class=\"material-icons\">bookmarks</i>\r\n      </button>\r\n    </p>\r\n\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"openBottomSheet()\">Dublin Bus Stops</button>\r\n        <button mat-menu-item>Carton House Info</button>\r\n    </mat-menu>\r\n\r\n<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  margin-top: -15px;\n  position: absolute;\n  height: 90%;\n  width: 100%;\n  z-index: -1; }\n\n.mat-ham-button {\n  background-color: white;\n  position: fixed;\n  right: 12px;\n  top: 12%; }\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: GeolocationMaynoothDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationMaynoothDetailComponent", function() { return GeolocationMaynoothDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_maynooth_map_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/maynooth-map.service */ "./src/app/components/geolocation/services/maynooth-map.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet-overview.component */ "./src/app/components/geolocation/bottom-sheet/bottom-sheet-overview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GeolocationMaynoothDetailComponent = /** @class */ (function () {
    function GeolocationMaynoothDetailComponent(_route, _maynooth, bottomSheet) {
        this._route = _route;
        this._maynooth = _maynooth;
        this.bottomSheet = bottomSheet;
    }
    GeolocationMaynoothDetailComponent.prototype.openBottomSheet = function () {
        this.bottomSheet.open(_bottom_sheet_bottom_sheet_overview_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetOverviewComponent"]);
    };
    GeolocationMaynoothDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.
            subscribe(function (params) {
            return _this._maynooth.showMap(+params.get('id'));
        });
    };
    GeolocationMaynoothDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geolocation-maynooth-detail',
            template: __webpack_require__(/*! ./geolocation-maynooth-detail.component.html */ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.html"),
            styles: [__webpack_require__(/*! ./geolocation-maynooth-detail.component.scss */ "./src/app/components/geolocation/geolocation-maynooth-detail/geolocation-maynooth-detail.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_maynooth_map_service__WEBPACK_IMPORTED_MODULE_2__["MaynoothMapService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"]])
    ], GeolocationMaynoothDetailComponent);
    return GeolocationMaynoothDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n\r\n<div id=\"map\"></div>\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map {\n  margin-top: -15px;\n  position: absolute;\n  height: 90%;\n  width: 100%;\n  z-index: -1; }\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/geolocation/geolocation.component.ts ***!
  \*****************************************************************/
/*! exports provided: GeolocationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeolocationComponent", function() { return GeolocationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_montgomorie_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/montgomorie.service */ "./src/app/components/geolocation/services/montgomorie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/map.service */ "./src/app/components/geolocation/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GeolocationComponent = /** @class */ (function () {
    function GeolocationComponent(_mont, _map, _route) {
        this._mont = _mont;
        this._map = _map;
        this._route = _route;
    }
    GeolocationComponent.prototype.ngOnInit = function () {
        this._map.showMap(+this._route.snapshot.params['id']);
    };
    GeolocationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geolocation',
            template: __webpack_require__(/*! ./geolocation.component.html */ "./src/app/components/geolocation/geolocation.component.html"),
            styles: [__webpack_require__(/*! ./geolocation.component.scss */ "./src/app/components/geolocation/geolocation.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_montgomorie_service__WEBPACK_IMPORTED_MODULE_1__["MontgomorieService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], GeolocationComponent);
    return GeolocationComponent;
}());



/***/ }),

/***/ "./src/app/components/geolocation/services/haversine.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/geolocation/services/haversine.service.ts ***!
  \**********************************************************************/
/*! exports provided: HaversineService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaversineService", function() { return HaversineService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HaversineService = /** @class */ (function () {
    function HaversineService() {
        this._earthRadiusInMeters = 6378137;
        this._earthRadiusInYards = 6975174.98;
        this._earthRadiusInKilometers = 6371;
        this._earthRadiusInMiles = 3960;
    }
    HaversineService.prototype._toRadians = function (value) {
        return value * Math.PI / 180;
    };
    HaversineService.prototype._getDistance = function (coord1, coord2) {
        var φ1 = this._toRadians(coord1.latitude);
        var φ2 = this._toRadians(coord2.latitude);
        var Δφ = this._toRadians(coord2.latitude - coord1.latitude);
        var Δλ = this._toRadians(coord2.longitude - coord1.longitude);
        // a = sin²(Δφ / 2) + cos φ1 ⋅ cos φ2 ⋅ sin²(Δλ / 2)
        var a = Math.pow(Math.sin(Δφ / 2), 2) +
            Math.cos(φ1) *
                Math.cos(φ2) *
                Math.pow(Math.sin(Δλ / 2), 2);
        // c = 2 ⋅ atan2(√a, √(1−a))
        return 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    };
    HaversineService.prototype.getDistanceInMeters = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMeters * c;
    };
    HaversineService.prototype.getDistanceInYards = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInYards * c;
    };
    HaversineService.prototype.getDistanceInKilometers = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInKilometers * c;
    };
    HaversineService.prototype.getDistanceInMiles = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMiles * c;
    };
    HaversineService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], HaversineService);
    return HaversineService;
}());



/***/ }),

/***/ "./src/app/components/geolocation/services/map.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/geolocation/services/map.service.ts ***!
  \****************************************************************/
/*! exports provided: Hole, MapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hole", function() { return Hole; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapService", function() { return MapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hole = /** @class */ (function () {
    function Hole(id, lat, lng) {
        this.id = id;
        this.lat = lat;
        this.lng = lng;
    }
    return Hole;
}());

var HOLES = [
    new Hole(1, 53.387792, -6.569634),
    new Hole(2, 53.386737, -6.574668),
    new Hole(3, 53.387792, -6.569634),
    new Hole(4, 53.387792, -6.569634),
    new Hole(5, 53.387792, -6.569634),
    new Hole(6, 53.387792, -6.569634),
    new Hole(7, 53.387792, -6.569634),
    new Hole(8, 53.387792, -6.569634),
    new Hole(9, 53.387792, -6.569634),
    new Hole(10, 53.387792, -6.569634),
    new Hole(11, 53.387792, -6.569634),
    new Hole(12, 53.387792, -6.569634),
    new Hole(13, 53.387792, -6.569634),
    new Hole(14, 53.387792, -6.569634),
    new Hole(15, 53.387792, -6.569634),
    new Hole(16, 53.387792, -6.569634),
    new Hole(17, 53.387792, -6.569634),
    new Hole(18, 53.387792, -6.569634),
];
var MapService = /** @class */ (function () {
    function MapService() {
    }
    MapService.prototype.showMap = function (id) {
        // tslint:disable-next-line:no-shadowed-variable
        var map;
        map = L.map('map').setView([53.384973, -6.555245], 14.6);
        // tslint:disable-next-line:max-line-length
        L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
            attribution: '',
            maxZoom: 18
        }).addTo(map);
    };
    MapService.prototype.getHoles = function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(HOLES); };
    MapService.prototype.getHole = function (id) {
        return this.getHoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (holes) { return holes.find(function (hole) { return hole.id === +id; }); }));
    };
    MapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MapService);
    return MapService;
}());



/***/ }),

/***/ "./src/app/components/geolocation/services/maynooth-map.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/geolocation/services/maynooth-map.service.ts ***!
  \*************************************************************************/
/*! exports provided: MaynoothMapService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaynoothMapService", function() { return MaynoothMapService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MaynoothMapService = /** @class */ (function () {
    function MaynoothMapService() {
    }
    MaynoothMapService.prototype.showMap = function (id) {
        // tslint:disable-next-line:no-shadowed-variable
        var map;
        // ../assets/img/map.svg
        var myIcon = L.divIcon('my-div-icon');
        map = L.map('map').setView([53.381635, -6.590960], 14.6);
        // tslint:disable-next-line:max-line-length
        L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjjjwiuit35ru2smgwllle9um/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
            attribution: '',
            maxZoom: 18,
        }).addTo(map);
        L.marker([53.381635, -6.590960], myIcon).addTo(map);
    };
    MaynoothMapService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], MaynoothMapService);
    return MaynoothMapService;
}());



/***/ }),

/***/ "./src/app/components/geolocation/services/montgomorie.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/geolocation/services/montgomorie.service.ts ***!
  \************************************************************************/
/*! exports provided: MontgomorieService, Hole */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MontgomorieService", function() { return MontgomorieService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hole", function() { return Hole; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MontgomorieService = /** @class */ (function () {
    function MontgomorieService() {
    }
    MontgomorieService.prototype.getHoles = function () { return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(HOLES); };
    MontgomorieService.prototype.getHole = function (id) {
        return this.getHoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (holes) { return holes.find(function (hole) { return hole.id === +id; }); }));
    };
    MontgomorieService.prototype.getHoleLat = function (id) {
        return this.getHoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (holes) { return holes.find(function (hole) { return hole.id === +id; }).lat; }));
    };
    MontgomorieService.prototype.getHoleLng = function (id) {
        return this.getHoles().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (holes) { return holes.find(function (hole) { return hole.id === +id; }).lng; }));
    };
    MontgomorieService.prototype.showMap = function (id) {
        // tslint:disable-next-line:no-shadowed-variable
        var map;
        var coordsLng;
        var coordsLat;
        map = L.map('map').setView([53.384767, -6.564879], 14);
        // tslint:disable-next-line:max-line-length
        L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
            attribution: '',
            maxZoom: 16,
        }).addTo(map);
        coordsLng = HOLES.find(function (hole) { return hole.id === id; }).lng;
        coordsLat = HOLES.find(function (hole) { return hole.id === id; }).lat;
        map.fitBounds([
            [coordsLat, coordsLng]
        ]);
    };
    MontgomorieService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], MontgomorieService);
    return MontgomorieService;
}());

var Hole = /** @class */ (function () {
    function Hole(id, name, lat, lng) {
        this.id = id;
        this.name = name;
        this.lat = lat;
        this.lng = lng;
    }
    return Hole;
}());

var HOLES = [
    new Hole(1, 'Hole 1', 53.387792, -6.569634),
    new Hole(2, 'Hole 2', 53.386737, -6.574668),
    new Hole(3, 'Hole 3', 53.385048, -6.572094),
    new Hole(4, 'Hole 4', 53.382720, -6.565754),
    new Hole(5, 'Hole 5', 53.386264, -6.568703),
    new Hole(6, 'Hole 6', 53.383838, -6.563968),
    new Hole(7, 'Hole 7', 53.383164, -6.561684),
    new Hole(8, 'Hole 8', 53.381575, -6.568951),
    new Hole(9, 'Hole 9', 53.381030, -6.563088),
    new Hole(10, 'Hole 10', 53.379296, -6.556906),
    new Hole(11, 'Hole 11', 53.378104, -6.548422),
    new Hole(12, 'Hole 12', 53.379468, -6.548469),
    new Hole(13, 'Hole 13', 53.378950, -6.543071),
    new Hole(14, 'Hole 14', 53.380214, -6.547637),
    new Hole(15, 'Hole 15', 53.380593, -6.555184),
    new Hole(16, 'Hole 16', 53.382494, -6.560319),
    new Hole(17, 'Hole 17', 53.384131, -6.559146),
    new Hole(18, 'Hole 18', 53.386657, -6.565981),
];


/***/ }),

/***/ "./src/app/components/geolocation/side-nav/sidenav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/geolocation/side-nav/sidenav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showIndicator\">Loading...</div>\r\n\r\n <mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\r\n    <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\r\n      <mat-toolbar class=\"geo-heading\">\r\n            <h3>Geolocation</h3>\r\n      </mat-toolbar>\r\n\r\n      <div class=\"banner\"></div>\r\n\r\n      <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            Montgomorie\r\n          </mat-expansion-panel-header>\r\n\r\n      <mat-list role=\"list\" *ngFor=\"let hole of hole$ | async\">\r\n        <mat-list-item role=\"listitem\" class=\"mat-side-list\">\r\n            <button mat-button [routerLink]=\"['/geolocation', hole.id]\"><span>Hole {{hole.id}}</span></button>\r\n        </mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          O'Meara\r\n        </mat-expansion-panel-header>\r\n\r\n    <mat-list role=\"list\" *ngFor=\"let hole of hole$ | async\">\r\n      <mat-list-item role=\"listitem\" class=\"mat-side-list\">\r\n          <button mat-button [routerLink]=\"['/geolocation', hole.id]\"><span>Hole {{hole.id}}</span></button>\r\n      </mat-list-item>\r\n    </mat-list>\r\n  </mat-expansion-panel>\r\n\r\n  <!-- geolocation-maynooth -->\r\n  <button class=\"mat-raised-button\" mat-raised-button [routerLink]=\"['/geolocation-maynooth']\"><span>Maynooth</span></button><br>\r\n\r\n  </mat-sidenav>\r\n</mat-sidenav-container>\r\n\r\n  <p>\r\n    <button mat-icon-button class=\"mat-ham-button\" (click)=\"sidenav.open()\">\r\n      <i class=\"material-icons\">menu</i>\r\n    </button>\r\n  </p>\r\n<!-- asdada -->\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/side-nav/sidenav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/geolocation/side-nav/sidenav.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: static;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.mat-side-list {\n  margin: 0; }\n\n.mat-ham-button {\n  background-color: #d3d3d3;\n  margin-right: 20px;\n  float: right; }\n\n.mat-raised-button {\n  width: 200px;\n  height: 6%; }\n\n.banner {\n  height: 50px;\n  background-color: #5cd65c; }\n\n.geo-heading {\n  background-color: #5cd65c;\n  position: fixed;\n  top: 0; }\n\n.right-bottom {\n  position: absolute;\n  left: 0;\n  bottom: 60px; }\n"

/***/ }),

/***/ "./src/app/components/geolocation/side-nav/sidenav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/geolocation/side-nav/sidenav.component.ts ***!
  \**********************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_montgomorie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/montgomorie.service */ "./src/app/components/geolocation/services/montgomorie.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_map_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/map.service */ "./src/app/components/geolocation/services/map.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(_mont, _map, _route, route) {
        var _this = this;
        this._mont = _mont;
        this._map = _map;
        this._route = _route;
        this.route = route;
        this.showIndicator = true;
        this.route.events.subscribe(function (routerEvent) {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                _this.showIndicator = true;
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.showIndicator = false;
            }
        });
    }
    // get working!
    SidenavComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hole$ = this._route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (params) {
            _this.selectedId = +params.get('id');
            return _this._mont.getHoles();
        }));
        // this._route.paramMap.
        // subscribe((params: ParamMap) =>
        // this._mont.showMap(+params.get('id')));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/geolocation/side-nav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/components/geolocation/side-nav/sidenav.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('listAnimation', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('* => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(100, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }))
                            ])
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["query"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["stagger"])(100, [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('0.5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({ opacity: 1 }))
                            ])
                        ])
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_montgomorie_service__WEBPACK_IMPORTED_MODULE_2__["MontgomorieService"],
            _services_map_service__WEBPACK_IMPORTED_MODULE_6__["MapService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div id=\"headerImg\">\r\n  <img src=\"./assets/img/WATC.jpg\">\r\n</div> -->\r\n<div id=\"homepage-body\">\r\n\r\n\r\n<div id=\"content\" *ngFor=\"let news of homeNews.update| slice:0:1; let i=index\">\r\n    <mat-accordion class=\"example-headers-align\">\r\n        <mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle>\r\n              <mat-expansion-panel-header>\r\n               <mat-panel-description>\r\n                  {{homeNews.update[0].desc}}\r\n              <mat-icon id=\"newsSeverity{{homeNews.update[0].severity}}\">{{homeNews.update[0].type}}</mat-icon>\r\n            </mat-panel-description>\r\n            </mat-expansion-panel-header>\r\n                  <ul>\r\n                    <li>\r\n                      {{homeNews.update[1].timeStamp}}: {{homeNews.update[0].content}}\r\n                    </li>\r\n                </ul>\r\n              <mat-action-row>\r\n                <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n             </mat-action-row>\r\n          </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"example-headers-align\">\r\n<mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle>\r\n    <mat-expansion-panel-header>\r\n  <mat-panel-description>\r\n    {{homeNews.update[1].desc}}\r\n<mat-icon id=\"newsSeverity{{homeNews.update[1].severity}}\">{{homeNews.update[1].type}}</mat-icon>\r\n</mat-panel-description>\r\n  </mat-expansion-panel-header>\r\n    <ul>\r\n      <li>\r\n          {{homeNews.update[1].timeStamp}}: {{homeNews.update[1].content}}\r\n     </li>\r\n    </ul>\r\n  <mat-action-row>\r\n     <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n     <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\r\n  </mat-action-row>\r\n</mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"example-headers-align\">\r\n    <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle>\r\n        <mat-expansion-panel-header>\r\n      <mat-panel-description>\r\n        {{homeNews.update[2].desc}}\r\n  <mat-icon id=\"newsSeverity{{homeNews.update[2].severity}}\">{{homeNews.update[2].type}}</mat-icon>\r\n    </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n        <ul>\r\n          <li>\r\n              {{homeNews.update[2].timeStamp}}: {{homeNews.update[2].content}}\r\n         </li>\r\n        </ul>\r\n      <mat-action-row>\r\n         <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\r\n         <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\r\n      </mat-action-row>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n</div>\r\n\r\n  <button mat-button (click)=\"metric = !metric\">{{metric ? '&deg;C' : '&deg;F'}}</button>\r\n  <div>\r\n    <ng-container *ngIf=\"!metric\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n\r\n              <div class=\"weather_child\">\r\n                <div class=\"box\">\r\n                  <span>\r\n                    Current:\r\n                  </span>\r\n                  <ng-container id=\"ImgTemp\">\r\n                    <span>\r\n                      <img src=\"https://openweathermap.org/img/w/{{forecast.list[0].weather[0].icon}}.png\">\r\n                    </span>\r\n                    <span>\r\n                      {{forecast.list[0].main.temp | number:'1.0-0'}}&deg;C\r\n                    </span>\r\n                  </ng-container>\r\n                  <span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"\">\r\n            <!-- index 1 -->\r\n            <ng-container *ngFor=\"let loop of [1,2,3,4]\">\r\n              <div class=\"weather_child\">\r\n                <div class=\"box\">\r\n                  <span>\r\n                    {{(forecast.list[loop].dt_txt[11]) + (forecast.list[loop].dt_txt[12]) + (forecast.list[loop].dt_txt[13]) + (forecast.list[loop].dt_txt[14])\r\n                    + (forecast.list[loop].dt_txt[15])}} - {{(forecast.list[loop+1].dt_txt[11]) + (forecast.list[loop+1].dt_txt[12])\r\n                    + (forecast.list[loop+1].dt_txt[13]) + (forecast.list[loop+1].dt_txt[14]) + (forecast.list[loop+1].dt_txt[15])}}\r\n                  </span>\r\n                  <span class=\"example-fill-remaining-space\"></span>\r\n                  <span>\r\n                    <img src=\"https://openweathermap.org/img/w/{{forecast.list[loop].weather[0].icon}}.png\">\r\n                  </span>\r\n                  <span>\r\n                    {{forecast.list[loop].main.temp | number:'1.0-0'}}&deg;C\r\n                  </span>\r\n\r\n                  <!-- <ng-container id=\"compass\">\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg >= 0 && forecast.list[loop].wind.deg <= 45\">\r\n\r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                        </mat-icon>\r\n\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 45 && forecast.list[loop].wind.deg <= 135\">\r\n\r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/east.png\">\r\n                        </mat-icon>\r\n\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 135 && forecast.list[loop].wind.deg <= 225\">\r\n\r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/south.png\">\r\n                        </mat-icon>\r\n\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 225 && forecast.list[loop].wind.deg <= 315\">\r\n\r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/west.png\">\r\n                        </mat-icon>\r\n\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 315 && forecast.list[loop].wind.deg <= 360\">\r\n\r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                        </mat-icon>\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg == null\">\r\n                        Calm\r\n                      </span>\r\n                      </ng-container> -->\r\n                </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </ng-container>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n  <div>\r\n    <ng-container *ngIf=\"metric\">\r\n      <mat-accordion>\r\n        <mat-expansion-panel>\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n\r\n              <div class=\"weather_child\">\r\n                <div class=\"box\">\r\n                  <span>\r\n                    Current:\r\n                  </span>\r\n                  <span>\r\n                    <img src=\"https://openweathermap.org/img/w/{{forecastFH.list[0].weather[0].icon}}.png\">\r\n                  </span>\r\n                  <span>\r\n                    {{forecastFH.list[0].main.temp | number:'1.0-0'}}&deg;F\r\n                  </span>\r\n                  <span>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"\">\r\n            <!-- index 1 -->\r\n            <ng-container *ngFor=\"let loop of [1,2,3,4]\">\r\n              <div class=\"weather_child\">\r\n                <div class=\"box\">\r\n                  <span>\r\n                    {{(forecastFH.list[loop].dt_txt[11]) + (forecastFH.list[loop].dt_txt[12]) + (forecastFH.list[loop].dt_txt[13]) + (forecastFH.list[loop].dt_txt[14])\r\n                    + (forecastFH.list[loop].dt_txt[15])}} - {{(forecastFH.list[loop+1].dt_txt[11]) + (forecastFH.list[loop+1].dt_txt[12])\r\n                    + (forecastFH.list[loop+1].dt_txt[13]) + (forecastFH.list[loop+1].dt_txt[14]) + (forecastFH.list[loop+1].dt_txt[15])}}\r\n                  </span>\r\n                  <span class=\"example-fill-remaining-space\"></span>\r\n                  <span>\r\n                    <img src=\"https://openweathermap.org/img/w/{{forecastFH.list[loop].weather[0].icon}}.png\">\r\n                  </span>\r\n                  <span>\r\n                    {{forecastFH.list[loop].main.temp | number:'1.0-0'}}&deg;F\r\n                  </span>\r\n\r\n                  <!-- <ng-container id=\"compass\">\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg >= 0 && forecast.list[loop].wind.deg <= 45\">\r\n\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 45 && forecast.list[loop].wind.deg <= 135\">\r\n\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/east.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 135 && forecast.list[loop].wind.deg <= 225\">\r\n\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/south.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 225 && forecast.list[loop].wind.deg <= 315\">\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/west.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 315 && forecast.list[loop].wind.deg <= 360\">\r\n\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg == null\">\r\n                    Calm\r\n                  </span>\r\n                  </ng-container> -->\r\n                </div>\r\n              </div>\r\n              <mat-divider></mat-divider>\r\n            </ng-container>\r\n          </div>\r\n        </mat-expansion-panel>\r\n      </mat-accordion>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n     <app-instagram-feed></app-instagram-feed>\r\n<!--\r\n\r\n  <div id=\"newsUpdate\" *ngFor=\"let news of homeNews.update\">\r\n    <mat-expansion-panel id=\"newsUpdate\" *ngIf=\"news.homepage == 'true'\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <div class=\"box\">\r\n            <span id=\"newsTimeStamp\">{{news.timeStamp}}</span>\r\n            <span><mat-icon id=\"newsSeverity{{news.severity}}\">{{news.type}}</mat-icon></span>\r\n            <span id=\"newsDesc\">{{news.desc}}</span>\r\n          </div>\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      {{news.content}}\r\n    </mat-expansion-panel>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homepage-body {\n  margin-bottom: 20%;\n  overflow: hidden; }\n\n.box {\n  display: flex;\n  align-items: center; }\n\n.box span {\n  font-size: 100%; }\n\n#headerImg img {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#weather-toolbar {\n  background-color: #5cd65c; }\n\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n  background: #76b852;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #8DC26F, #76b852);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.compass-img {\n  width: 245%;\n  height: 245%; }\n\n.wind-small {\n  font-size: 70%; }\n\n.up {\n  color: blue; }\n\n.down {\n  color: red; }\n\n.flex-item {\n  width: 100%;\n  text-align: center;\n  font-size: 150%;\n  margin-top: 2%; }\n\n.flex-temp .small {\n  font-size: 70%; }\n\n#wind {\n  font-size: 80%;\n  width: 70%;\n  text-align: center; }\n\n#direction {\n  float: right; }\n\n#forecast {\n  vertical-align: middle;\n  font-size: 50%; }\n\n#compass {\n  float: right; }\n\n.weather_child {\n  font-size: 110%; }\n\n.news-image-right {\n  position: fixed;\n  margin: 3%;\n  overflow: hidden; }\n\n.news-content-aside {\n  position: relative;\n  left: 50px;\n  margin: 5px; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox.\r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.weather_card {\n  margin-bottom: 3%; }\n\n#newsSeverity1 {\n  color: red;\n  padding-right: 15px; }\n\n#newsSeverity2 {\n  color: orange;\n  padding-right: 15px; }\n\n#newsSeverity3 {\n  color: green;\n  padding-right: 15px; }\n\n#newsDesc {\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n\n#newsTimeStamp {\n  padding-right: 15px; }\n\n#newsUpdate {\n  margin: 1%;\n  margin-top: 2%; }\n\n.mat-accordion {\n  height: 10%; }\n\n.example-headers-align .mat-expansion-panel-header-title,\n.example-headers-align .mat-expansion-panel-header-description {\n  flex-basis: 0; }\n\n.example-headers-align .mat-expansion-panel-header-description {\n  justify-content: space-between;\n  align-items: center; }\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.ts ***!
  \***********************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/weather.service */ "./src/app/components/homepage/services/weather.service.ts");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_weatherService, _homeNewsService, _instagramFeed) {
        this._weatherService = _weatherService;
        this._homeNewsService = _homeNewsService;
        this._instagramFeed = _instagramFeed;
        this.homeNews = [];
        this.step = 0;
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.InjectableService();
    };
    HomepageComponent.prototype.onActivate = function (event) {
        // preventDefault();
    };
    HomepageComponent.prototype.InjectableService = function () {
        var _this = this;
        this._weatherService.getForecast()
            .subscribe(function (forecast) {
            _this.forecast = forecast;
        });
        this._weatherService.getForecastFH()
            .subscribe(function (forecastFH) {
            _this.forecastFH = forecastFH;
            _this._homeNewsService.getHomeNews()
                .subscribe(function (homeNews) {
                _this.homeNews = homeNews;
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    HomepageComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    HomepageComponent.prototype.nextStep = function () {
        this.step++;
    };
    HomepageComponent.prototype.prevStep = function () {
        this.step--;
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.scss */ "./src/app/components/homepage/homepage.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"],
            _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["HomeNewsService"],
            _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["InstagramFeedService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/instagram-feed/instagram-feed.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/components/homepage/instagram-feed/instagram-feed.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"instagram-feed\">\r\n  <div class=\"instafeed-container\">\r\n    <!-- ng if video-->\r\n      <video class=\"transparent-instafeed\" src={{link}} autoplay controls loop></video>\r\n    <!-- else image -->\r\n    <p class=\"para\">Caption</p>\r\n  </div>\r\n\r\n  <div class=\"instafeed-container\">\r\n    <img class=\"transparent-instafeed\" src=\"{{instaFeed.data[1].images.standard_resolution.url}}\">\r\n    <p class=\"para\">Caption</p>\r\n  </div>\r\n\r\n  <div class=\"instafeed-container\">\r\n    <img class=\"transparent-instafeed\" src=\"{{instaFeed.data[2].images.standard_resolution.url}}\">\r\n    <p class=\"para\">Caption</p>\r\n  </div>\r\n\r\n  <div class=\"instafeed-container\">\r\n    <img class=\"transparent-instafeed\" src=\"{{instaFeed.data[3].images.standard_resolution.url}}\">\r\n    <p class=\"para\">Caption</p>\r\n  </div>\r\n\r\n  <div class=\"instafeed-container\">\r\n    <img class=\"transparent-instafeed\" src=\"{{instaFeed.data[4].images.standard_resolution.url}}\">\r\n    <p class=\"para\">Caption</p>\r\n  </div>\r\n\r\n  <div class=\"instafeed-container\">\r\n    <img class=\"transparent-instafeed\" src=\"{{instaFeed.data[5].images.standard_resolution.url}}\">\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homepage/instagram-feed/instagram-feed.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/components/homepage/instagram-feed/instagram-feed.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#instagram-feed {\n  display: flex;\n  flex-direction: row;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.instafeed-container {\n  width: 100%; }\n\n.transparent-instafeed {\n  height: 40vh;\n  width: 90vw; }\n\n.para {\n  color: white;\n  position: relative;\n  top: -17%;\n  left: -90%; }\n\nimg {\n  width: 90%; }\n"

/***/ }),

/***/ "./src/app/components/homepage/instagram-feed/instagram-feed.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/components/homepage/instagram-feed/instagram-feed.component.ts ***!
  \********************************************************************************/
/*! exports provided: InstagramFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramFeedComponent", function() { return InstagramFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/weather.service */ "./src/app/components/homepage/services/weather.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InstagramFeedComponent = /** @class */ (function () {
    function InstagramFeedComponent(_instagramFeed) {
        this._instagramFeed = _instagramFeed;
        this.title = 'title';
        // tslint:disable-next-line:max-line-length
        this.link = 'https://scontent.cdninstagram.com/vp/9c0895b9ad69153a42bd0230f29ec056/5B515265/t50.2886-16/36945138_1068663479958683_2957417478189219840_n.mp4';
    }
    InstagramFeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._instagramFeed.getInstagramFeed()
            .subscribe(function (instaFeed) {
            _this.instaFeed = instaFeed;
        });
    };
    InstagramFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-instagram-feed',
            template: __webpack_require__(/*! ./instagram-feed.component.html */ "./src/app/components/homepage/instagram-feed/instagram-feed.component.html"),
            styles: [__webpack_require__(/*! ./instagram-feed.component.scss */ "./src/app/components/homepage/instagram-feed/instagram-feed.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["InstagramFeedService"]])
    ], InstagramFeedComponent);
    return InstagramFeedComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/quote/quote.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/homepage/quote/quote.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\r\n  <mat-list-item class=\"mat-item\">\r\n\r\n          \r\n  <img src=\"./assets/img/ILGU.png\" class=\"mat-item-img\">\r\n    \r\n      <div class=\"mat-item-content\">\r\n        <div class=\"mat-item-heading\">\r\n          <h3>{{ quote.title }}</h3>\r\n        </div>\r\n                      \r\n        <div class=\"mat-item-para\">\r\n          {{ quote.content }}\r\n        </div>\r\n\r\n      </div>\r\n    </mat-list-item>\r\n  </mat-list>\r\n<mat-divider></mat-divider>"

/***/ }),

/***/ "./src/app/components/homepage/quote/quote.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/homepage/quote/quote.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".news-content-wrapper {\n  height: 400px;\n  width: 100%;\n  overflow-y: hidden; }\n\n.mat-item {\n  height: 200px;\n  padding: 5%; }\n\n.mat-item-img {\n  height: 200%;\n  width: 33%;\n  margin-left: -50px; }\n\n.mat-item-content {\n  margin-left: 30px; }\n\n.mat-item-para {\n  height: 30%; }\n"

/***/ }),

/***/ "./src/app/components/homepage/quote/quote.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/homepage/quote/quote.component.ts ***!
  \**************************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuoteComponent = /** @class */ (function () {
    function QuoteComponent() {
    }
    QuoteComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], QuoteComponent.prototype, "quote", void 0);
    QuoteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quote',
            template: __webpack_require__(/*! ./quote.component.html */ "./src/app/components/homepage/quote/quote.component.html"),
            styles: [__webpack_require__(/*! ./quote.component.scss */ "./src/app/components/homepage/quote/quote.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], QuoteComponent);
    return QuoteComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/quotes/quotes.component.html":
/*!******************************************************************!*\
  !*** ./src/app/components/homepage/quotes/quotes.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-quote *ngFor=\"let quote of quotes | slice:0:2; let i=index\" [quote]=\"quote\"></app-quote>"

/***/ }),

/***/ "./src/app/components/homepage/quotes/quotes.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/homepage/quotes/quotes.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/homepage/quotes/quotes.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/homepage/quotes/quotes.component.ts ***!
  \****************************************************************/
/*! exports provided: QuotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesComponent", function() { return QuotesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/quote.service */ "./src/app/shared/quote.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QuotesComponent = /** @class */ (function () {
    function QuotesComponent(quoteService) {
        this.quoteService = quoteService;
    }
    QuotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.quoteService.getQuotes()
            .subscribe(function (quotes) { return _this.quotes = quotes; }, function (error) { return console.log(error); });
    };
    QuotesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-quotes',
            template: __webpack_require__(/*! ./quotes.component.html */ "./src/app/components/homepage/quotes/quotes.component.html"),
            styles: [__webpack_require__(/*! ./quotes.component.scss */ "./src/app/components/homepage/quotes/quotes.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_quote_service__WEBPACK_IMPORTED_MODULE_1__["QuoteService"]])
    ], QuotesComponent);
    return QuotesComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/services/weather.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/homepage/services/weather.service.ts ***!
  \*****************************************************************/
/*! exports provided: WeatherService, HomeNewsService, InstagramFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNewsService", function() { return HomeNewsService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramFeedService", function() { return InstagramFeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherService = /** @class */ (function () {
    function WeatherService(_http) {
        this._http = _http;
        // tslint:disable-next-line:max-line-length
        this._weatherForecastFH = 'http://api.openweathermap.org/data/2.5/forecast?lat=53.3909&lon=-6.5665&units=imperial&appid=6864244ceeeaa2b28fad8845b7113272';
        // tslint:disable-next-line:max-line-length
        this._weatherForecast = 'http://api.openweathermap.org/data/2.5/forecast?lat=53.3909&lon=-6.5665&units=metric&appid=6864244ceeeaa2b28fad8845b7113272';
    }
    WeatherService.prototype.getForecast = function () {
        return this._http.get(this._weatherForecast)
            .do(function (data) { return console.log((data)); })
            .catch(this.handleError);
    };
    WeatherService.prototype.getForecastFH = function () {
        return this._http.get(this._weatherForecastFH)
            .do(function (data) { return console.log((data)); })
            .catch(this.handleError);
    };
    WeatherService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    WeatherService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WeatherService);
    return WeatherService;
}());

var HomeNewsService = /** @class */ (function () {
    function HomeNewsService(_http) {
        this._http = _http;
        this._homeNewsUrl = 'http://watc.bookgolf365.ie/news.json';
    }
    HomeNewsService.prototype.getHomeNews = function () {
        return this._http.get(this._homeNewsUrl)
            .do(function (data) { return JSON.stringify(data); })
            .catch(this.handleError);
    };
    HomeNewsService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    HomeNewsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HomeNewsService);
    return HomeNewsService;
}());

var InstagramFeedService = /** @class */ (function () {
    function InstagramFeedService(_http) {
        this._http = _http;
        // tslint:disable-next-line:max-line-length
        this._instagramFeedUrl = 'https://api.instagram.com/v1/users/self/media/recent/?access_token=8144523052.2216fb3.4cfe98c30fbb4c57a6049b5980ccb6fc';
    }
    InstagramFeedService.prototype.getInstagramFeed = function () {
        return this._http.get(this._instagramFeedUrl)
            .do(function (data) { return console.log('Insta: ' + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    InstagramFeedService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    InstagramFeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InstagramFeedService);
    return InstagramFeedService;
}());

// tslint:disable-next-line:max-line-length
// https://gist.githubusercontent.com/PatrickBookGolf365/b124a8e610abd4e659b203b9b925f7fc/raw/f6ab4e4a342ecafd31e04756419b932db5d01705/news.json
// http://news.bookgolf365.ie/news.json


/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/live-score/live-player-score/live-player-score.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"main\" *ngIf=\"hideall\">\r\n  <mat-toolbar id=\"team-header-toolbar\">\r\n    <span id=\"title\">\r\n      <span>\r\n        <button class=\"hide-btn\" (click)=\"hideall = !hideall\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n      </span>\r\n      {{playerProfilesFirst}} {{playerProfilesLast}}\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n      <button id=\"fav-button\" mat-button>\r\n        <!-- <mat-icon class=\"fav\">star</mat-icon> -->\r\n      </button>\r\n    </span>\r\n  </mat-toolbar>\r\n\r\n  <div id=\"team-header\">\r\n    <span>\r\n        <span>\r\n            <img id=\"team-image\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{teamProfiles | lowercase}}.png\"\r\n            onError=\"this.src='./assets/img/team.jpg';\"  alt=\"...\" />\r\n        </span>\r\n    </span>\r\n    \r\n    <!-- <div *ngFor=\"let playerdata of playerdata.event.tournament.players.player\">\r\n        <div *ngFor=\"let coursedata of playerdata.event.tournament.courses.course\">\r\n            {{coursedata.no}}\r\n            {{coursedata.name}}\r\n            {{coursedata.shortname}}\r\n            </div>\r\n     <div *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <span > {{playerdata.round[0].no}}</span>\r\n     \r\n    </div>\r\n    </div> -->\r\n    <!-- <mat-card id=\"score-Info\"> -->\r\n    <!-- <table> -->\r\n    <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n          \r\n          <ng-container *ngIf=\"teams.name == teamProfiles\"> -->\r\n    <!-- <tr>\r\n          <th>Thru</th>test\r\n          <th>Today</th>null\r\n          <th>Total</th>test\r\n          <th>Rank</th>test -->\r\n    <!-- </ng-container> -->\r\n    <!-- </tr>\r\n      </table>\r\n    </mat-card> -->\r\n    \r\n  </div>\r\n\r\n  <div *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round One\r\n          <br> Total Score: {{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n          * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n          * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n          * 1) + (playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n          * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) + (playerdata.round[0].score[14].strokes\r\n          * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n          * 1)}}\r\n\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[0].score[loop].strokes}}\r\n                 \r\n                      <sup *ngIf=\"playerdata.round[0].course == 1\">I</sup>\r\n                      <sup *ngIf=\"playerdata.round[0].course == 2\">M</sup>\r\n                   \r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[0].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[0].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) + (playerdata.round[0].score[14].strokes\r\n                * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n\r\n\r\n  <div *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Two\r\n          <br> Total Score: {{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n          * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n          * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n          * 1) + (playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n          * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) + (playerdata.round[1].score[14].strokes\r\n          * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[1].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[1].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[1].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[1].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[1].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) + (playerdata.round[1].score[14].strokes\r\n                * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n\r\n  <div *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Three\r\n          <br> Total Score: {{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n          * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n          * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n          * 1) + (playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n          * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) + (playerdata.round[2].score[14].strokes\r\n          * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[2].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[2].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[2].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[2].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[2].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) + (playerdata.round[2].score[14].strokes\r\n                * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </mat-expansion-panel>\r\n  </div>\r\n  <div *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Four\r\n          <br> Total Score: {{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n          * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n          * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n          * 1) + (playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n          * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) + (playerdata.round[3].score[14].strokes\r\n          * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[3].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[3].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[3].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}\r\n                  <sup *ngIf=\"playerdata.round[3].course == 1\">I</sup>\r\n                  <sup *ngIf=\"playerdata.round[3].course == 2\">M</sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) + (playerdata.round[3].score[14].strokes\r\n                * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"live-main\" *ngIf=\"!hideall\">\r\n  <!-- <table matSort (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n         \r\n          <th mat-sort-header=\"position\">Pos</th>\r\n          <th>Name</th>\r\n        </tr>\r\n      \r\n        <tr *ngFor=\"let players of playerinfo.event.tournament.players.player; let i = index\">\r\n       {{i}}\r\n          \r\n        </tr>\r\n      </table> -->\r\n  <mat-toolbar id=\"live-search\">\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Search for Player\" #playerbox (keyup)=\"0\">\r\n    </mat-form-field>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n  </mat-toolbar>\r\n  \r\n  <table id=\"live-table\">\r\n    <thead>\r\n      <tr id=\"live-table-header-title\">\r\n        <th>Pos</th>\r\n        <th>Player</th>\r\n        <th>Team</th>\r\n        <th>R1</th>\r\n        <th>R2</th>\r\n        <th>R3</th>\r\n        <th>R4</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"player-tbody\" *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\">\r\n      <ng-container *ngIf=\"playerdata.firstname == playerbox.value || playerdata.lastname == playerbox.value || playerbox.value == ''\">\r\n\r\n        <tr id=\"player-tr\" *ngIf=\"playerdata.totals.status == 'ok'\">\r\n\r\n          <td>{{playerdata.totals.position}}</td>\r\n          <td (click)=\"hideall = !hideall; teamProfiles = (playerdata.teamname); playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n          <td>\r\n\r\n              <img id=\"teamNameImage\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{playerdata.teamname | lowercase}}.png\"\r\n              onError=\"this.src='./assets/img/team.jpg';\"  alt=\"...\" />\r\n\r\n          </td>\r\n          <td>{{playerdata.round[0].strokes}}</td>\r\n          <td>{{playerdata.round[1].strokes}}</td>\r\n          <td>{{playerdata.round[2].strokes}}</td>\r\n          <td>{{playerdata.round[3].strokes}}</td>\r\n          <td id=\"total\">{{(playerdata.round[0].strokes * 1) + (playerdata.round[1].strokes * 1) + (playerdata.round[2].strokes * 1) + (playerdata.round[3].strokes\r\n            * 1)}}</td>\r\n        </tr>\r\n\r\n      </ng-container>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/live-score/live-player-score/live-player-score.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\n#player-tbody:nth-child(even) {\n  background-color: #adebad; }\n\n#player-expansion {\n  margin: 2%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.roundsPanel {\n  width: 100%; }\n\n#teamNameImage {\n  width: 28%; }\n\n.mat-button {\n  min-width: 1%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#live-table-header-title {\n  height: 40px;\n  text-align: center; }\n\n#live-main {\n  margin-bottom: 31%; }\n\n#total_plus {\n  color: blue; }\n\n#total {\n  color: red; }\n\n#total_Even {\n  color: red; }\n\n#player-tr:nth-child(even) {\n  background: #56ab2f;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #a8e063, #56ab2f);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n#live-table td {\n  text-align: center; }\n\n#main {\n  margin-bottom: 30%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n.hide-btn {\n  min-width: 1%;\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none; }\n\n.fav {\n  color: #cccc00; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header {\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n.scroll-main {\n  height: 100%;\n  margin-top: 3%;\n  overflow: hidden; }\n\n.scroll-child {\n  height: 250px;\n  overflow-y: scroll; }\n\n.roundCard {\n  margin: 2%; }\n\n.roundCard span {\n  font-size: 75%; }\n\n#team-body {\n  margin-bottom: 5%; }\n\n.holeHeader {\n  text-align: center;\n  border: 1px solid black; }\n\n.holeByHole {\n  width: 100%;\n  border-collapse: collapse; }\n\n.holeTotal {\n  text-align: center;\n  border: 1px solid black;\n  color: red; }\n\n.holeBody {\n  text-align: center;\n  border: 1px solid black; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/components/live-score/live-player-score/live-player-score.component.ts ***!
  \****************************************************************************************/
/*! exports provided: LivePlayerScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivePlayerScoreComponent", function() { return LivePlayerScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _live_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live-score.service */ "./src/app/components/live-score/live-score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivePlayerScoreComponent = /** @class */ (function () {
    //   sortedData;
    function LivePlayerScoreComponent(_liveScoreService) {
        this._liveScoreService = _liveScoreService;
        this.playerinfo = [
            {
                event: {
                    tournament: {
                        players: {
                            player: [
                                {
                                    firstname: "Hannah",
                                    totals: {
                                        position: "1",
                                    },
                                },
                                {
                                    firstname: "Bannana",
                                    totals: {
                                        position: "8",
                                    },
                                },
                                {
                                    firstname: "Tanna",
                                    totals: {
                                        position: "4",
                                    },
                                },
                                {
                                    firstname: "FriedHamma",
                                    totals: {
                                        position: "7",
                                    }
                                }
                            ]
                        }
                    }
                }
            }
        ];
        //  this.sortedData = this.playerinfo;
    }
    LivePlayerScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._liveScoreService.getRealJsonData()
            .subscribe(function (playerdata) {
            _this.playerdata = playerdata;
        }, function (error) { return _this.errorMessage = error; });
    };
    LivePlayerScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-player-score',
            template: __webpack_require__(/*! ./live-player-score.component.html */ "./src/app/components/live-score/live-player-score/live-player-score.component.html"),
            styles: [__webpack_require__(/*! ./live-player-score.component.scss */ "./src/app/components/live-score/live-player-score/live-player-score.component.scss")]
        }),
        __metadata("design:paramtypes", [_live_score_service__WEBPACK_IMPORTED_MODULE_1__["LiveScoreService"]])
    ], LivePlayerScoreComponent);
    return LivePlayerScoreComponent;
}());

function compare(a, b, isAsc) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}


/***/ }),

/***/ "./src/app/components/live-score/live-score.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/live-score/live-score.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div >\r\n<mat-tab-group id=\"tab\">\r\n \r\n  <mat-tab label=\"Team Score\">\r\n    <app-live-team-score></app-live-team-score>\r\n  </mat-tab>\r\n  <mat-tab label=\"Player Score\">\r\n    <app-live-player-score></app-live-player-score>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-score.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/live-score/live-score.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#tab {\n  width: 100%;\n  height: 100%;\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-score.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/live-score/live-score.component.ts ***!
  \***************************************************************/
/*! exports provided: LiveScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveScoreComponent", function() { return LiveScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveScoreComponent = /** @class */ (function () {
    function LiveScoreComponent() {
    }
    LiveScoreComponent.prototype.ngOnInit = function () {
    };
    LiveScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-score',
            template: __webpack_require__(/*! ./live-score.component.html */ "./src/app/components/live-score/live-score.component.html"),
            styles: [__webpack_require__(/*! ./live-score.component.scss */ "./src/app/components/live-score/live-score.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveScoreComponent);
    return LiveScoreComponent;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-score.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/live-score/live-score.service.ts ***!
  \*************************************************************/
/*! exports provided: LiveScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveScoreService", function() { return LiveScoreService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var rxjs_add_observable_throw__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/observable/throw */ "./node_modules/rxjs-compat/_esm5/add/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var rxjs_add_operator_do__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/add/operator/do */ "./node_modules/rxjs-compat/_esm5/add/operator/do.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiveScoreService = /** @class */ (function () {
    function LiveScoreService(_http) {
        this._http = _http;
        this._playerfakeUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/e9640246c687bba078cf00ad93eaa32a/raw/a00f93d2727beabd7a49a3a2281802e0ee378a95/player.json";
        this._leaderUrl = "http://www.ghintpp.com/champ/TPPOnlineScoring/Webservices/strokedata.asmx/ScoringResultsTeamGroup?tournamentID=594&scoreMethod=Gross&players=true&teamGroupID=252&numberToInclude=0&flightID=0&scoreMode=FullScoreboard&scorecardID=0&mobileBrowser=False&noCache=True";
        this._fakeleadUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/eb9cf24aa4b81ad50446c43359bef544/raw/77c85e4b64e2fb8f77b736ae37f7ee4854ee39ac/live-team.json";
        this._faketeamUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/6d0b7b66ae3b9b00e2bf0733b743dbb1/raw/d7e02bd6ef7ce39553471a4c9efefe93124aabf7/live-teams.json";
        this._RealJsonData = "http://scores.usga.org/2018/generic/stroke.json";
    }
    LiveScoreService.prototype.getPlayer = function () {
        // var convert = require('xml-js');
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})}).catch(this.handleError)
        // .do(data => {var result = convert.xml2json(data, {compact: true, spaces: 4});console.log(result)});
        // var parseString = require('xml2js').parseString;
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})})
        // .do(data => (parseString(data, function(err, result){ console.dir("all:"+JSON.stringify(result))})))
        // .catch(this.handleError)
    };
    LiveScoreService.prototype.getRealJsonData = function () {
        return this._http.get(this._RealJsonData)
            .do(function (data) { return console.log("real data:" + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    LiveScoreService.prototype.getTeam = function () {
        return this._http.get(this._faketeamUrl)
            .catch(this.handleError);
    };
    LiveScoreService.prototype.handleError = function (err) {
        console.log(err.message);
        return rxjs_Observable__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(err.message);
    };
    LiveScoreService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LiveScoreService);
    return LiveScoreService;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/components/live-score/live-team-score/live-team-score.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"hideTeam\">\r\n  <mat-toolbar id=\"team-header-toolbar\">\r\n    <span id=\"title\">\r\n      <span>\r\n        <button class=\"hide-btn\" (click)=\"hideTeam = !hideTeam; hideScore = !hideScore\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n      </span>\r\n      {{profiles}}\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n      <button id=\"fav-button\" mat-button>\r\n        <mat-icon class=\"fav\">star</mat-icon>\r\n      </button>\r\n    </span>\r\n  </mat-toolbar>\r\n\r\n  <div id=\"team-header\">\r\n    \r\n        <span>\r\n            <img id=\"team-image\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{profiles | lowercase}}.png\"\r\n            onError=\"this.src='./assets/img/team.jpg';\"  alt=\"...\" />\r\n        </span>\r\n    \r\n   \r\n    <!-- <mat-card id=\"score-Info\"> -->\r\n    <!-- <table> -->\r\n    <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n            \r\n            <ng-container *ngIf=\"teams.name == profiles\"> -->\r\n    <!-- <tr>\r\n          <th>Thru</th>test\r\n          <th>Today</th>null\r\n          <th>Total</th>test\r\n          <th>Rank</th>test -->\r\n    <!-- </ng-container> -->\r\n    <!-- </tr>\r\n      </table>\r\n    </mat-card> -->\r\n  </div>\r\n  <div class=\"scroll-main\">\r\n    <div class=\"scroll-child\">\r\n\r\n      <!-- Round one -->\r\n      \r\n      <mat-expansion-panel id=\"team-expansion\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n                <td>Round One</td>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n\r\n        <div id=\"staticTable\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Holes</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n              <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <!-- (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\" -->\r\n                  <td>{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                </tr>\r\n\r\n              </ng-container>\r\n            </tbody>\r\n\r\n          </table>\r\n        </div>\r\n        <div id=\"scrollingTable\">\r\n          <div class=\"scrollingCard\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>01</th>\r\n                  <th>02</th>\r\n                  <th>03</th>\r\n                  <th>04</th>\r\n                  <th>05</th>\r\n                  <th>06</th>\r\n                  <th>07</th>\r\n                  <th>08</th>\r\n                  <th>09</th>\r\n                  <th>Out</th>\r\n                  <th>10</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                      * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                      * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                      * 1)}}</td>\r\n                    <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                      * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) +\r\n                      (playerdata.round[0].score[14].strokes * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n                      * 1) + (playerdata.round[0].score[17].strokes * 1)}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                      * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                      * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                      * 1) + (playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                      * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) +\r\n                      (playerdata.round[0].score[14].strokes * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes\r\n                      * 1) + (playerdata.round[0].score[17].strokes * 1)}}</td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n      <!-- </div> -->\r\n      <!-- </mat-card> -->\r\n\r\n      <!-- Round Two -->\r\n      <mat-expansion-panel id=\"team-expansion\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n             \r\n            Round Two\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div id=\"staticTable\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Holes</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td>{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                  </tr>\r\n  \r\n                </ng-container>\r\n              </tbody>\r\n\r\n          </table>\r\n        </div>\r\n        <div id=\"scrollingTable\">\r\n          <div class=\"scrollingCard\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>01</th>\r\n                  <th>02</th>\r\n                  <th>03</th>\r\n                  <th>04</th>\r\n                  <th>05</th>\r\n                  <th>06</th>\r\n                  <th>07</th>\r\n                  <th>08</th>\r\n                  <th>09</th>\r\n                  <th>Out</th>\r\n                  <th>10</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                      * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                      * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                      * 1)}}</td>\r\n                    <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                      * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) +\r\n                      (playerdata.round[1].score[14].strokes * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n                      * 1) + (playerdata.round[1].score[17].strokes * 1)}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                      * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                      * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                      * 1) + (playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                      * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) +\r\n                      (playerdata.round[1].score[14].strokes * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes\r\n                      * 1) + (playerdata.round[1].score[17].strokes * 1)}}</td>\r\n\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n\r\n      <!-- Round three -->\r\n      <mat-expansion-panel id=\"team-expansion\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n              Round Three\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div id=\"staticTable\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Holes</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td>{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                  </tr>\r\n  \r\n                </ng-container>\r\n              </tbody>\r\n\r\n          </table>\r\n        </div>\r\n        <div id=\"scrollingTable\">\r\n          <div class=\"scrollingCard\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>01</th>\r\n                  <th>02</th>\r\n                  <th>03</th>\r\n                  <th>04</th>\r\n                  <th>05</th>\r\n                  <th>06</th>\r\n                  <th>07</th>\r\n                  <th>08</th>\r\n                  <th>09</th>\r\n                  <th>Out</th>\r\n                  <th>10</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                      * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                      * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                      * 1)}}</td>\r\n                    <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                      * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) +\r\n                      (playerdata.round[2].score[14].strokes * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n                      * 1) + (playerdata.round[2].score[17].strokes * 1)}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                      * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                      * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                      * 1) + (playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                      * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) +\r\n                      (playerdata.round[2].score[14].strokes * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes\r\n                      * 1) + (playerdata.round[2].score[17].strokes * 1)}}</td>\r\n\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n      <!-- Round Four -->\r\n\r\n      <mat-expansion-panel id=\"team-expansion\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n              Round Four\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div id=\"staticTable\">\r\n          <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Holes</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td>{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                  </tr>\r\n  \r\n                </ng-container>\r\n              </tbody>\r\n\r\n          </table>\r\n        </div>\r\n        <div id=\"scrollingTable\">\r\n          <div class=\"scrollingCard\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>1</th>\r\n                  <th>2</th>\r\n                  <th>3</th>\r\n                  <th>4</th>\r\n                  <th>5</th>\r\n                  <th>6</th>\r\n                  <th>7</th>\r\n                  <th>8</th>\r\n                  <th>9</th>\r\n                  <th>Out</th>\r\n                  <th>10</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                      * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                      * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                      * 1)}}</td>\r\n                    <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                      * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) +\r\n                      (playerdata.round[3].score[14].strokes * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n                      * 1) + (playerdata.round[3].score[17].strokes * 1)}}</td>\r\n                    <td id=\"total\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                      * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                      * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                      * 1) + (playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                      * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) +\r\n                      (playerdata.round[3].score[14].strokes * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes\r\n                      * 1) + (playerdata.round[3].score[17].strokes * 1)}}</td>\r\n\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </mat-expansion-panel>\r\n\r\n  \r\n      <!-- <mat-expansion-panel id=\"team-expansion\" *ngFor=\"let roundLoop of [0,1,2,3]\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                  <td>Round {{roundLoop + 1}}</td>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n  \r\n          <div id=\"staticTable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Holes</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                  </tr>\r\n  \r\n                </ng-container>\r\n              </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <div id=\"scrollingTable\">\r\n            <div class=\"scrollingCard\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>01</th>\r\n                    <th>02</th>\r\n                    <th>03</th>\r\n                    <th>04</th>\r\n                    <th>05</th>\r\n                    <th>06</th>\r\n                    <th>07</th>\r\n                    <th>08</th>\r\n                    <th>09</th>\r\n                    <th>Out</th>\r\n                    <th>10</th>\r\n                    <th>11</th>\r\n                    <th>12</th>\r\n                    <th>13</th>\r\n                    <th>14</th>\r\n                    <th>15</th>\r\n                    <th>16</th>\r\n                    <th>17</th>\r\n                    <th>18</th>\r\n                    <th>In</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[roundLoop].score[0].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[roundLoop].score[0].strokes * 1) + (playerdata.round[roundLoop].score[1].strokes * 1) + (playerdata.round[roundLoop].score[2].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[3].strokes * 1) + (playerdata.round[roundLoop].score[4].strokes * 1) + (playerdata.round[roundLoop].score[5].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[6].strokes * 1) + (playerdata.round[roundLoop].score[7].strokes * 1) + (playerdata.round[roundLoop].score[8].strokes\r\n                        * 1)}}</td>\r\n                      <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[roundLoop].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[roundLoop].score[9].strokes * 1) + (playerdata.round[roundLoop].score[10].strokes * 1) + (playerdata.round[roundLoop].score[11].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[12].strokes * 1) + (playerdata.round[roundLoop].score[13].strokes * 1) +\r\n                        (playerdata.round[roundLoop].score[14].strokes * 1) + (playerdata.round[roundLoop].score[15].strokes * 1) + (playerdata.round[roundLoop].score[17].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[17].strokes * 1)}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[roundLoop].score[0].strokes * 1) + (playerdata.round[roundLoop].score[1].strokes * 1) + (playerdata.round[roundLoop].score[2].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[3].strokes * 1) + (playerdata.round[roundLoop].score[4].strokes * 1) + (playerdata.round[roundLoop].score[5].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[6].strokes * 1) + (playerdata.round[roundLoop].score[7].strokes * 1) + (playerdata.round[roundLoop].score[8].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[9].strokes * 1) + (playerdata.round[roundLoop].score[10].strokes * 1) + (playerdata.round[roundLoop].score[11].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[12].strokes * 1) + (playerdata.round[roundLoop].score[13].strokes * 1) +\r\n                        (playerdata.round[roundLoop].score[14].strokes * 1) + (playerdata.round[roundLoop].score[15].strokes * 1) + (playerdata.round[roundLoop].score[16].strokes\r\n                        * 1) + (playerdata.round[roundLoop].score[17].strokes * 1)}}</td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel> -->\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n<div id=\"main\" *ngIf=\"hidePlayer\">\r\n  <mat-toolbar id=\"team-header-toolbar\">\r\n    <span id=\"title\">\r\n      <span>\r\n        <button class=\"hide-btn\" (click)=\"hidePlayer = !hidePlayer;  hideScore = !hideScore\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n      </span>\r\n      {{playerProfilesFirst}} {{playerProfilesLast}} {{teamProfiles}}\r\n      <button id=\"fav-button\" mat-button>\r\n        <mat-icon class=\"fav\">star</mat-icon>\r\n      </button>\r\n    </span>\r\n  </mat-toolbar>\r\n\r\n  <div id=\"team-header\">\r\n    <span>\r\n        <img id=\"team-image\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{teamProfiles | lowercase}}.png\"\r\n            onError=\"this.src='./assets/img/team.jpg';\"  alt=\"...\" />\r\n    \r\n    </span>\r\n    <!-- <mat-card id=\"score-Info\"> -->\r\n    <!-- <table> -->\r\n    <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n            \r\n            <ng-container *ngIf=\"teams.name == teamProfiles\"> -->\r\n    <!-- <tr>\r\n            <th>Thru</th>test\r\n            <th>Today</th>null\r\n            <th>Total</th>test\r\n            <th>Rank</th>test -->\r\n    <!-- </ng-container> -->\r\n    <!-- </tr>\r\n        </table>\r\n      </mat-card> -->\r\n  </div>\r\n\r\n  <div *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round One\r\n          <br> Total Score: {{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n          * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n          * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n          * 1) + (playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n          * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) + (playerdata.round[0].score[14].strokes\r\n          * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n          * 1)}}\r\n\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n\r\n          <tbody>\r\n\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}\r\n                <sup>\r\n                  <sup>m</sup>\r\n                </sup>\r\n              </td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) + (playerdata.round[0].score[14].strokes\r\n                * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n\r\n\r\n  <div *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Two\r\n          <br> Total Score: {{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n          * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n          * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n          * 1) + (playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n          * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) + (playerdata.round[1].score[14].strokes\r\n          * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) + (playerdata.round[1].score[14].strokes\r\n                * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n\r\n  <div *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Three\r\n          <br> Total Score: {{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n          * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n          * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n          * 1) + (playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n          * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) + (playerdata.round[2].score[14].strokes\r\n          * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) + (playerdata.round[2].score[14].strokes\r\n                * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n\r\n    </mat-expansion-panel>\r\n  </div>\r\n  <div *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n    <mat-expansion-panel id=\"player-expansion\" *ngIf=\"playerdata.firstname == playerProfilesFirst && playerdata.lastname == playerProfilesLast\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Four\r\n          <br> Total Score: {{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n          * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n          * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n          * 1) + (playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n          * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) + (playerdata.round[3].score[14].strokes\r\n          * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n          * 1)}}\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"playerScore\">\r\n        <table class=\"holeByHole\">\r\n          <thead>\r\n            <tr>\r\n              <th>1</th>\r\n              <th>2</th>\r\n              <th>3</th>\r\n              <th>4</th>\r\n              <th>5</th>\r\n              <th>6</th>\r\n              <th>7</th>\r\n              <th>8</th>\r\n              <th>9</th>\r\n              <th>Out</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n            <br>\r\n            <tr>\r\n              <th>10</th>\r\n              <th>11</th>\r\n              <th>12</th>\r\n              <th>13</th>\r\n              <th>14</th>\r\n              <th>15</th>\r\n              <th>16</th>\r\n              <th>17</th>\r\n              <th>18</th>\r\n              <th>In</th>\r\n            </tr>\r\n            <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n              <td class=\"holeBody\" *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n              <td class=\"holeTotal\">{{(playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) + (playerdata.round[3].score[14].strokes\r\n                * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n                * 1)}}</td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </mat-expansion-panel>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"live-main\" *ngIf=\"!hideScore\">\r\n  <!-- <table matSort (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n         \r\n          <th mat-sort-header=\"position\">Pos</th>\r\n          <th>Name</th>\r\n        </tr>\r\n      \r\n        <tr *ngFor=\"let players of sortedData\">\r\n          <td>{{players.position}}</td>\r\n          <td>{{players.name}}</td>\r\n          <td>{{players.fat}}</td>\r\n          \r\n        </tr>\r\n      </table>\r\n   -->\r\n\r\n\r\n  <mat-toolbar id=\"live-search\">\r\n      <span class=\"example-fill-remaining-space\"></span>\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"Search for Team\" #box (keyup)=\"0\">\r\n    </mat-form-field>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n  </mat-toolbar>\r\n  <table id=\"live-table\">\r\n    <thead>\r\n      <tr id=\"live-table-header-title\">\r\n        <th></th>\r\n        <th>Pos</th>\r\n        <th>Team</th>\r\n        <th>Par</th>\r\n        <th>R1</th>\r\n        <th>R2</th>\r\n        <th>R3</th>\r\n        <th>R4</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"player-tbody\" *ngFor=\"let teamdata of data.event.tournament.teams.team; let x = index;\" class=\"tbody \">\r\n      <ng-container *ngIf=\"teamdata.name == box.value || box.value == ''\">\r\n        <tr id=\"live-table-header\">\r\n          <td>\r\n            <button class=\"hide-btn\" (click)=\"hideStuff[x] = !hideStuff[x]\">\r\n              <mat-icon>expand_{{hideStuff[x] ? 'less' : 'more'}}</mat-icon>\r\n            </button>\r\n          </td>\r\n          <td>{{teamdata.totals.position}}</td>\r\n          <td>\r\n           \r\n                <img (click)=\"hideTeam = !hideTeam;  hideScore = !hideScore; profiles = (teamdata.name) ;\" id=\"teamNameImage\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{teamdata.name | lowercase}}.png\"\r\n                onError=\"this.src='./assets/img/team.jpg';\"  alt=\"...\" />\r\n            \r\n           \r\n          </td>\r\n          <ng-container *ngIf=\"teamdata.totals.totaltopar[0] == '+'\">\r\n            <td id=\"parblue\">{{teamdata.totals.totaltopar}}</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"teamdata.totals.totaltopar[0] == '-'\">\r\n            <td id=\"parred\">{{teamdata.totals.totaltopar}}</td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"teamdata.totals.totaltopar[0] != '-' && teamdata.totals.totaltopar[0] != '+'\">\r\n            <td>{{teamdata.totals.totaltopar}}</td>\r\n          </ng-container>\r\n          <td>{{teamdata.round[0].strokes}}</td>\r\n          <td>{{teamdata.round[1].strokes}}</td>\r\n          <td>{{teamdata.round[2].strokes}}</td>\r\n          <td>{{teamdata.round[3].strokes}}</td>\r\n          <td>\r\n            <span id=\"total\">{{(teamdata.round[0].strokes * 1) + (teamdata.round[1].strokes * 1) + (teamdata.round[2].strokes * 1) + (teamdata.round[3].strokes\r\n              * 1)}}</span>\r\n          </td>\r\n        </tr>\r\n        <ng-container *ngIf=\"hideStuff[x]\">\r\n          <tr class=\"player\" *ngFor=\"let players of data.event.tournament.players.player\">\r\n            <ng-container *ngIf=\"teamdata.name == players.teamname\">\r\n              <ng-container *ngIf=\"players.totals.status == 'ok'\">\r\n                <td></td>\r\n                <td>{{players.totals.position}}</td>\r\n                <td>{{players.firstname}} {{players.lastname}}</td>\r\n                <td *ngIf=\"players.totals.totaltopar[0] == '+'\" id=\"parblue\">{{players.totals.totaltopar}}</td>\r\n                <td *ngIf=\"players.totals.totaltopar[0] == '-'\" id=\"parred\">{{players.totals.totaltopar}}</td>\r\n                <!-- <td *ngFor=\"let loop of [0,1,2,4,5,6,7,8]\">{{players.round[0].score[loop].strokes}}</td> -->\r\n                <td>{{players.round[0].strokes}}</td>\r\n                <td>{{players.round[1].strokes}}</td>\r\n                <td>{{players.round[2].strokes}}</td>\r\n                <td>{{players.round[3].strokes}}</td>\r\n                <td id=\"total\">{{(players.round[0].strokes * 1) + (players.round[1].strokes * 1) + (players.round[2].strokes * 1) + (players.round[3].strokes\r\n                  * 1)}}</td>\r\n              </ng-container>\r\n            </ng-container>\r\n          </tr>\r\n        </ng-container>\r\n      </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <!-- *ngFor=\"let team of data.event.tournament.players.player -->\r\n\r\n  <!--  -->\r\n\r\n  <!--player 1-->\r\n  <mat-divider></mat-divider>\r\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/live-score/live-team-score/live-team-score.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-main {\n  margin-bottom: 31%; }\n\n#main {\n  margin-bottom: 30%; }\n\n.holeHeader {\n  text-align: center;\n  border: 1px solid black; }\n\n.holeByHole {\n  width: 100%;\n  border-collapse: collapse; }\n\n.holeTotal {\n  text-align: center;\n  border: 1px solid black;\n  color: red; }\n\n.holeBody {\n  text-align: center;\n  border: 1px solid black; }\n\n#staticTable {\n  width: 40%;\n  float: left; }\n\n#scrollingTable {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  text-align: center; }\n\n.scrollingCard {\n  display: inline-block;\n  width: 100%; }\n\n#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\n#live-table-header-title {\n  height: 40px;\n  text-align: center; }\n\n#live-table-header {\n  text-align: center; }\n\n.player {\n  text-align: center; }\n\n.scroll-main {\n  height: 100%;\n  margin-top: 3%;\n  overflow: hidden; }\n\n.scroll-child {\n  height: 250px;\n  overflow-y: scroll; }\n\n.hide-btn {\n  min-width: 1%;\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none; }\n\n.roundCard {\n  margin: 2%; }\n\n#player-expansion {\n  margin: 2%; }\n\n.roundCard span {\n  font-size: 75%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#total {\n  color: red; }\n\n#parblue {\n  color: blue; }\n\n#parred {\n  color: red; }\n\n#player-tbody:nth-child(even) {\n  background: #adebad; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.fav {\n  color: #cccc00; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n#team-header {\n  text-align: center; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#teamNameImage {\n  width: 25%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.flexcontainer {\n  display: flex; }\n\n#team-expansion {\n  margin: 2%; }\n\n.static-table {\n  width: 40%;\n  float: left;\n  table-layout: fixed;\n  border-collapse: collapse;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.static-table th {\n  font-size: 120%;\n  text-align: left; }\n\n.static-table td {\n  font-size: 100%;\n  text-align: left; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.scroll-table {\n  width: 100%;\n  border-collapse: collapse; }\n\n.scroll-table th {\n  font-size: 120%;\n  text-align: center; }\n\n.scroll-table td {\n  font-size: 100%;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/components/live-score/live-team-score/live-team-score.component.ts ***!
  \************************************************************************************/
/*! exports provided: LiveTeamScoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LiveTeamScoreComponent", function() { return LiveTeamScoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _live_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live-score.service */ "./src/app/components/live-score/live-score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveTeamScoreComponent = /** @class */ (function () {
    function LiveTeamScoreComponent(_liveScoreService) {
        this._liveScoreService = _liveScoreService;
        this.hideStuff = [];
        // this.sortedData = this.playerdata;
    }
    LiveTeamScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._liveScoreService.getRealJsonData()
            .subscribe(function (data) {
            _this.data = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    LiveTeamScoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-live-team-score',
            template: __webpack_require__(/*! ./live-team-score.component.html */ "./src/app/components/live-score/live-team-score/live-team-score.component.html"),
            styles: [__webpack_require__(/*! ./live-team-score.component.scss */ "./src/app/components/live-score/live-team-score/live-team-score.component.scss")]
        })
        // class Defualt {
        //   private profiles: string;
        // }
        // get default(){
        //       return this.profiles 
        // }
        ,
        __metadata("design:paramtypes", [_live_score_service__WEBPACK_IMPORTED_MODULE_1__["LiveScoreService"]])
    ], LiveTeamScoreComponent);
    return LiveTeamScoreComponent;
}());

// function compare(a, b, isAsc) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
// }


/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/navigation/nav/navigation.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<mat-toolbar class=\"app-toolbar\">\r\n  <button type=\"button\" mat-button routerLink=\"\">\r\n    <i class=\"material-icons md-dark\">home</i>\r\n  </button>\r\n\r\n\r\n  <button type=\"button\" mat-button routerLink=\"live-score\">\r\n    <i class=\"material-icons md-dark\">flag</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"transport\">\r\n    <i class=\"material-icons md-dark md-inactive\">directions_bus</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"geolocation\">\r\n    <i class=\"material-icons md-dark md-inactive\">location_on</i>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/navigation/nav/navigation.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-toolbar {\n  position: fixed;\n  bottom: 0;\n  background-color: #5cd65c;\n  width: 100%; }\n\n.material-icons.md-dark {\n  color: black; }\n\n.mat-button {\n  min-width: 1%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/navigation/nav/navigation.component.ts ***!
  \*******************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/navigation/nav/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/nav/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/components/navigation/toolbar/toolbar.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"top-nav\">\r\n    <mat-toolbar class=\"header-toolbar\">\r\n        \r\n    \r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <img id=\"watcShort\"src=\"./assets/img/WATC.png\">\r\n    <button mat-button>Women</button>\r\n    <button mat-button>Men</button>\r\n   \r\n        \r\n    <span><button  type=\"button\" mat-button routerLink=\"add-info\"><i class=\"material-icons md-dark md-inactive\">reorder</i></button></span>\r\n</mat-toolbar>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/navigation/toolbar/toolbar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-toolbar {\n  background-color: #D8D8D8;\n  width: 100%;\n  height: 100%; }\n\n#watcShort {\n  width: 40%;\n  float: left; }\n\n.example-fill-remaining-space {\n  flex: 1 1 auto; }\n\n.mat-button {\n  min-width: 1%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/navigation/toolbar/toolbar.component.ts ***!
  \********************************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: __webpack_require__(/*! ./toolbar.component.html */ "./src/app/components/navigation/toolbar/toolbar.component.html"),
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/navigation/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/team-profiles/team-profiles.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!hideTeam\">\r\n    <mat-list role=\"list\"  *ngFor=\"let teamdata of data.event.tournament.teams.team\">\r\n        <mat-list-item role=\"listitem\" (click)=\"mainProfiles = (teamdata.name); hideTeam = !hideTeam\">\r\n      \r\n          <span>{{teamdata.name}}</span>\r\n      \r\n        </mat-list-item>\r\n        <mat-divider></mat-divider>\r\n        </mat-list>\r\n  </div>\r\n  <div *ngIf=\"hideTeam\">\r\n      <mat-toolbar id=\"team-header-toolbar\">\r\n          <span id=\"title\">\r\n            <span>\r\n                <mat-icon (click)=\"hideTeam = !hideTeam; hideScore = !hideScore\" >arrow_back</mat-icon>\r\n            </span>\r\n            {{mainProfiles}}\r\n            <button id=\"fav-button\" mat-button>\r\n              <mat-icon class=\"fav\">star</mat-icon>\r\n            </button>\r\n          </span>\r\n        </mat-toolbar>\r\n    <div id=\"team-header\">\r\n      <span>\r\n          <span>\r\n              <img id=\"team-image\" class=\"thumbnail-image\" src=\"http://watc.bookgolf365.ie/images/{{mainProfiles | lowercase}}.png\"/>\r\n          </span>\r\n      </span>\r\n     \r\n      <!-- <mat-card id=\"score-Info\"> -->\r\n      <!-- <table> -->\r\n      <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n              \r\n              <ng-container *ngIf=\"teams.name == mainProfiles\"> -->\r\n      <!-- <tr>\r\n            <th>Thru</th>test\r\n            <th>Today</th>null\r\n            <th>Total</th>test\r\n            <th>Rank</th>test -->\r\n      <!-- </ng-container> -->\r\n      <!-- </tr>\r\n        </table>\r\n      </mat-card> -->\r\n    </div>\r\n    <div class=\"scroll-main\">\r\n      <div class=\"scroll-child\">\r\n  \r\n        <!-- Round one -->\r\n        \r\n        <mat-expansion-panel id=\"team-expansion\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                  <td>Round One</td>\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n  \r\n          <div id=\"staticTable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Holes</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                    <td (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                  </tr>\r\n  \r\n                </ng-container>\r\n              </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <div id=\"scrollingTable\">\r\n            <div class=\"scrollingCard\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>01</th>\r\n                    <th>02</th>\r\n                    <th>03</th>\r\n                    <th>04</th>\r\n                    <th>05</th>\r\n                    <th>06</th>\r\n                    <th>07</th>\r\n                    <th>08</th>\r\n                    <th>09</th>\r\n                    <th>Out</th>\r\n                    <th>10</th>\r\n                    <th>11</th>\r\n                    <th>12</th>\r\n                    <th>13</th>\r\n                    <th>14</th>\r\n                    <th>15</th>\r\n                    <th>16</th>\r\n                    <th>17</th>\r\n                    <th>18</th>\r\n                    <th>In</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                        * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                        * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                        * 1)}}</td>\r\n                      <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                        * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) +\r\n                        (playerdata.round[0].score[14].strokes * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[17].strokes\r\n                        * 1) + (playerdata.round[0].score[17].strokes * 1)}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[0].score[0].strokes * 1) + (playerdata.round[0].score[1].strokes * 1) + (playerdata.round[0].score[2].strokes\r\n                        * 1) + (playerdata.round[0].score[3].strokes * 1) + (playerdata.round[0].score[4].strokes * 1) + (playerdata.round[0].score[5].strokes\r\n                        * 1) + (playerdata.round[0].score[6].strokes * 1) + (playerdata.round[0].score[7].strokes * 1) + (playerdata.round[0].score[8].strokes\r\n                        * 1) + (playerdata.round[0].score[9].strokes * 1) + (playerdata.round[0].score[10].strokes * 1) + (playerdata.round[0].score[11].strokes\r\n                        * 1) + (playerdata.round[0].score[12].strokes * 1) + (playerdata.round[0].score[13].strokes * 1) +\r\n                        (playerdata.round[0].score[14].strokes * 1) + (playerdata.round[0].score[15].strokes * 1) + (playerdata.round[0].score[16].strokes\r\n                        * 1) + (playerdata.round[0].score[17].strokes * 1)}}</td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        <!-- </div> -->\r\n        <!-- </mat-card> -->\r\n  \r\n        <!-- Round Two -->\r\n        <mat-expansion-panel id=\"team-expansion\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n               \r\n              Round Two\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"staticTable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Holes</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                    </tr>\r\n    \r\n                  </ng-container>\r\n                </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <div id=\"scrollingTable\">\r\n            <div class=\"scrollingCard\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>01</th>\r\n                    <th>02</th>\r\n                    <th>03</th>\r\n                    <th>04</th>\r\n                    <th>05</th>\r\n                    <th>06</th>\r\n                    <th>07</th>\r\n                    <th>08</th>\r\n                    <th>09</th>\r\n                    <th>Out</th>\r\n                    <th>10</th>\r\n                    <th>11</th>\r\n                    <th>12</th>\r\n                    <th>13</th>\r\n                    <th>14</th>\r\n                    <th>15</th>\r\n                    <th>16</th>\r\n                    <th>17</th>\r\n                    <th>18</th>\r\n                    <th>In</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                        * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                        * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                        * 1)}}</td>\r\n                      <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                        * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) +\r\n                        (playerdata.round[1].score[14].strokes * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[17].strokes\r\n                        * 1) + (playerdata.round[1].score[17].strokes * 1)}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[1].score[0].strokes * 1) + (playerdata.round[1].score[1].strokes * 1) + (playerdata.round[1].score[2].strokes\r\n                        * 1) + (playerdata.round[1].score[3].strokes * 1) + (playerdata.round[1].score[4].strokes * 1) + (playerdata.round[1].score[5].strokes\r\n                        * 1) + (playerdata.round[1].score[6].strokes * 1) + (playerdata.round[1].score[7].strokes * 1) + (playerdata.round[1].score[8].strokes\r\n                        * 1) + (playerdata.round[1].score[9].strokes * 1) + (playerdata.round[1].score[10].strokes * 1) + (playerdata.round[1].score[11].strokes\r\n                        * 1) + (playerdata.round[1].score[12].strokes * 1) + (playerdata.round[1].score[13].strokes * 1) +\r\n                        (playerdata.round[1].score[14].strokes * 1) + (playerdata.round[1].score[15].strokes * 1) + (playerdata.round[1].score[16].strokes\r\n                        * 1) + (playerdata.round[1].score[17].strokes * 1)}}</td>\r\n  \r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n  \r\n  \r\n        <!-- Round three -->\r\n        <mat-expansion-panel id=\"team-expansion\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Round Three\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"staticTable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Holes</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                    </tr>\r\n    \r\n                  </ng-container>\r\n                </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <div id=\"scrollingTable\">\r\n            <div class=\"scrollingCard\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>01</th>\r\n                    <th>02</th>\r\n                    <th>03</th>\r\n                    <th>04</th>\r\n                    <th>05</th>\r\n                    <th>06</th>\r\n                    <th>07</th>\r\n                    <th>08</th>\r\n                    <th>09</th>\r\n                    <th>Out</th>\r\n                    <th>10</th>\r\n                    <th>11</th>\r\n                    <th>12</th>\r\n                    <th>13</th>\r\n                    <th>14</th>\r\n                    <th>15</th>\r\n                    <th>16</th>\r\n                    <th>17</th>\r\n                    <th>18</th>\r\n                    <th>In</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                        * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                        * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                        * 1)}}</td>\r\n                      <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                        * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) +\r\n                        (playerdata.round[2].score[14].strokes * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[17].strokes\r\n                        * 1) + (playerdata.round[2].score[17].strokes * 1)}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[2].score[0].strokes * 1) + (playerdata.round[2].score[1].strokes * 1) + (playerdata.round[2].score[2].strokes\r\n                        * 1) + (playerdata.round[2].score[3].strokes * 1) + (playerdata.round[2].score[4].strokes * 1) + (playerdata.round[2].score[5].strokes\r\n                        * 1) + (playerdata.round[2].score[6].strokes * 1) + (playerdata.round[2].score[7].strokes * 1) + (playerdata.round[2].score[8].strokes\r\n                        * 1) + (playerdata.round[2].score[9].strokes * 1) + (playerdata.round[2].score[10].strokes * 1) + (playerdata.round[2].score[11].strokes\r\n                        * 1) + (playerdata.round[2].score[12].strokes * 1) + (playerdata.round[2].score[13].strokes * 1) +\r\n                        (playerdata.round[2].score[14].strokes * 1) + (playerdata.round[2].score[15].strokes * 1) + (playerdata.round[2].score[16].strokes\r\n                        * 1) + (playerdata.round[2].score[17].strokes * 1)}}</td>\r\n  \r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n  \r\n        <!-- Round Four -->\r\n  \r\n        <mat-expansion-panel id=\"team-expansion\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n                Round Four\r\n            </mat-panel-title>\r\n          </mat-expansion-panel-header>\r\n          <div id=\"staticTable\">\r\n            <table>\r\n              <thead>\r\n                <tr>\r\n                  <th>Holes</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td (click)=\"hideTeam = !hideTeam; hidePlayer = !hidePlayer; teamProfiles = [playerdata.teamname]; playerProfilesFirst = [playerdata.firstname]; playerProfilesLast = [playerdata.lastname]\">{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                    </tr>\r\n    \r\n                  </ng-container>\r\n                </tbody>\r\n  \r\n            </table>\r\n          </div>\r\n          <div id=\"scrollingTable\">\r\n            <div class=\"scrollingCard\">\r\n              <table>\r\n                <thead>\r\n                  <tr>\r\n                    <th>1</th>\r\n                    <th>2</th>\r\n                    <th>3</th>\r\n                    <th>4</th>\r\n                    <th>5</th>\r\n                    <th>6</th>\r\n                    <th>7</th>\r\n                    <th>8</th>\r\n                    <th>9</th>\r\n                    <th>Out</th>\r\n                    <th>10</th>\r\n                    <th>11</th>\r\n                    <th>12</th>\r\n                    <th>13</th>\r\n                    <th>14</th>\r\n                    <th>15</th>\r\n                    <th>16</th>\r\n                    <th>17</th>\r\n                    <th>18</th>\r\n                    <th>In</th>\r\n                    <th>Total</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\">\r\n                  <ng-container *ngIf=\"playerdata.teamname == mainProfiles\">\r\n                    <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                      <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                        * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                        * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                        * 1)}}</td>\r\n                      <td *ngFor=\"let loop of [9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                        * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) +\r\n                        (playerdata.round[3].score[14].strokes * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[17].strokes\r\n                        * 1) + (playerdata.round[3].score[17].strokes * 1)}}</td>\r\n                      <td id=\"total\">{{(playerdata.round[3].score[0].strokes * 1) + (playerdata.round[3].score[1].strokes * 1) + (playerdata.round[3].score[2].strokes\r\n                        * 1) + (playerdata.round[3].score[3].strokes * 1) + (playerdata.round[3].score[4].strokes * 1) + (playerdata.round[3].score[5].strokes\r\n                        * 1) + (playerdata.round[3].score[6].strokes * 1) + (playerdata.round[3].score[7].strokes * 1) + (playerdata.round[3].score[8].strokes\r\n                        * 1) + (playerdata.round[3].score[9].strokes * 1) + (playerdata.round[3].score[10].strokes * 1) + (playerdata.round[3].score[11].strokes\r\n                        * 1) + (playerdata.round[3].score[12].strokes * 1) + (playerdata.round[3].score[13].strokes * 1) +\r\n                        (playerdata.round[3].score[14].strokes * 1) + (playerdata.round[3].score[15].strokes * 1) + (playerdata.round[3].score[16].strokes\r\n                        * 1) + (playerdata.round[3].score[17].strokes * 1)}}</td>\r\n  \r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </mat-expansion-panel>\r\n        </div>\r\n        </div>\r\n        </div>\r\n        "

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/team-profiles/team-profiles.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-main {\n  margin-bottom: 31%; }\n\n#main {\n  margin-bottom: 30%; }\n\n.holeHeader {\n  text-align: center;\n  border: 1px solid black; }\n\n.holeByHole {\n  width: 100%;\n  border-collapse: collapse; }\n\n.holeTotal {\n  text-align: center;\n  border: 1px solid black;\n  color: red; }\n\n.holeBody {\n  text-align: center;\n  border: 1px solid black; }\n\n#staticTable {\n  width: 40%;\n  float: left; }\n\n#scrollingTable {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n  text-align: center; }\n\n.scrollingCard {\n  display: inline-block;\n  width: 100%; }\n\n#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\n#live-table-header-title {\n  height: 40px;\n  text-align: center; }\n\n#live-table-header {\n  text-align: center; }\n\n.player {\n  text-align: center; }\n\n.scroll-main {\n  height: 100%;\n  margin-top: 3%;\n  overflow: hidden; }\n\n.scroll-child {\n  height: 250px;\n  overflow-y: scroll; }\n\n.hide-btn {\n  min-width: 1%;\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none; }\n\n.roundCard {\n  margin: 2%; }\n\n#player-expansion {\n  margin: 2%; }\n\n.roundCard span {\n  font-size: 75%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#total {\n  color: red; }\n\n#parblue {\n  color: blue; }\n\n#parred {\n  color: red; }\n\n#player-tbody:nth-child(even) {\n  background: #adebad; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.fav {\n  color: #cccc00; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n#team-header {\n  text-align: center; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#teamNameImage {\n  width: 25%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.flexcontainer {\n  display: flex; }\n\n#team-expansion {\n  margin: 2%; }\n\n.static-table {\n  width: 40%;\n  float: left;\n  table-layout: fixed;\n  border-collapse: collapse;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.static-table th {\n  font-size: 120%;\n  text-align: left; }\n\n.static-table td {\n  font-size: 100%;\n  text-align: left; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.scroll-table {\n  width: 100%;\n  border-collapse: collapse; }\n\n.scroll-table th {\n  font-size: 120%;\n  text-align: center; }\n\n.scroll-table td {\n  font-size: 100%;\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/team-profiles/team-profiles.component.ts ***!
  \*********************************************************************/
/*! exports provided: TeamProfilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamProfilesComponent", function() { return TeamProfilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _live_score_live_score_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../live-score/live-score.service */ "./src/app/components/live-score/live-score.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamProfilesComponent = /** @class */ (function () {
    function TeamProfilesComponent(_liveScoreService) {
        this._liveScoreService = _liveScoreService;
    }
    TeamProfilesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._liveScoreService.getRealJsonData()
            .subscribe(function (data) {
            _this.data = data;
        }, function (error) { return _this.errorMessage = error; });
    };
    TeamProfilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-team-profiles',
            template: __webpack_require__(/*! ./team-profiles.component.html */ "./src/app/components/team-profiles/team-profiles.component.html"),
            styles: [__webpack_require__(/*! ./team-profiles.component.scss */ "./src/app/components/team-profiles/team-profiles.component.scss")]
        }),
        __metadata("design:paramtypes", [_live_score_live_score_service__WEBPACK_IMPORTED_MODULE_1__["LiveScoreService"]])
    ], TeamProfilesComponent);
    return TeamProfilesComponent;
}());



/***/ }),

/***/ "./src/app/components/transport/transport.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/transport/transport.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"centre\">\r\n  <h3>Currently awaiting Kinesis API for bus tracking.</h3>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/transport/transport.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/transport/transport.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center; }\n\n.centre {\n  position: absolute;\n  top: 40%; }\n"

/***/ }),

/***/ "./src/app/components/transport/transport.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/transport/transport.component.ts ***!
  \*************************************************************/
/*! exports provided: TransportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransportComponent", function() { return TransportComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TransportComponent = /** @class */ (function () {
    function TransportComponent() {
        this.zoom = 14;
        this.displayedColumns = ['bus', 'times'];
        this.dataSource = ELEMENT_DATA;
        this.NationalAcademylat = 53.394427;
        this.NationalAcademylng = -6.560887;
        this.HotelReceptionlat = 53.391241;
        this.HotelReceptionlng = -6.566353;
        this.ClubHouseRoundaboutlat = 53.390675;
        this.ClubHouseRoundaboutlng = -6.567644;
        this.Cartondefaultlat = 53.390995;
        this.Cartondefaultlng = -6.566462;
        this.MaynoothDefaultlat = 53.380809;
        this.MaynoothDefaultlng = -6.594588;
        this.ApartmentComplexlat = 53.380337;
        this.ApartmentComplexlng = -6.595629;
        this.PhoenixRestaurantlat = 53.383985;
        this.PhoenixRestaurantlng = -6.604083;
        this.PedestrianCrosslat = 53.382562;
        this.PedestrianCrosslng = -6.600772;
    }
    TransportComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-transport',
            template: __webpack_require__(/*! ./transport.component.html */ "./src/app/components/transport/transport.component.html"),
            styles: [__webpack_require__(/*! ./transport.component.scss */ "./src/app/components/transport/transport.component.scss")],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1 }))
                    ])
                ])
            ]
        })
    ], TransportComponent);
    return TransportComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: '11:30' },
    { position: 2, name: '11:00' },
];


/***/ }),

/***/ "./src/app/pipes/sort/sort.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/sort/sort.pipe.ts ***!
  \*****************************************/
/*! exports provided: SortPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortPipe", function() { return SortPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortPipe = /** @class */ (function () {
    function SortPipe() {
    }
    SortPipe.prototype.transform = function (value, args) {
        if (args == 'up') {
            return value.sort();
        }
        else if (args == 'down') {
            return value.sort();
        }
    };
    SortPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'teamFilter'
        })
    ], SortPipe);
    return SortPipe;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_0__["CdkTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"],
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/shared/quote.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/quote.service.ts ***!
  \*****************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var QuoteService = /** @class */ (function () {
    function QuoteService(http) {
        this.http = http;
    }
    QuoteService.prototype.addQuote = function (title, content, severity) {
        var body = JSON.stringify({ content: content, title: title, severity: severity });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:8000/api/quote/', body, { headers: headers });
    };
    QuoteService.prototype.getQuotes = function () {
        return this.http.get('http://localhost:8000/api/quotes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) {
            return response.json().quotes;
        }));
    };
    QuoteService.prototype.updateQuote = function (id, newTitle, newContent, newSeverity) {
        var body = JSON.stringify({ title: newTitle, content: newContent, severity: newSeverity });
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.put('http://localhost:8000/api/quote/' + id, body, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.json(); }));
    };
    QuoteService.prototype.deleteQuote = function (id) {
        return this.http.delete('http://localhost:8000/api/quote/' + id);
    };
    QuoteService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    mapbox: 'https://api.mapbox.com/styles/v1/cavinn/cjgnnbb82009v2rp3jjepsgva/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\HappyUser\Project_WAGC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map