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
/* harmony import */ var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @asymmetrik/ngx-leaflet */ "./node_modules/@asymmetrik/ngx-leaflet/dist/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_navigation_nav_navigation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/navigation/nav/navigation.component */ "./src/app/components/navigation/nav/navigation.component.ts");
/* harmony import */ var _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components//homepage/homepage.component */ "./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components//live-score/live-score.component */ "./src/app/components/live-score/live-score.component.ts");
/* harmony import */ var _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/transport/transport.component */ "./src/app/components/transport/transport.component.ts");
/* harmony import */ var _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/team-profiles/team-profiles.component */ "./src/app/components/team-profiles/team-profiles.component.ts");
/* harmony import */ var _components_navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/navigation/toolbar/toolbar.component */ "./src/app/components/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/additional-info/additional-info.component */ "./src/app/components/additional-info/additional-info.component.ts");
/* harmony import */ var _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/additional-info/news/news.component */ "./src/app/components/additional-info/news/news.component.ts");
/* harmony import */ var _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/additional-info/about/about.component */ "./src/app/components/additional-info/about/about.component.ts");
/* harmony import */ var _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/additional-info/eligibitity/eligibility.component */ "./src/app/components/additional-info/eligibitity/eligibility.component.ts");
/* harmony import */ var _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/additional-info/schedule/schedule.component */ "./src/app/components/additional-info/schedule/schedule.component.ts");
/* harmony import */ var _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/additional-info/contact/contact.component */ "./src/app/components/additional-info/contact/contact.component.ts");
/* harmony import */ var _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/homepage/services/weather.service */ "./src/app/components/homepage/services/weather.service.ts");
/* harmony import */ var _components_additional_info_news_news_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/additional-info/news/news.service */ "./src/app/components/additional-info/news/news.service.ts");
/* harmony import */ var _components_event_event_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/event/event.service */ "./src/app/components/event/event.service.ts");
/* harmony import */ var _shared_quote_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./shared/quote.service */ "./src/app/shared/quote.service.ts");
/* harmony import */ var _components_live_score_live_score_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/live-score/live-score.service */ "./src/app/components/live-score/live-score.service.ts");
/* harmony import */ var _components_event_event_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/event/event.component */ "./src/app/components/event/event.component.ts");
/* harmony import */ var _components_live_score_live_player_score_live_player_score_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/live-score/live-player-score/live-player-score.component */ "./src/app/components/live-score/live-player-score/live-player-score.component.ts");
/* harmony import */ var _components_live_score_live_team_score_live_team_score_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/live-score/live-team-score/live-team-score.component */ "./src/app/components/live-score/live-team-score/live-team-score.component.ts");
/* harmony import */ var _components_test_comp_2_side_nav_sidenav_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/test-comp-2/side-nav/sidenav.component */ "./src/app/components/test-comp-2/side-nav/sidenav.component.ts");
/* harmony import */ var _components_homepage_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/homepage/quotes/quotes.component */ "./src/app/components/homepage/quotes/quotes.component.ts");
/* harmony import */ var _components_homepage_quote_quote_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/homepage/quote/quote.component */ "./src/app/components/homepage/quote/quote.component.ts");
/* harmony import */ var _components_additional_info_news_news_quote_news_quote_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/additional-info/news/news-quote/news-quote.component */ "./src/app/components/additional-info/news/news-quote/news-quote.component.ts");
/* harmony import */ var _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/admin/admin-create/admin-create.component */ "./src/app/components/admin/admin-create/admin-create.component.ts");
/* harmony import */ var _components_admin_admin_quote_admin_quote_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/admin/admin-quote/admin-quote.component */ "./src/app/components/admin/admin-quote/admin-quote.component.ts");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/components/admin/admin.component.ts");
/* harmony import */ var _components_test_test_geo_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./components/test/test-geo.component */ "./src/app/components/test/test-geo.component.ts");
/* harmony import */ var _components_test_comp_2_test_comp_2_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./components/test-comp-2/test-comp-2.component */ "./src/app/components/test-comp-2/test-comp-2.component.ts");
/* harmony import */ var _components_test_comp_2_bottom_sheet_bottom_sheet_overview_example_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./components/test-comp-2/bottom-sheet/bottom-sheet-overview-example.component */ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example.component.ts");
/* harmony import */ var _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./pipes/sort/sort.pipe */ "./src/app/pipes/sort/sort.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























// import { FavTeamProfilesComponent } from './components/fav-team-profiles/fav-team-profiles.component';











// import { BottomSheetComponent } from './components/test-comp-2/test-comp-2.component';
// import { BottomSheetOverviewExampleSheet } from './components/test-comp-2/side-nav/sidenav.component';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pipes_sort_sort_pipe__WEBPACK_IMPORTED_MODULE_41__["SortPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_navigation_nav_navigation_component__WEBPACK_IMPORTED_MODULE_11__["NavigationComponent"],
                _components_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_12__["HomepageComponent"],
                _components_live_score_live_score_component__WEBPACK_IMPORTED_MODULE_13__["LiveScoreComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__["TransportComponent"],
                _components_additional_info_additional_info_component__WEBPACK_IMPORTED_MODULE_17__["AdditionalInfoComponent"],
                _components_additional_info_news_news_component__WEBPACK_IMPORTED_MODULE_18__["NewsComponent"],
                _components_additional_info_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"],
                _components_additional_info_eligibitity_eligibility_component__WEBPACK_IMPORTED_MODULE_20__["EligibilityComponent"],
                _components_additional_info_schedule_schedule_component__WEBPACK_IMPORTED_MODULE_21__["ScheduleComponent"],
                _components_additional_info_contact_contact_component__WEBPACK_IMPORTED_MODULE_22__["ContactComponent"],
                _components_transport_transport_component__WEBPACK_IMPORTED_MODULE_14__["TransportComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_28__["EventComponent"],
                _components_team_profiles_team_profiles_component__WEBPACK_IMPORTED_MODULE_15__["TeamProfilesComponent"],
                _components_navigation_toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_16__["ToolbarComponent"],
                _components_event_event_component__WEBPACK_IMPORTED_MODULE_28__["EventComponent"],
                _components_live_score_live_player_score_live_player_score_component__WEBPACK_IMPORTED_MODULE_29__["LivePlayerScoreComponent"],
                _components_live_score_live_team_score_live_team_score_component__WEBPACK_IMPORTED_MODULE_30__["LiveTeamScoreComponent"],
                _components_test_comp_2_side_nav_sidenav_component__WEBPACK_IMPORTED_MODULE_31__["SidenavComponent"],
                _components_homepage_quotes_quotes_component__WEBPACK_IMPORTED_MODULE_32__["QuotesComponent"],
                _components_homepage_quote_quote_component__WEBPACK_IMPORTED_MODULE_33__["QuoteComponent"],
                _components_additional_info_news_news_quote_news_quote_component__WEBPACK_IMPORTED_MODULE_34__["NewsQuoteComponent"],
                _components_admin_admin_create_admin_create_component__WEBPACK_IMPORTED_MODULE_35__["AdminCreateComponent"],
                _components_admin_admin_quote_admin_quote_component__WEBPACK_IMPORTED_MODULE_36__["AdminQuoteComponent"],
                _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_37__["AdminComponent"],
                _components_test_test_geo_component__WEBPACK_IMPORTED_MODULE_38__["TestGeoComponent"],
                _components_test_comp_2_test_comp_2_component__WEBPACK_IMPORTED_MODULE_39__["TestComp2Component"],
                _components_test_comp_2_bottom_sheet_bottom_sheet_overview_example_component__WEBPACK_IMPORTED_MODULE_40__["BottomSheetOverviewExampleSheetComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _shared_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_7__["HttpModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_5__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyCPZDSf-Sp9Ivqq7ojJx39IZhHPK54bjnI'
                }),
                _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_6__["LeafletModule"].forRoot(),
                _app_routing__WEBPACK_IMPORTED_MODULE_10__["routing"]
            ],
            entryComponents: [_components_test_comp_2_bottom_sheet_bottom_sheet_overview_example_component__WEBPACK_IMPORTED_MODULE_40__["BottomSheetOverviewExampleSheetComponent"]],
            providers: [
                _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_23__["WeatherService"],
                _components_additional_info_news_news_service__WEBPACK_IMPORTED_MODULE_24__["NewsService"],
                _components_homepage_services_weather_service__WEBPACK_IMPORTED_MODULE_23__["HomeNewsService"],
                _components_event_event_service__WEBPACK_IMPORTED_MODULE_25__["YelpService"],
                _components_live_score_live_score_service__WEBPACK_IMPORTED_MODULE_27__["LiveScoreService"],
                _shared_quote_service__WEBPACK_IMPORTED_MODULE_26__["QuoteService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
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
/* harmony import */ var _components_test_test_geo_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/test/test-geo.component */ "./src/app/components/test/test-geo.component.ts");
/* harmony import */ var _components_test_comp_2_test_comp_2_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/test-comp-2/test-comp-2.component */ "./src/app/components/test-comp-2/test-comp-2.component.ts");
















// import { BottomSheetOverviewExampleSheet } from './components/test-comp-2/side-nav/sidenav.component';
// import { BottomSheetComponent } from './components/test-comp-2/bottom-sheet/bottom-sheet.component';
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
    { path: 'test2', component: _components_test_comp_2_test_comp_2_component__WEBPACK_IMPORTED_MODULE_15__["TestComp2Component"] },
    { path: 'test2/:id', component: _components_test_comp_2_test_comp_2_component__WEBPACK_IMPORTED_MODULE_15__["TestComp2Component"] },
    { path: 'test-geo', component: _components_test_test_geo_component__WEBPACK_IMPORTED_MODULE_14__["TestGeoComponent"] },
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

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>About </mat-card-title>\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\n    </mat-card-header>\n    <img class=\"mat-card-image\" src=\"assets/img/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\n    <mat-card-content class=\"mat-card-content\">\n      <h3>About WATC 2018 in Ireland</h3>\n      <p>\n          The Golfing Union of Ireland (GUI) and the Irish Ladies Golfing Union (ILGU) will host the 2018 World Amateur Team Championships - with the Epsirito Santo Trophy (women) being competed for from Wednesday 29th August until Saturday 1st September and the Eisenhower Trophy (men) being competed for from Wednesday 5th September until Saturday 8th September. The two events will be staged at Carton House, where players will be tested on the world-famous O’Meara and Montgomerie courses . The Championships together represent an international festival of golf, during which time a Championship Gala Dinner for all participants will be staged at Maynooth University and the Biennial Meeting of the International Golf Federation will be held in Carton House on Monday 3rd September.\n      </p>\n    </mat-card-content>\n    <mat-card-actions>\n      <button mat-button>LIKE</button>\n      <button mat-button>SHARE</button>\n    </mat-card-actions>\n  </mat-card>\n"

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

module.exports = "<mat-list role=\"list\">\r\n  <mat-list-item role=\"listitem\" routerLink=\"/news\">\r\n\r\n    <span>News</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/about\">\r\n\r\n    <span>About</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/eligibility\">\r\n\r\n    <span>Eligibility</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/schedule\">\r\n\r\n    <span>Full Schedule</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/contact\">\r\n\r\n    <span>Contact</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/teamprofiles\">\r\n\r\n    <span>Team Profiles</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/livescoring\">\r\n\r\n    <span>Live Scoring</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/transport\">\r\n\r\n    <span>Transport</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n\r\n  <mat-list-item role=\"listitem\" routerLink=\"/events\">\r\n\r\n    <span>Events</span>\r\n\r\n    <i class=\"material-icons\">navigate_next</i>\r\n  </mat-list-item>\r\n  <mat-divider></mat-divider>\r\n</mat-list>\r\n\r\n<router-outlet></router-outlet>"

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

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title><h3>Contact Us</h3></mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    \r\n    <mat-card-content>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"3:1\">\r\n          <mat-grid-tile>\r\n            <i class=\"material-icons\">phone</i>\r\n            <h3>Telephone</h3>\r\n          </mat-grid-tile>\r\n          \r\n          <mat-grid-tile>\r\n              <i class=\"material-icons\">email</i>\r\n            <h3>Email</h3>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <a  class=\"para\"href=\"tel:+123 123456789\">+123 123456789</a>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <p class=\"para\"> info@watc2018.ie</p>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content class=\"mat-card-content-head\">\r\n      \r\n          <h3>Address</h3>\r\n          <p>Carton Demesne,\r\n              Maynooth,\r\n              County Kildare,\r\n              ​Ireland\r\n          </p>\r\n        </mat-card-content>\r\n\r\n    <mat-card-content >\r\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n          <mat-grid-tile>\r\n\r\n            <a href=\"https://www.facebook.com/golfingunionofireland/ \">\r\n              <img src=\"https://png.icons8.com/color/50/000000/facebook.png\" >\r\n            </a>\r\n\r\n            <h3>Facebook</h3>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n\r\n            <a href=\"https://twitter.com/guigolf?lang=en\">\r\n              <img src=\"https://png.icons8.com/color/50/000000/twitter.png\">\r\n            </a>\r\n\r\n\r\n            <h3>Twitter</h3>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>    \r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/additional-info/contact/contact.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card-content-head {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  text-align: justify;\n  text-justify: inter-word;\n  padding: -30px; }\n\n.mat-toolbar-add-info {\n  width: 100%;\n  height: 40px;\n  background-color: #5cd65c; }\n\n.material-icons {\n  font-size: 38px;\n  height: 38px;\n  width: 38px;\n  margin: 5px; }\n"

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

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\n\n<mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Eligibility</mat-card-title>\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\n    </mat-card-header>\n    <img class=\"mat-card-image\" src=\"assets/img/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\n    <mat-card-content class=\"mat-card-content\">\n      <h3>Eligibility</h3>\n      <p>\n          IGF National Federation Members may enter one women’s team and one men’s team. Players must be amateur golfers under the Rules of Amateur Status of the R&A and the United States Golf Association and nationals of the countries they represent, as defined in the IGF’s Nationality Policy.\n      </p>\n    </mat-card-content>\n  </mat-card>\n"

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

module.exports = "<div class=\"news-card-severity-{{quote.severity}}\">\n  <mat-list>\n    <mat-list-item>\n  \n    <div class=\"image-card-severity-{{quote.severity}}\">\n      <img src=\"assets/img/{{quote.severity}}.svg\">\n    </div>\n    \n    <div>\n      <p>{{ quote.content }}</p>\n    </div>\n\n\n    </mat-list-item>  \n  </mat-list>\n</div>"

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

module.exports = "\r\n   <ng-container *ngFor=\"let news of news.update\">\r\n        <mat-expansion-panel  id=\"newsUpdate\" >\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title>\r\n              <div class=\"box\">\r\n                <span>\r\n                  <mat-icon id=\"newsSeverity{{news.severity}}\">{{news.type}}</mat-icon>\r\n                </span>\r\n                <span>{{news.desc}}</span>\r\n              </div>\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              <div class=\"box\">\r\n                <!-- <span>{{yelp.timeStamp}}</span> -->\r\n              </div>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n          {{news.content}}\r\n        </mat-expansion-panel>\r\n      </ng-container>"

/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/additional-info/news/news.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#newsSeverity1 {\n  color: red; }\n\n#newsSeverity2 {\n  color: orange; }\n\n#newsSeverity3 {\n  color: green; }\n\n#newsUpdate {\n  margin: 1%;\n  margin-top: 2%; }\n\n.box {\n  display: flex;\n  align-items: center; }\n"

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
        this._newsUrl = "http://news.bookgolf365.ie/news.json";
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

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\n\n<mat-accordion class=\"mat-accordion\">\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                        (closed)=\"panelOpenState = false\"\n                        class=\"mat-expansion-panel\">\n    <mat-expansion-panel-header>\n\n    <mat-panel-title>\n        Friday 24th August\n    </mat-panel-title>\n\n    </mat-expansion-panel-header>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><p>Women's Team Arrivals</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Courses are Closed.</p> </mat-list-item>\n\n      </mat-list>\n    </mat-expansion-panel>\n</mat-accordion>\n\n<mat-accordion class=\"mat-accordion\">\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                        (closed)=\"panelOpenState = false\"\n                        class=\"mat-expansion-panel\">\n    <mat-expansion-panel-header>\n\n    <mat-panel-title>\n        Saturday 25th August\n    </mat-panel-title>\n\n    </mat-expansion-panel-header>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><p>Women's Team Arrivals</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Courses are Closed; Practice Facilities will be Open.</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Women's Registration  (1000hrs-1800hrs)</p></mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>\n</mat-accordion>\n\n<mat-accordion class=\"mat-accordion\">\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                        (closed)=\"panelOpenState = false\"\n                        class=\"mat-expansion-panel\">\n    <mat-expansion-panel-header>\n\n    <mat-panel-title>\n        Sunday 26th August \n    </mat-panel-title>\n\n    </mat-expansion-panel-header>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><p>Courses are Closed; Teams can walk courses and Practice Facilities will be Open. </p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Women's Registration (0800hrs-1800hrs)</p></mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>\n</mat-accordion>\n\n<mat-accordion class=\"mat-accordion\">\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                        (closed)=\"panelOpenState = false\"\n                        class=\"mat-expansion-panel\">\n    <mat-expansion-panel-header>\n\n    <mat-panel-title>\n        Monday 27th August \n    </mat-panel-title>\n\n    </mat-expansion-panel-header>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><p>Women's Practice Round</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Team Captains' Meeting (1600hrs, Carton House Kildare Suites on first floor)</p></mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>\n</mat-accordion>\n\n<mat-accordion class=\"mat-accordion\">\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\n                        (closed)=\"panelOpenState = false\"\n                        class=\"mat-expansion-panel\">\n    <mat-expansion-panel-header>\n\n    <mat-panel-title>\n        Tuesday 28th August\n    </mat-panel-title>\n\n    </mat-expansion-panel-header>\n      <mat-list role=\"list\">\n          <mat-list-item role=\"listitem\"><p>Women's Practice Round</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Referee's Meeting (1100hrs, Carton House Kildare Suites on first floor)</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Women's Team Photographs (Tyrconnell Room near Carton House courtyard, timetable TBC)</p></mat-list-item>\n          <mat-list-item role=\"listitem\"><p>Women's Opening Ceremony, followed by reception (Carton House)</p></mat-list-item>\n      </mat-list>\n    </mat-expansion-panel>\n</mat-accordion>\n"

/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/additional-info/schedule/schedule.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-accordion {\n  height: 10%; }\n"

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
    }
    ScheduleComponent.prototype.ngOnInit = function () {
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

module.exports = "<div class=\"example-container\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n    <mat-form-field>\n      <input matInput id=\"title\" name=\"title\" ngModel placeholder=\"Title\">\n    </mat-form-field>\n  \n    <mat-form-field>\n      <textarea matInput id=\"content\" name=\"content\" ngModel placeholder=\"Content\"></textarea>\n    </mat-form-field>\n  \n    <mat-form-field>\n        <input matInput id=\"severity\" name=\"severity\" ngModel placeholder=\"Severity\">\n    </mat-form-field>\n    <button mat-button type=\"submit\" class=\"button\">Submit</button>\n</form> \n</div>"

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

module.exports = "<div class=\"news-card-severity-{{quote.severity}}\">\n  <mat-list>\n    <mat-list-item>\n      \n      <div class=\"image-card-severity-{{quote.severity}}\">\n        <img src=\"assets/img/{{quote.severity}}.svg\">\n      </div>\n        \n      <div>\n        <p>{{ quote.content }}</p>\n      </div>\n\n  </mat-list-item> \n</mat-list>\n<div *ngIf=\"editing\">\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueTitle\">\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueContent\">\n    <input type=\"text\" class=\"input\" [(ngModel)]=\"editValueSeverity\">\n    <button mat-button (click)=\"onUpdate()\">Update</button>\n    <button mat-button (click)=\"onCancel()\">Cancel</button>\n  </div>\n  <div *ngIf=\"!editing\">\n    <button mat-button (click)=\"onEdit()\">Edit</button>\n    <button mat-button (click)=\"onDelete()\">Delete</button>\n</div>\n</div>\n"

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

module.exports = "<button mat-button class=\"button\"  [routerLink]=\"['/admin-create']\" >Create</button>\n\n<app-admin-quote *ngFor=\"let quote of quotes\" [quote]=\"quote\" (quoteDeleted)=\"onDeleted($event)\"></app-admin-quote>\n"

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
            .subscribe(function (yelp) { _this.yelp = yelp; }, function (error) { return _this.errorMessage = error; });
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
        this._yelpUrl = "https://api.yelp.com/v3/businesses/search?location=Dublin,Ireland";
        this._yelpBUrl = "https://api.yelp.com/v3/businesses?locale=en_IE";
        this._LiveBus = "";
    }
    YelpService.prototype.getYelp = function () {
        return this._http.get(this._yelpUrl, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                'Authorization': 'Bearer ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx',
                'Access-Control-Allow-Origin': '*'
            })
        })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
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

/***/ "./src/app/components/homepage/homepage.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"headerImg\">\r\n  <img src=\"./assets/img/WATC.jpg\">\r\n</div>\r\n<div id=\"homepage-body\">\r\n<button mat-button (click)=\"metric = !metric\">{{metric ? '&deg;C' : '&deg;F'}}</button> \r\n    <div>     \r\n        <ng-container *ngIf=\"!metric\">\r\n        <mat-accordion>    \r\n          <mat-expansion-panel>\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n               \r\n                <div class=\"weather_child\">\r\n                  <div class=\"box\">\r\n                    <span>\r\n                      Current:\r\n                    </span>\r\n                    <ng-container id=\"ImgTemp\">\r\n                    <span>\r\n                      <img src=\"https://openweathermap.org/img/w/{{forecast.list[0].weather[0].icon}}.png\">\r\n                    </span>\r\n                    <span>\r\n                      {{forecast.list[0].main.temp | number:'1.0-0'}}&deg;C\r\n                    </span>\r\n                    </ng-container>\r\n                    <span>\r\n                    </span>\r\n                  </div>\r\n                </div>\r\n              </mat-panel-title>\r\n            </mat-expansion-panel-header>\r\n            <div id=\"\">\r\n              <!-- index 1 -->\r\n              <ng-container *ngFor=\"let loop of [1,2,3,4]\">\r\n                <div class=\"weather_child\">\r\n                  <div class=\"box\">\r\n                    <span>\r\n                      {{(forecast.list[loop].dt_txt[11]) + (forecast.list[loop].dt_txt[12]) + (forecast.list[loop].dt_txt[13]) + (forecast.list[loop].dt_txt[14])\r\n                      + (forecast.list[loop].dt_txt[15])}} - {{(forecast.list[loop+1].dt_txt[11]) + (forecast.list[loop+1].dt_txt[12])\r\n                      + (forecast.list[loop+1].dt_txt[13]) + (forecast.list[loop+1].dt_txt[14]) + (forecast.list[loop+1].dt_txt[15])}}\r\n                    </span>\r\n                    <span class=\"example-fill-remaining-space\"></span>\r\n                    <span>\r\n                      <img src=\"https://openweathermap.org/img/w/{{forecast.list[loop].weather[0].icon}}.png\">\r\n                    </span>\r\n                    <span>\r\n                      {{forecast.list[loop].main.temp | number:'1.0-0'}}&deg;C\r\n                    </span>\r\n    \r\n                    <!-- <ng-container id=\"compass\">\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg >= 0 && forecast.list[loop].wind.deg <= 45\">\r\n                        \r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                        </mat-icon>\r\n    \r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 45 && forecast.list[loop].wind.deg <= 135\">\r\n                        \r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/east.png\">\r\n                        </mat-icon>\r\n    \r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 135 && forecast.list[loop].wind.deg <= 225\">\r\n                        \r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/south.png\">\r\n                        </mat-icon>\r\n    \r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 225 && forecast.list[loop].wind.deg <= 315\">\r\n    \r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/west.png\">\r\n                        </mat-icon>\r\n    \r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg > 315 && forecast.list[loop].wind.deg <= 360\">\r\n                        \r\n                        <mat-icon>\r\n                          <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                        </mat-icon>\r\n                      </span>\r\n                      <span *ngIf=\"forecast.list[loop].wind.deg == null\">\r\n                        Calm\r\n                      </span>\r\n                      </ng-container> -->\r\n                  </div>\r\n                </div>\r\n                <mat-divider></mat-divider>\r\n              </ng-container>\r\n            </div>\r\n          </mat-expansion-panel>\r\n        </mat-accordion>\r\n        </ng-container>\r\n      </div>\r\n\r\n\r\n  <div>\r\n    <ng-container *ngIf=\"metric\">\r\n    <mat-accordion>    \r\n      <mat-expansion-panel>\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n           \r\n            <div class=\"weather_child\">\r\n              <div class=\"box\">\r\n                <span>\r\n                  Current:\r\n                </span>\r\n                <span>\r\n                  <img src=\"https://openweathermap.org/img/w/{{forecastFH.list[0].weather[0].icon}}.png\">\r\n                </span>\r\n                <span>\r\n                  {{forecastFH.list[0].main.temp | number:'1.0-0'}}&deg;F\r\n                </span>\r\n                <span>\r\n                </span>\r\n              </div>\r\n            </div>\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n        <div id=\"\">\r\n          <!-- index 1 -->\r\n          <ng-container *ngFor=\"let loop of [1,2,3,4]\">\r\n            <div class=\"weather_child\">\r\n              <div class=\"box\">\r\n                <span>\r\n                  {{(forecastFH.list[loop].dt_txt[11]) + (forecastFH.list[loop].dt_txt[12]) + (forecastFH.list[loop].dt_txt[13]) + (forecastFH.list[loop].dt_txt[14])\r\n                  + (forecastFH.list[loop].dt_txt[15])}} - {{(forecastFH.list[loop+1].dt_txt[11]) + (forecastFH.list[loop+1].dt_txt[12])\r\n                  + (forecastFH.list[loop+1].dt_txt[13]) + (forecastFH.list[loop+1].dt_txt[14]) + (forecastFH.list[loop+1].dt_txt[15])}}\r\n                </span>\r\n                <span class=\"example-fill-remaining-space\"></span>\r\n                <span>\r\n                  <img src=\"https://openweathermap.org/img/w/{{forecastFH.list[loop].weather[0].icon}}.png\">\r\n                </span>\r\n                <span>\r\n                  {{forecastFH.list[loop].main.temp | number:'1.0-0'}}&deg;F\r\n                </span>\r\n\r\n                <!-- <ng-container id=\"compass\">\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg >= 0 && forecast.list[loop].wind.deg <= 45\">\r\n                    \r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                    </mat-icon>\r\n\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 45 && forecast.list[loop].wind.deg <= 135\">\r\n                    \r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/east.png\">\r\n                    </mat-icon>\r\n\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 135 && forecast.list[loop].wind.deg <= 225\">\r\n                    \r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/south.png\">\r\n                    </mat-icon>\r\n\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 225 && forecast.list[loop].wind.deg <= 315\">\r\n\r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/west.png\">\r\n                    </mat-icon>\r\n\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg > 315 && forecast.list[loop].wind.deg <= 360\">\r\n                    \r\n                    <mat-icon>\r\n                      <img class=\"compass-img\" src=\"./assets/img/north.png\">\r\n                    </mat-icon>\r\n                  </span>\r\n                  <span *ngIf=\"forecast.list[loop].wind.deg == null\">\r\n                    Calm\r\n                  </span>\r\n                  </ng-container> -->\r\n              </div>\r\n            </div>\r\n            <mat-divider></mat-divider>\r\n          </ng-container>\r\n        </div>\r\n      </mat-expansion-panel>\r\n    </mat-accordion>\r\n    </ng-container>\r\n  </div>\r\n  \r\n  <ng-container *ngFor=\"let news of homeNews.update\">\r\n    <ng-container *ngIf=\"news.key == 'true'\"> \r\n      <mat-expansion-panel  id=\"newsUpdate\" >\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n            <div class=\"box\">\r\n              <span>\r\n                <mat-icon id=\"newsSeverity{{news.severity}}\">{{news.type}}</mat-icon>\r\n              </span>\r\n              <span>{{news.desc}}</span>\r\n            </div>\r\n          </mat-panel-title>\r\n          <mat-panel-description>\r\n            <div class=\"box\">\r\n              <span>{{news.timeStamp}}</span>\r\n            </div>\r\n          </mat-panel-description>\r\n        </mat-expansion-panel-header>\r\n        {{news.content}}\r\n      </mat-expansion-panel>\r\n      </ng-container>\r\n    </ng-container>\r\n    </div>\r\n\r\n  \r\n  <!-- <div id=\"newsUpdate\" *ngFor=\"let news of homeNews.update\">\r\n    <mat-expansion-panel  id=\"newsUpdate\">\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          <div class=\"box\">\r\n            <span>\r\n              <mat-icon id=\"newsSeverity{{homeNews.update[0].severity}}\">{{homeNews.update[0].type}}</mat-icon>\r\n            </span>\r\n            <span>{{homeNews.update[0].desc}}</span>\r\n          </div>\r\n        </mat-panel-title>\r\n        <mat-panel-description>\r\n          <div class=\"box\">\r\n            <span>10:30 am</span>\r\n          </div>\r\n        </mat-panel-description>\r\n      </mat-expansion-panel-header>\r\n      {{homeNews.update[0].content}}\r\n    </mat-expansion-panel>\r\n  </div> -->\r\n  "

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/homepage/homepage.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#homepage-body {\n  margin-bottom: 20%; }\n\n.box {\n  display: flex;\n  align-items: center; }\n\n.box span {\n  font-size: 100%; }\n\n#headerImg img {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#weather-toolbar {\n  background-color: #5cd65c; }\n\n.flex-container {\n  display: flex;\n  justify-content: space-around;\n  background: #76b852;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to left, #8DC26F, #76b852);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n.compass-img {\n  width: 245%;\n  height: 245%; }\n\n.wind-small {\n  font-size: 70%; }\n\n.up {\n  color: blue; }\n\n.down {\n  color: red; }\n\n.flex-item {\n  width: 100%;\n  text-align: center;\n  font-size: 150%;\n  margin-top: 2%; }\n\n.flex-temp .small {\n  font-size: 70%; }\n\n#wind {\n  font-size: 80%;\n  width: 70%;\n  text-align: center; }\n\n#direction {\n  float: right; }\n\n#forecast {\n  vertical-align: middle;\n  font-size: 50%; }\n\n#compass {\n  float: right; }\n\n.mat-item-img {\n  height: 200%;\n  width: 33%;\n  margin-left: -50px; }\n\n.mat-item-content {\n  margin-left: 30px; }\n\n.mat-item-para {\n  height: 30%; }\n\n.weather_child {\n  font-size: 110%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.weather_card {\n  margin-bottom: 3%; }\n\n#newsSeverity1 {\n  color: red; }\n\n#newsSeverity2 {\n  color: orange; }\n\n#newsSeverity3 {\n  color: green; }\n\n#newsUpdate {\n  margin: 1%;\n  margin-top: 2%; }\n"

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
    function HomepageComponent(_weatherService, _homeNewsService) {
        this._weatherService = _weatherService;
        this._homeNewsService = _homeNewsService;
        this.homeNews = [];
    }
    HomepageComponent.prototype.ngOnInit = function () {
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
        __metadata("design:paramtypes", [_services_weather_service__WEBPACK_IMPORTED_MODULE_1__["WeatherService"], _services_weather_service__WEBPACK_IMPORTED_MODULE_1__["HomeNewsService"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/quote/quote.component.html":
/*!****************************************************************!*\
  !*** ./src/app/components/homepage/quote/quote.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <mat-list-item class=\"mat-item\">\n\n          \n  <img src=\"./assets/img/ILGU.png\" class=\"mat-item-img\">\n    \n      <div class=\"mat-item-content\">\n        <div class=\"mat-item-heading\">\n          <h3>{{ quote.title }}</h3>\n        </div>\n                      \n        <div class=\"mat-item-para\">\n          {{ quote.content }}\n        </div>\n\n      </div>\n    </mat-list-item>\n  </mat-list>\n<mat-divider></mat-divider>"

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
/*! exports provided: WeatherService, HomeNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeNewsService", function() { return HomeNewsService; });
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
            .do(function (data) { return console.log("Forecast: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    WeatherService.prototype.getForecastFH = function () {
        return this._http.get(this._weatherForecastFH)
            .do(function (data) { return console.log("ForecastFH: " + JSON.stringify(data)); })
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
        this._homeNewsUrl = 'http://news.bookgolf365.ie/news.json';
    }
    HomeNewsService.prototype.getHomeNews = function () {
        return this._http.get(this._homeNewsUrl)
            .do(function (data) { return console.log('news: ' + JSON.stringify(data)); })
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

// https://gist.githubusercontent.com/PatrickBookGolf365/b124a8e610abd4e659b203b9b925f7fc/raw/f6ab4e4a342ecafd31e04756419b932db5d01705/news.json
// http://news.bookgolf365.ie/news.json


/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/components/live-score/live-player-score/live-player-score.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar id=\"team-header-toolbar\">\r\n    <span id=\"title\">\r\n      <span>\r\n        <button class=\"hide-btn\" (click)=\"hideall = !hideall\">\r\n          <mat-icon>arrow_back</mat-icon>\r\n        </button>\r\n      </span>\r\n      {{teams.name}}\r\n      <button id=\"fav-button\" mat-button>\r\n        <mat-icon class=\"fav\">star</mat-icon>\r\n      </button>\r\n    </span>\r\n  </mat-toolbar>\r\n\r\n  <div id=\"team-header\">\r\n    <span>\r\n      <img id=\"team-image\" src=\"./assets/img/team.jpg\">\r\n    </span>\r\n    <mat-card id=\"score-Info\">\r\n      <table>\r\n        <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n        \r\n        <ng-container *ngIf=\"teams.name == profiles\"> -->\r\n        <tr>\r\n          <th>Thru</th>test\r\n          <th>Today</th>null\r\n          <th>Total</th>test\r\n          <th>Rank</th>test\r\n          <!-- </ng-container> -->\r\n        </tr>\r\n      </table>\r\n    </mat-card>\r\n  </div>\r\n  \r\n    <mat-expansion-panel class=\"roundsPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n          Round one\r\n          </mat-panel-title>\r\n        </mat-expansion-panel-header>\r\n <div>\r\n <table>\r\n<thead>\r\n  <tr>   \r\n    <th>Name</th>\r\n    <th>1</th>\r\n    <th>2</th>\r\n    <th>3</th>\r\n    <th>4</th>\r\n    <th>5</th>\r\n    <th>6</th>\r\n    <th>7</th>\r\n    <th>8</th>\r\n    <th>9</th>\r\n    <th>10</th>\r\n    <th>11</th>\r\n    <th>12</th>\r\n    <th>13</th>\r\n    <th>14</th>\r\n    <th>15</th>\r\n    <th>16</th>\r\n    <th>17</th>\r\n    <th>18</th>\r\n  </tr>\r\n</thead>\r\n<tbody *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\" >     \r\n  <ng-container *ngIf=\"playerdata.teamname == teamProfiles\">\r\n  <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n    <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n    <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n  </tr>\r\n  </ng-container>\r\n</tbody>\r\n</table>\r\n</div>\r\n</mat-expansion-panel>\r\n\r\n\r\n<mat-expansion-panel class=\"roundsPanel\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n      Round two\r\n      </mat-panel-title>\r\n     \r\n    </mat-expansion-panel-header>\r\n<table>\r\n    <thead>\r\n      <tr>\r\n       \r\n        <th>Name</th>\r\n        <th>1</th>\r\n        <th>2</th>\r\n        <th>3</th>\r\n        <th>4</th>\r\n        <th>5</th>\r\n        <th>6</th>\r\n        <th>7</th>\r\n        <th>8</th>\r\n        <th>9</th>\r\n        <th>10</th>\r\n        <th>11</th>\r\n        <th>12</th>\r\n        <th>13</th>\r\n        <th>14</th>\r\n        <th>15</th>\r\n        <th>16</th>\r\n        <th>17</th>\r\n        <th>18</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\" >     \r\n      <ng-container *ngIf=\"playerdata.teamname == teamProfiles\">\r\n      <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n        <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n        <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n      </tr>\r\n      </ng-container>\r\n    </tbody>\r\n    </table>\r\n    </mat-expansion-panel>\r\n\r\n    <mat-expansion-panel class=\"roundsPanel\">\r\n        <mat-expansion-panel-header>\r\n          <mat-panel-title>\r\n          Round three\r\n          </mat-panel-title>\r\n         \r\n        </mat-expansion-panel-header>\r\n      \r\n    <table>\r\n        <thead>\r\n          <tr>\r\n            <th>Name</th>\r\n            <th>1</th>\r\n            <th>2</th>\r\n            <th>3</th>\r\n            <th>4</th>\r\n            <th>5</th>\r\n            <th>6</th>\r\n            <th>7</th>\r\n            <th>8</th>\r\n            <th>9</th>\r\n            <th>10</th>\r\n            <th>11</th>\r\n            <th>12</th>\r\n            <th>13</th>\r\n            <th>14</th>\r\n            <th>15</th>\r\n            <th>16</th>\r\n            <th>17</th>\r\n            <th>18</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\" >     \r\n          <ng-container *ngIf=\"playerdata.teamname == teamProfiles\">\r\n          <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n            <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n            <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n          </tr>\r\n          </ng-container>\r\n        </tbody>\r\n        </table>\r\n        </mat-expansion-panel>\r\n\r\n\r\n        <mat-expansion-panel class=\"roundsPanel\">\r\n            <mat-expansion-panel-header>\r\n              <mat-panel-title>\r\n              Round four\r\n              </mat-panel-title>\r\n             \r\n            </mat-expansion-panel-header>\r\n          \r\n        <table>\r\n            <thead>\r\n              <tr>\r\n                <th>Name</th>\r\n                <th>1</th>\r\n                <th>2</th>\r\n                <th>3</th>\r\n                <th>4</th>\r\n                <th>5</th>\r\n                <th>6</th>\r\n                <th>7</th>\r\n                <th>8</th>\r\n                <th>9</th>\r\n                <th>10</th>\r\n                <th>11</th>\r\n                <th>12</th>\r\n                <th>13</th>\r\n                <th>14</th>\r\n                <th>15</th>\r\n                <th>16</th>\r\n                <th>17</th>\r\n                <th>18</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\" >     \r\n              <ng-container *ngIf=\"playerdata.teamname == teamProfiles\">\r\n              <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n              </tr>\r\n              </ng-container>\r\n            </tbody>\r\n            </table>\r\n            </mat-expansion-panel>\r\n\r\n\r\n\r\n<div id=\"live-main\">\r\n    <!-- <table matSort (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n         \r\n          <th mat-sort-header=\"position\">Pos</th>\r\n          <th>Name</th>\r\n        </tr>\r\n      \r\n        <tr *ngFor=\"let players of playerinfo.event.tournament.players.player; let i = index\">\r\n       {{i}}\r\n          \r\n        </tr>\r\n      </table> -->\r\n  <mat-toolbar id=\"live-search\">\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"search\" #box (keyup)=\"0\">\r\n    </mat-form-field>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <button mat-button>\r\n      <mat-icon>search</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n  \r\n      <table  id=\"live-table\">\r\n    <thead>\r\n      <tr id=\"live-table-header-title\">\r\n        <th>Pos</th>\r\n        <th>Player</th>\r\n        <th>Team</th>\r\n        <th>Hole</th>\r\n        <th>R1</th>\r\n        <th>R2</th>\r\n        <th>R3</th>\r\n        <th>R4</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"player-tbody\" *ngFor=\"let playerdata of playerdata.event.tournament.players.player; let i = index\" > \r\n      <ng-container *ngIf=\"playerdata.teamname == box.value || box.value == ''\">\r\n        \r\n      <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n        <td>{{playerdata.totals.position}}</td>\r\n        <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n        <td> <button class=\"\" (click)=\"teamProfiles = (playerdata.teamname) ;\" mat-button>\r\n            <img src=\"./assets/img/{{playerdata.teamname}}.png\" title=\"{{playerdata.teamname}}\">\r\n          </button></td>\r\n        <td>{{teamProfiles}}</td>\r\n        <td>{{playerdata.round[0].strokes}}</td>\r\n        <td>{{playerdata.round[1].strokes}}</td>\r\n        <td>{{playerdata.round[2].strokes}}</td>\r\n        <td>{{playerdata.round[3].strokes}}</td>\r\n        <td>{{(playerdata.round[0].strokes * 1)  + (playerdata.round[1].strokes * 1) + (playerdata.round[2].strokes * 1) + (playerdata.round[3].strokes * 1)}}</td>\r\n      </tr>\r\n      \r\n      </ng-container>\r\n    </tbody>\r\n  \r\n  </table>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/components/live-score/live-player-score/live-player-score.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\ntbody:nth-child(even) {\n  background-color: #adebad; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.roundsPanel {\n  width: 100%; }\n\n.mat-button {\n  min-width: 1%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#live-table-header-title {\n  height: 40px;\n  text-align: center; }\n\n#live-main {\n  margin-bottom: 31%; }\n\n#total_plus {\n  color: blue; }\n\n#total_Even {\n  color: red; }\n\ntr:nth-child(even) {\n  background: #56ab2f;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: linear-gradient(to right, #a8e063, #56ab2f);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ }\n\n#live-table td {\n  text-align: center; }\n"

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

module.exports = "<div id=\"main\" *ngIf=\"hideall\">\r\n      <mat-toolbar id=\"team-header-toolbar\">\r\n        <span id=\"title\">\r\n          <span>\r\n            <button class=\"hide-btn\" (click)=\"hideall = !hideall\">\r\n              <mat-icon>arrow_back</mat-icon>\r\n            </button>\r\n          </span>\r\n          {{profiles}}\r\n          <button id=\"fav-button\" mat-button>\r\n            <mat-icon class=\"fav\">star</mat-icon>\r\n          </button>\r\n        </span>\r\n      </mat-toolbar>\r\n\r\n      <div id=\"team-header\">\r\n        <span>\r\n          <img id=\"team-image\" src=\"./assets/img/team.jpg\">\r\n        </span>\r\n        <mat-card id=\"score-Info\">\r\n          <table>\r\n            <!-- <tr *ngFor=\"let teams of data.event.tournament.teams.team\">\r\n            \r\n            <ng-container *ngIf=\"teams.name == profiles\"> -->\r\n            <tr>\r\n              <th>Thru</th>test\r\n              <th>Today</th>null\r\n              <th>Total</th>test\r\n              <th>Rank</th>test\r\n              <!-- </ng-container> -->\r\n            </tr>\r\n          </table>\r\n        </mat-card>\r\n      </div>\r\n      <div class=\"scroll-main\">\r\n        <div class=\"scroll-child\">\r\n          <!-- Round one -->\r\n          <mat-card class=\"roundCard\">\r\n            <mat-card-title>\r\n              <button class=\"hide-btn\" (click)=\"hideRoundOne = !hideRoundOne\">\r\n                <mat-icon>expand_{{hideRoundOne ? 'less' : 'more'}}</mat-icon>\r\n              </button>\r\n              <span>\r\n                Round One\r\n              </span>\r\n            </mat-card-title>\r\n            <div id=\"team-body\" *ngIf=\"hideRoundOne\">\r\n              <!-- Static table -->\r\n              <!-- <div class=\"static-wrapper\">\r\n                <table class=\"static-table\">\r\n                  <tr>\r\n                    <th>Hole</th>\r\n                  </tr>\r\n                  <tr *ngFor=\"let players of data.event.tournament.players.player;\">\r\n                    <ng-container *ngIf=\"players.teamname == profiles\">\r\n                      {{players.firstname}} {{players.lastname}}\r\n                    </ng-container>\r\n                  </tr>\r\n                </table>\r\n              </div> -->\r\n\r\n              <!-- Scroll table -->\r\n              <!-- <div class=\"scrolling-wrapper\"> -->\r\n                  <table>\r\n                      <thead>\r\n                        <tr>   \r\n                          <th>Name</th>\r\n                          <th>1</th>\r\n                          <th>2</th>\r\n                          <th>3</th>\r\n                          <th>4</th>\r\n                          <th>5</th>\r\n                          <th>6</th>\r\n                          <th>7</th>\r\n                          <th>8</th>\r\n                          <th>9</th>\r\n                          <th>10</th>\r\n                          <th>11</th>\r\n                          <th>12</th>\r\n                          <th>13</th>\r\n                          <th>14</th>\r\n                          <th>15</th>\r\n                          <th>16</th>\r\n                          <th>17</th>\r\n                          <th>18</th>\r\n                        </tr>\r\n                      </thead>\r\n                      <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\" >     \r\n                        <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                        <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                          <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                          <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[0].score[loop].strokes}}</td>\r\n                        </tr>\r\n                        </ng-container>\r\n                      </tbody>\r\n                      </table>\r\n              <!-- </div> -->\r\n\r\n              <!-- </mat-expansion-panel> -->\r\n            </div>\r\n          </mat-card>\r\n\r\n          <!-- Round Two -->\r\n          <mat-card class=\"roundCard\">\r\n              <mat-card-title>\r\n                <button class=\"hide-btn\" (click)=\"hideRoundTwo = !hideRoundTwo\">\r\n                  <mat-icon>expand_{{hideRoundTwo ? 'less' : 'more'}}</mat-icon>\r\n                </button>\r\n                <span>\r\n                  Round Two\r\n                </span>\r\n              </mat-card-title>\r\n              <div id=\"team-body\" *ngIf=\"hideRoundTwo\">\r\n                <!-- Static table -->\r\n                <!-- <div class=\"static-wrapper\">\r\n                  <table class=\"static-table\">\r\n                    <tr>\r\n                      <th>Hole</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let players of data.event.tournament.players.player;\">\r\n                      <ng-container *ngIf=\"players.teamname == profiles\">\r\n                        {{players.firstname}} {{players.lastname}}\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n                </div> -->\r\n  \r\n                <!-- Scroll table -->\r\n                <!-- <div class=\"scrolling-wrapper\"> -->\r\n                    <table>\r\n                        <thead>\r\n                          <tr>   \r\n                            <th>Name</th>\r\n                            <th>1</th>\r\n                            <th>2</th>\r\n                            <th>3</th>\r\n                            <th>4</th>\r\n                            <th>5</th>\r\n                            <th>6</th>\r\n                            <th>7</th>\r\n                            <th>8</th>\r\n                            <th>9</th>\r\n                            <th>10</th>\r\n                            <th>11</th>\r\n                            <th>12</th>\r\n                            <th>13</th>\r\n                            <th>14</th>\r\n                            <th>15</th>\r\n                            <th>16</th>\r\n                            <th>17</th>\r\n                            <th>18</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\" >     \r\n                          <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                          <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                            <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                            <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[1].score[loop].strokes}}</td>\r\n                          </tr>\r\n                          </ng-container>\r\n                        </tbody>\r\n                        </table>\r\n                <!-- </div> -->\r\n  \r\n                <!-- </mat-expansion-panel> -->\r\n              </div>\r\n            </mat-card>\r\n        \r\n          <!-- Round three -->\r\n          <mat-card class=\"roundCard\">\r\n              <mat-card-title>\r\n                <button class=\"hide-btn\" (click)=\"hideRoundThree = !hideRoundThree\">\r\n                  <mat-icon>expand_{{hideRoundThree ? 'less' : 'more'}}</mat-icon>\r\n                </button>\r\n                <span>\r\n                  Round Three\r\n                </span>\r\n              </mat-card-title>\r\n              <div id=\"team-body\" *ngIf=\"hideRoundThree\">\r\n                <!-- Static table -->\r\n                <!-- <div class=\"static-wrapper\">\r\n                  <table class=\"static-table\">\r\n                    <tr>\r\n                      <th>Hole</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let players of data.event.tournament.players.player;\">\r\n                      <ng-container *ngIf=\"players.teamname == profiles\">\r\n                        {{players.firstname}} {{players.lastname}}\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n                </div> -->\r\n  \r\n                <!-- Scroll table -->\r\n                <!-- <div class=\"scrolling-wrapper\"> -->\r\n                    <table>\r\n                        <thead>\r\n                          <tr>   \r\n                            <th>Name</th>\r\n                            <th>1</th>\r\n                            <th>2</th>\r\n                            <th>3</th>\r\n                            <th>4</th>\r\n                            <th>5</th>\r\n                            <th>6</th>\r\n                            <th>7</th>\r\n                            <th>8</th>\r\n                            <th>9</th>\r\n                            <th>10</th>\r\n                            <th>11</th>\r\n                            <th>12</th>\r\n                            <th>13</th>\r\n                            <th>14</th>\r\n                            <th>15</th>\r\n                            <th>16</th>\r\n                            <th>17</th>\r\n                            <th>18</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\" >     \r\n                          <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                          <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                            <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                            <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[2].score[loop].strokes}}</td>\r\n                          </tr>\r\n                          </ng-container>\r\n                        </tbody>\r\n                        </table>\r\n                <!-- </div> -->\r\n  \r\n                <!-- </mat-expansion-panel> -->\r\n              </div>\r\n            </mat-card>\r\n         \r\n          <!-- Round Four -->\r\n          <mat-card class=\"roundCard\">\r\n              <mat-card-title>\r\n                <button class=\"hide-btn\" (click)=\"hideRoundFour = !hideRoundFour\">\r\n                  <mat-icon>expand_{{hideRoundFour ? 'less' : 'more'}}</mat-icon>\r\n                </button>\r\n                <span>\r\n                  Round Four\r\n                </span>\r\n              </mat-card-title>\r\n              <div id=\"team-body\" *ngIf=\"hideRoundFour\">\r\n                <!-- Static table -->\r\n                <!-- <div class=\"static-wrapper\">\r\n                  <table class=\"static-table\">\r\n                    <tr>\r\n                      <th>Hole</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let players of data.event.tournament.players.player;\">\r\n                      <ng-container *ngIf=\"players.teamname == profiles\">\r\n                        {{players.firstname}} {{players.lastname}}\r\n                      </ng-container>\r\n                    </tr>\r\n                  </table>\r\n                </div> -->\r\n  \r\n                <!-- Scroll table -->\r\n                <!-- <div class=\"scrolling-wrapper\"> -->\r\n                    <table>\r\n                        <thead>\r\n                          <tr>   \r\n                            <th>Name</th>\r\n                            <th>1</th>\r\n                            <th>2</th>\r\n                            <th>3</th>\r\n                            <th>4</th>\r\n                            <th>5</th>\r\n                            <th>6</th>\r\n                            <th>7</th>\r\n                            <th>8</th>\r\n                            <th>9</th>\r\n                            <th>10</th>\r\n                            <th>11</th>\r\n                            <th>12</th>\r\n                            <th>13</th>\r\n                            <th>14</th>\r\n                            <th>15</th>\r\n                            <th>16</th>\r\n                            <th>17</th>\r\n                            <th>18</th>\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody *ngFor=\"let playerdata of data.event.tournament.players.player; let i = index\" >     \r\n                          <ng-container *ngIf=\"playerdata.teamname == profiles\">\r\n                          <tr *ngIf=\"playerdata.totals.status == 'ok'\">\r\n                            <td >{{playerdata.firstname}} {{playerdata.lastname}}</td>\r\n                            <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17]\">{{playerdata.round[3].score[loop].strokes}}</td>\r\n                          </tr>\r\n                          </ng-container>\r\n                        </tbody>\r\n                        </table>\r\n                <!-- </div> -->\r\n  \r\n                <!-- </mat-expansion-panel> -->\r\n              </div>\r\n            </mat-card>\r\n        \r\n        </div>\r\n     </div>\r\n</div>\r\n<!-- Par  -->\r\n\r\n<!-- Player1  -->\r\n\r\n<!-- <ng-container *ngFor=\"let players of data.event.tournament.players.player;\">\r\n            <tr *ngIf=\"profiles == players.teamname\" >\r\n              <tr>\r\n              <td>{{players.round[0].score[0].strokes}}</td>\r\n              <td>{{players.round[0].score[1].strokes}}</td>\r\n              <td>{{(players.round[0].score[0].strokes * 1) + (players.round[0].score[1].strokes * 1) + (players.round[0].score[2].strokes * 1) + (players.round[0].score[3].strokes * 1) + (players.round[0].score[4].strokes * 1) + (players.round[0].score[5].strokes * 1) + (players.round[0].score[6].strokes * 1) + (players.round[0].score[7].strokes * 1) + (players.round[0].score[8].strokes * 1)}}</td>\r\n              <td>{{players.round[0].score[9].strokes}}</td>\r\n              <td>{{players.round[0].score[10].strokes}}</td>\r\n              <td>{{players.round[0].score[11].strokes}}</td>\r\n              <td>{{players.round[0].score[12].strokes}}</td>\r\n              <td>{{players.round[0].score[13].strokes}}</td>\r\n              <td>{{players.round[0].score[14].strokes}}</td>\r\n              <td>{{players.round[0].score[15].strokes}}</td>\r\n              <td>{{players.round[0].score[16].strokes}}</td>\r\n              <td>{{players.round[0].score[17].strokes}}</td>\r\n              <td>{{(players.round[0].score[9].strokes * 1) + (players.round[0].score[10].strokes * 1) + (players.round[0].score[11].strokes * 1) + \r\n                  (players.round[0].score[12].strokes * 1) + (players.round[0].score[13].strokes * 1) + (players.round[0].score[14].strokes * 1) + \r\n                  (players.round[0].score[15].strokes * 1) + (players.round[0].score[16].strokes * 1) + (players.round[0].score[17].strokes * 1)}}</td>\r\n              <td>{{(players.round[0].score[9].strokes * 1) + (players.round[0].score[10].strokes * 1) + (players.round[0].score[11].strokes * 1) + \r\n                  (players.round[0].score[12].strokes * 1) + (players.round[0].score[13].strokes * 1) + (players.round[0].score[14].strokes * 1) + \r\n                  (players.round[0].score[15].strokes * 1) + (players.round[0].score[16].strokes * 1) + (players.round[0].score[17].strokes * 1) + \r\n                  (players.round[0].score[0].strokes * 1) + (players.round[0].score[1].strokes * 1) + (players.round[0].score[2].strokes * 1) +  \r\n                  (players.round[0].score[3].strokes * 1) + (players.round[0].score[4].strokes * 1) + (players.round[0].score[5].strokes * 1) + \r\n                  (players.round[0].score[6].strokes * 1) + (players.round[0].score[7].strokes * 1) + (players.round[0].score[8].strokes * 1)}}</td>\r\n                </tr> -->\r\n\r\n<!-- Round  -->\r\n\r\n<!-- Score Against Par  -->\r\n<!--  \r\n              </table>\r\n    </mat-expansion-panel>\r\n  </div>\r\n</div> -->\r\n<!-- \r\n<mat-expansion-panel [disabled]=\"isDisabled\">\r\n    <mat-expansion-panel-header>\r\n      This is the expansion title\r\n    </mat-expansion-panel-header>\r\n    <mat-panel-description>\r\n      This is a summary of the content\r\n    </mat-panel-description>\r\n\r\n<table>\r\n    <thead>\r\n      <th >Hole</th>\r\n      <th>1</th>\r\n      <th>2</th>\r\n      <th>3</th>\r\n      <th>4</th>\r\n      <th>5</th>\r\n      <th>6</th>\r\n      <th>7</th>\r\n      <th>8</th>\r\n      <th>9</th>   \r\n      <th>Out</th>\r\n      <th>10</th>\r\n      <th>11</th>\r\n      <th>12</th>\r\n      <th>13</th>\r\n      <th>14</th>\r\n      <th>15</th>\r\n      <th>16</th>\r\n      <th>17</th>\r\n      <th>18</th>\r\n      <th>In</th>\r\n      <th>Total</th>\r\n    </thead>\r\n    <tbody>\r\n      <tr  *ngFor=\"let players of data.event.tournament.players.player\">\r\n        <ng-container *ngIf=\"players.teamname == profiles\">\r\n          <td>{{players.firstname}} {{players.lastname}}</td>\r\n           <td *ngFor=\"let loop of [0,1,2,3,4,5,6,7,8]\">{{players.round[0].score[loop].strokes}}</td>\r\n          <td>{{(players.round[0].score[0].strokes * 1) + (players.round[0].score[1].strokes * 1) + (players.round[0].score[2].strokes * 1) + (players.round[0].score[3].strokes * 1) + (players.round[0].score[4].strokes * 1) + (players.round[0].score[5].strokes * 1) + (players.round[0].score[6].strokes * 1) + (players.round[0].score[7].strokes * 1) + (players.round[0].score[8].strokes * 1)}}</td>\r\n          <td *ngFor=\"let loop2 of [9,10,11,12,13,14,15,16,17]\">{{players.round[0].score[loop2].strokes}}</td>\r\n          <td>{{(players.round[0].score[9].strokes * 1) + (players.round[0].score[10].strokes * 1) + (players.round[0].score[11].strokes * 1) + (players.round[0].score[12].strokes * 1) + (players.round[0].score[13].strokes * 1) + (players.round[0].score[14].strokes * 1) + (players.round[0].score[15].strokes * 1) + (players.round[0].score[16].strokes * 1) + (players.round[0].score[17].strokes * 1)}}</td>\r\n          <td>{{(players.round[0].score[0].strokes * 1) + (players.round[0].score[1].strokes * 1) + (players.round[0].score[2].strokes * 1) + (players.round[0].score[3].strokes * 1) + (players.round[0].score[4].strokes * 1) + (players.round[0].score[5].strokes * 1) + (players.round[0].score[6].strokes * 1) + (players.round[0].score[7].strokes * 1) + (players.round[0].score[8].strokes * 1) + (players.round[0].score[9].strokes * 1) + (players.round[0].score[10].strokes * 1) + (players.round[0].score[11].strokes * 1) + (players.round[0].score[12].strokes * 1) + (players.round[0].score[13].strokes * 1) + (players.round[0].score[14].strokes * 1) + (players.round[0].score[15].strokes * 1) + (players.round[0].score[16].strokes * 1) + (players.round[0].score[17].strokes * 1)}} </td> -->\r\n<!-- </ng-container>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</mat-expansion-panel> -->\r\n\r\n<!-- <div *ngFor=\"let teaminfo of data.event.tournament.teams.team\"></div>\r\n    <div *ngFor=\"let playerinfo of data.event.tournament.players.player\">\r\n      \r\n        \r\n        {{playerinfo.firstname}} {{playerinfo.lastname}} \r\n        \r\n     \r\n    </div>\r\n    \r\n    \r\n   \r\n</div> -->\r\n\r\n\r\n\r\n      \r\n     \r\n \r\n  \r\n\r\n\r\n\r\n\r\n<div id=\"live-main\" *ngIf=\"!hideall\">\r\n    <!-- <table matSort (matSortChange)=\"sortData($event)\">\r\n        <tr>\r\n         \r\n          <th mat-sort-header=\"position\">Pos</th>\r\n          <th>Name</th>\r\n        </tr>\r\n      \r\n        <tr *ngFor=\"let players of sortedData\">\r\n          <td>{{players.position}}</td>\r\n          <td>{{players.name}}</td>\r\n          <td>{{players.fat}}</td>\r\n          \r\n        </tr>\r\n      </table>\r\n   -->\r\n   \r\n \r\n  <mat-toolbar id=\"live-search\">\r\n    <mat-form-field>\r\n      <input type=\"text\" matInput placeholder=\"search\" #box (keyup)=\"0\">\r\n    </mat-form-field>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <button mat-button>\r\n      <mat-icon>search</mat-icon>\r\n    </button>\r\n  </mat-toolbar>\r\n  <table id=\"live-table\">\r\n    <thead>\r\n      <tr id=\"live-table-header-title\">\r\n        <th></th>\r\n        <th>Pos</th>\r\n        <th>Team</th>\r\n        <th>Hole</th>\r\n        <th>Par</th>\r\n        <th>R1</th>\r\n        <th>R2</th>\r\n        <th>R3</th>\r\n        <th>R4</th>\r\n        <th>Total</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody id=\"player-tbody\" *ngFor=\"let teamdata of data.event.tournament.teams.team; let x = index;\" class=\"tbody \">\r\n      <ng-container *ngIf=\"teamdata.name == box.value || box.value == ''\">\r\n      <tr id=\"live-table-header\">\r\n        <td>\r\n          <button class=\"hide-btn\" (click)=\"hideStuff[x] = !hideStuff[x]\">\r\n            <mat-icon>expand_{{hideStuff[x] ? 'less' : 'more'}}</mat-icon>\r\n          </button>\r\n        </td>\r\n        <td>{{teamdata.totals.position}}</td>\r\n        <td>\r\n          <button class=\"\" (click)=\"hideall = !hideall; profiles = (teamdata.name) ;\" mat-button>\r\n            <img src=\"./assets/img/{{teamdata.name}}.png\" title=\"{{teamdata.name}}\">\r\n          </button>\r\n        </td>\r\n        <td>null</td>\r\n        <ng-container *ngIf=\"teamdata.totals.totaltopar[0] == '+'\">\r\n          <td id=\"parblue\">{{teamdata.totals.totaltopar}}</td>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"teamdata.totals.totaltopar[0] == '-'\">\r\n          <td id=\"parred\">{{teamdata.totals.totaltopar}}</td>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"teamdata.totals.totaltopar[0] != '-' && teamdata.totals.totaltopar[0] != '+'\">\r\n          <td>{{teamdata.totals.totaltopar}}</td>\r\n        </ng-container>\r\n        <td>{{teamdata.round[0].strokes}}</td>\r\n        <td>{{teamdata.round[1].strokes}}</td>\r\n        <td>{{teamdata.round[2].strokes}}</td>\r\n        <td>{{teamdata.round[3].strokes}}</td>\r\n        <td>\r\n          <span id=\"total\">{{(teamdata.round[0].strokes * 1) + (teamdata.round[1].strokes * 1) + (teamdata.round[2].strokes * 1) + (teamdata.round[3].strokes\r\n            * 1)}}</span>\r\n        </td>\r\n      </tr>\r\n      <ng-container *ngIf=\"hideStuff[x]\">\r\n        <tr class=\"player\" *ngFor=\"let players of data.event.tournament.players.player\">\r\n          <ng-container *ngIf=\"teamdata.name == players.teamname\">\r\n            <ng-container *ngIf=\"players.totals.status == 'ok'\">\r\n            <td></td>\r\n            <td>{{players.totals.position}}</td>\r\n            <td>{{players.firstname}} {{players.lastname}}</td>\r\n            <td>null</td>\r\n            <td *ngIf=\"players.totals.totaltopar[0] == '+'\" id=\"parblue\">{{players.totals.totaltopar}}</td>\r\n            <td *ngIf=\"players.totals.totaltopar[0] == '-'\" id=\"parred\">{{players.totals.totaltopar}}</td>\r\n            <!-- <td *ngFor=\"let loop of [0,1,2,4,5,6,7,8]\">{{players.round[0].score[loop].strokes}}</td> -->\r\n            <td>{{players.round[0].strokes}}</td>\r\n            <td>{{players.round[1].strokes}}</td>\r\n            <td>{{players.round[2].strokes}}</td>\r\n            <td>{{players.round[3].strokes}}</td>\r\n            <td>{{(players.round[0].strokes * 1) + (players.round[1].strokes * 1) + (players.round[2].strokes * 1) + (players.round[3].strokes\r\n              * 1)}}</td>\r\n              </ng-container>\r\n          </ng-container>\r\n        </tr>\r\n      </ng-container>\r\n    </ng-container>\r\n    </tbody>\r\n  </table>\r\n  <!-- *ngFor=\"let team of data.event.tournament.players.player -->\r\n\r\n  <!--  -->\r\n\r\n  <!--player 1-->\r\n  <mat-divider></mat-divider>\r\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/components/live-score/live-team-score/live-team-score.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#live-main {\n  margin-bottom: 31%; }\n\n#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\n#live-table-header-title {\n  height: 40px;\n  text-align: center; }\n\n#live-table-header {\n  text-align: center; }\n\n.player {\n  text-align: center; }\n\n.scroll-main {\n  height: 100%;\n  margin-top: 3%;\n  overflow: hidden; }\n\n.scroll-child {\n  height: 250px;\n  overflow-y: scroll; }\n\n.hide-btn {\n  min-width: 1%;\n  background-color: Transparent;\n  background-repeat: no-repeat;\n  border: none;\n  cursor: pointer;\n  overflow: hidden;\n  outline: none; }\n\n.roundCard {\n  margin: 2%; }\n\n.roundCard span {\n  font-size: 75%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#total {\n  color: red; }\n\n#parblue {\n  color: blue; }\n\n#parred {\n  color: red; }\n\n#player-tbody:nth-child(even) {\n  background: #adebad; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\n.fav {\n  color: #cccc00; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n#team-header {\n  text-align: center; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#main {\n  margin-bottom: 30%; }\n\n#team-body {\n  margin-bottom: 5%; }\n\n.static-table {\n  width: 40%;\n  float: left;\n  table-layout: fixed;\n  border-collapse: collapse;\n  white-space: nowrap;\n  overflow: hidden; }\n\n.static-table th {\n  font-size: 120%;\n  text-align: left; }\n\n.static-table td {\n  font-size: 100%;\n  text-align: left; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.scroll-table {\n  width: 100%;\n  border-collapse: collapse; }\n\n.scroll-table th {\n  font-size: 120%;\n  text-align: center; }\n\n.scroll-table td {\n  font-size: 100%;\n  text-align: center; }\n"

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

module.exports = "<app-toolbar></app-toolbar>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<mat-toolbar class=\"app-toolbar\">\r\n  <button type=\"button\" mat-button routerLink=\"\">\r\n    <i class=\"material-icons md-dark\">home</i>\r\n  </button>\r\n\r\n\r\n  <button type=\"button\" mat-button routerLink=\"live-score\">\r\n    <i class=\"material-icons md-dark\">flag</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"transport\">\r\n    <i class=\"material-icons md-dark md-inactive\">directions_bus</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"geo-location\">\r\n    <i class=\"material-icons md-dark md-inactive\">location_on</i>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n  \r\n\r\n"

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

module.exports = "<div id=\"top-nav\">\r\n    <mat-toolbar class=\"header-toolbar\">\r\n    <span><mat-icon><img src=\"./assets/img/ILGU.png\" id=\"ILGU-logo\"></mat-icon></span>\r\n    <span><mat-icon><img src=\"./assets/img/GUI2.png\" id=\"GUI2-logo\"></mat-icon></span>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <span><button  type=\"button\" mat-button routerLink=\"add-info\"><i class=\"material-icons md-dark md-inactive\">reorder</i></button></span>\r\n</mat-toolbar>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/components/navigation/toolbar/toolbar.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-toolbar {\n  background-color: #D8D8D8;\n  width: 100%;\n  height: 40px; }\n\n.header-toolbar mat-icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#ILGU-logo {\n  width: 150%;\n  height: 150%; }\n\n#GUI2-logo {\n  width: 42%;\n  height: 42%;\n  margin-left: 6%; }\n\n.example-fill-remaining-space {\n  flex: 1 1 auto; }\n\n.mat-button {\n  min-width: 1%;\n  width: 100%; }\n"

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

module.exports = "<mat-expansion-panel *ngFor=\"let team of team\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n          {{team.team}}\r\n      </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n\r\n      \r\n<div id=\"team-wrapper\">\r\n  <mat-toolbar id=\"team-header-toolbar\">\r\n    <span id=\"title\"> {{team.team}}</span>\r\n    <button id=\"fav-button\" mat-button><mat-icon class=\"fav\">star</mat-icon></button>\r\n  </mat-toolbar>\r\n  <div id=\"team-header\">\r\n    <span>\r\n      <img id=\"team-image\" src=\"./assets/img/team.jpg\">\r\n    </span>\r\n    <mat-card id=\"score-Info\">\r\n      <table>\r\n      <tr>\r\n        <th>Thru</th><td>F</td>\r\n        <th>Today</th><td>-13</td>\r\n        <th>Total</th><td>-38</td>\r\n        <th>Rank</th><td>1</td>\r\n      </tr>\r\n    </table>\r\n    </mat-card>\r\n  </div>\r\n <mat-divider></mat-divider>\r\n  <div id=\"team-body\">\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round One\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"full-Table\">\r\n        <div >\r\n          <table>\r\n            <!-- Header 1/2 -->\r\n            <tr>\r\n              <th>Hole</th>\r\n            </tr>\r\n            <tr>\r\n              <td>Yards</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Par</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Cameron Davis</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Curtis Luck</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Harrison Endycott</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Complete</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Score Against Par</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"scrolling-wrapper\">\r\n          <div id=\"moving-Table\">\r\n            <div class=\"card\">\r\n              <table class=\"playerScore\">\r\n                <tr>\r\n                  <!-- Header 2/2 -->\r\n                  <th>1</th>\r\n                  <th>2</th>\r\n                  <th>3</th>\r\n                  <th>4</th>\r\n                  <th>5</th>\r\n                  <th>6</th>\r\n                  <th>7</th>\r\n                  <th>8</th>\r\n                  <th>9</th>\r\n                  <th>10</th>\r\n                  <th>Out</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Yards -->\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Par  -->\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>5</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>5</td>\r\n                  <td>36</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>5</td>\r\n                  <td>3</td>\r\n                  <td>5</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>36</td>\r\n                  <td>72</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player1  -->\r\n                  <td>5</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>34</td>\r\n                  <td>3</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>33</td>\r\n                  <td>67</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player2  -->\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>5</td>\r\n                  <td>4</td>\r\n                  <td>2</td>\r\n                  <td>5</td>\r\n                  <td>35</td>\r\n                  <td>4</td>\r\n                  <td>2</td>\r\n                  <td>5</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>34</td>\r\n                  <td>69</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player3  -->\r\n                  <td>4</td>\r\n                  <td>6</td>\r\n                  <td>3</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>3</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>33</td>\r\n                  <td>5</td>\r\n                  <td>3</td>\r\n                  <td>5</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>3</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>4</td>\r\n                  <td>35</td>\r\n                  <td>68</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Round  -->\r\n                  <td>9</td>\r\n                  <td>10</td>\r\n                  <td>6</td>\r\n                  <td>7</td>\r\n                  <td>8</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                  <td>7</td>\r\n                  <td>8</td>\r\n                  <td>67</td>\r\n                  <td>8</td>\r\n                  <td>6</td>\r\n                  <td>9</td>\r\n                  <td>7</td>\r\n                  <td>8</td>\r\n                  <td>6</td>\r\n                  <td>8</td>\r\n                  <td>8</td>\r\n                  <td>8</td>\r\n                  <td>68</td>\r\n                  <td>135</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Score Against Par  -->\r\n                  <td>-3</td>\r\n                  <td>-1</td>\r\n                  <td>-1</td>\r\n                  <td>-2</td>\r\n                  <td>-4</td>\r\n                  <td>-6</td>\r\n                  <td>-8</td>\r\n                  <td>-7</td>\r\n                  <td>-9</td>\r\n                  <td></td>\r\n                  <td>E</td>\r\n                  <td>E</td>\r\n                  <td>+1</td>\r\n                  <td>E</td>\r\n                  <td>-2</td>\r\n                  <td>-2</td>\r\n                  <td>-4</td>\r\n                  <td>-4</td>\r\n                  <td>-4</td>\r\n                  <td></td>\r\n                  <td>-9</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <mat-divider></mat-divider>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Two\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"full-Table\">\r\n        <div id=\"static-Table\">\r\n          <table>\r\n            <!-- Header 1/2 -->\r\n            <tr>\r\n              <th>Hole</th>\r\n            </tr>\r\n            <tr>\r\n              <td>Yards</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Par</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Cameron Davis</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Curtis Luck</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Harrison Endycott</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Complete</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Score Against Par</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"scrolling-wrapper\">\r\n          <div id=\"moving-Table\">\r\n            <div class=\"card\">\r\n              <table class=\"playerScore\">\r\n                <tr>\r\n                  <!-- Header 1/2 -->\r\n                  <th>1</th>\r\n                  <th>2</th>\r\n                  <th>3</th>\r\n                  <th>4</th>\r\n                  <th>5</th>\r\n                  <th>6</th>\r\n                  <th>7</th>\r\n                  <th>8</th>\r\n                  <th>9</th>\r\n                  <th>10</th>\r\n                  <th>Out</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Yards -->\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Par  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player1  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player2  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player3  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Round  -->\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Score Against Par  -->\r\n                  <td>7</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <mat-divider></mat-divider>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Three\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"full-Table\">\r\n        <div id=\"static-Table\">\r\n          <table>\r\n            <!-- Header 1/2 -->\r\n            <tr>\r\n              <th>Hole</th>\r\n            </tr>\r\n            <tr>\r\n              <td>Yards</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Par</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Cameron Davis</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Curtis Luck</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Harrison Endycott</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Complete</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Score Against Par</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"scrolling-wrapper\">\r\n          <div id=\"moving-Table\">\r\n            <div class=\"card\">\r\n              <table class=\"playerScore\">\r\n                <tr>\r\n                  <!-- Header 1/2 -->\r\n                  <th>1</th>\r\n                  <th>2</th>\r\n                  <th>3</th>\r\n                  <th>4</th>\r\n                  <th>5</th>\r\n                  <th>6</th>\r\n                  <th>7</th>\r\n                  <th>8</th>\r\n                  <th>9</th>\r\n                  <th>10</th>\r\n                  <th>Out</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Yards -->\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Par  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player1  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player2  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player3  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Round  -->\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Score Against Par  -->\r\n                  <td>7</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <mat-divider></mat-divider>\r\n    <mat-expansion-panel>\r\n      <mat-expansion-panel-header>\r\n        <mat-panel-title>\r\n          Round Four\r\n        </mat-panel-title>\r\n      </mat-expansion-panel-header>\r\n      <div id=\"full-Table\">\r\n        <div id=\"static-Table\">\r\n          <table>\r\n            <!-- Header 1/2 -->\r\n            <tr>\r\n              <th>Hole</th>\r\n            </tr>\r\n            <tr>\r\n              <td>Yards</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Par</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Cameron Davis</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Curtis Luck</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Harrison Endycott</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Complete</td>\r\n            </tr>\r\n            <tr>\r\n              <td>Score Against Par</td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"scrolling-wrapper\">\r\n          <div id=\"moving-Table\">\r\n            <div class=\"card\">\r\n              <table class=\"playerScore\">\r\n                <tr>\r\n                  <!-- Header 1/2 -->\r\n                  <th>1</th>\r\n                  <th>2</th>\r\n                  <th>3</th>\r\n                  <th>4</th>\r\n                  <th>5</th>\r\n                  <th>6</th>\r\n                  <th>7</th>\r\n                  <th>8</th>\r\n                  <th>9</th>\r\n                  <th>10</th>\r\n                  <th>Out</th>\r\n                  <th>11</th>\r\n                  <th>12</th>\r\n                  <th>13</th>\r\n                  <th>14</th>\r\n                  <th>15</th>\r\n                  <th>16</th>\r\n                  <th>17</th>\r\n                  <th>18</th>\r\n                  <th>In</th>\r\n                  <th>Total</th>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Yards -->\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                  <td>400</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Par  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player1  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player2  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Player3  -->\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Round  -->\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n\r\n                <tr>\r\n                  <!-- Score Against Par  -->\r\n                  <td>7</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>5</td>\r\n                  <td>6</td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-expansion-panel>\r\n    <div id=\"team-footer\">\r\n\r\n\r\n    </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/team-profiles/team-profiles.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fav {\n  color: #cccc00; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n#team-header {\n  text-align: center; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#full-Table {\n  width: 100%;\n  height: 100%; }\n\n#static-Table th {\n  float: left;\n  font-size: 120%; }\n\n#static-Table {\n  height: 100%;\n  width: 40%;\n  float: left;\n  font-size: 100%; }\n\n#moving-Table {\n  height: 100%;\n  float: left; }\n\n.playerScore th {\n  font-size: 120%;\n  text-align: center; }\n\n.playerScore td {\n  font-size: 100%;\n  text-align: center; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.scrolling-wrapper .card {\n    display: inline-block; }\n\n#team-body {\n  margin-bottom: 30%; }\n"

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
        this._liveScoreService.getTeam()
            .subscribe(function (team) {
            _this.team = team;
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

/***/ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example-sheet.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example-sheet.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contain\">\r\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\r\n        <mat-grid-tile>\r\n            <mat-nav-list>\r\n                <button mat-button>Toggle location</button>\r\n                <p>Metres: {{metres}}</p>\r\n                <p>Yards: {{yards}}</p>\r\n                <p>Kilometres: {{kilometres}}</p>\r\n                <p>Miles: {{miles}}</p>\r\n            </mat-nav-list>\r\n        </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n            <mat-nav-list>\r\n                <!-- <p>hole {{hole.hole}}</p> -->\r\n                <p>{{ holePar }}</p>\r\n                <p>{{ holeDescription }}</p>\r\n                <p>{{ holeFlyover }}</p>\r\n            </mat-nav-list>\r\n        </mat-grid-tile>\r\n    </mat-grid-list>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example.component.ts":
/*!************************************************************************************************!*\
  !*** ./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example.component.ts ***!
  \************************************************************************************************/
/*! exports provided: BottomSheetOverviewExampleSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheetComponent", function() { return BottomSheetOverviewExampleSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_course_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course-data.service */ "./src/app/components/test-comp-2/services/course-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BottomSheetOverviewExampleSheetComponent = /** @class */ (function () {
    function BottomSheetOverviewExampleSheetComponent(bottomSheetRef, _courseDataService, _route) {
        this.bottomSheetRef = bottomSheetRef;
        this._courseDataService = _courseDataService;
        this._route = _route;
    }
    BottomSheetOverviewExampleSheetComponent.prototype.openLink = function (event) {
        this.bottomSheetRef.dismiss();
        event.preventDefault();
    };
    BottomSheetOverviewExampleSheetComponent.prototype.ngOnInit = function () {
        //  this.Haversine();
        console.log(this.hole);
        console.log(this._courseDataService.getHoles());
    };
    BottomSheetOverviewExampleSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bottom-sheet-overview-example',
            template: __webpack_require__(/*! ./bottom-sheet-overview-example-sheet.html */ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet-overview-example-sheet.html"),
            styles: [__webpack_require__(/*! ./bottom-sheet.component.scss */ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"],
            _services_course_data_service__WEBPACK_IMPORTED_MODULE_2__["CourseDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], BottomSheetOverviewExampleSheetComponent);
    return BottomSheetOverviewExampleSheetComponent;
}());



/***/ }),

/***/ "./src/app/components/test-comp-2/bottom-sheet/bottom-sheet.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/components/test-comp-2/bottom-sheet/bottom-sheet.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/test-comp-2/services/course-data.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/test-comp-2/services/course-data.service.ts ***!
  \************************************************************************/
/*! exports provided: CourseDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDataService", function() { return CourseDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hole__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hole */ "./src/app/components/test-comp-2/services/hole.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CourseDataService = /** @class */ (function () {
    function CourseDataService(_http) {
        this._http = _http;
        // hole: IHoles[] = [];
        // tslint:disable-next-line:max-line-length
        this._montURL = 'https://gist.githubusercontent.com/Cavinnnn/f8a22ecb12fe1be811194131393895eb/raw/ebdfebf1ee157875eeeb4c2340465edaf6b3e5eb/Montgomerie';
    }
    CourseDataService.prototype.showMap = function (id) {
        // tslint:disable-next-line:no-shadowed-variable
        var map;
        // tslint:disable-next-line:prefer-const
        var defaultCoords;
        // tslint:disable-next-line:prefer-const
        var defaultZoom;
        map = L.map('map');
        // tslint:disable-next-line:max-line-length
        L.tileLayer('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
            attribution: '',
            maxZoom: 18,
            center: [-122.420679, 37.772537],
            zoom: 13,
        }).addTo(map);
    };
    CourseDataService.prototype.getSideNavHoles = function () {
        return _hole__WEBPACK_IMPORTED_MODULE_1__["HOLES_INFO"];
    };
    CourseDataService.prototype.getHoles = function () {
        return this._http.get(this._montURL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (data) { return console.log('All ' + JSON.stringify(data)); }));
    };
    CourseDataService.prototype.getHoleById = function (id) {
        return this.getHoles()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (holes) { return holes.find(function (hole) { return hole.id === id; }); }));
        //  ,
        //        switchMap(() => interval(500)));
    };
    CourseDataService.prototype.getHoleBy = function (id) {
        return _hole__WEBPACK_IMPORTED_MODULE_1__["HOLES_INFO"].find(function (hole) { return hole.id === id; });
    };
    CourseDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CourseDataService);
    return CourseDataService;
}());



/***/ }),

/***/ "./src/app/components/test-comp-2/services/hole.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/test-comp-2/services/hole.ts ***!
  \*********************************************************/
/*! exports provided: HOLES_INFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOLES_INFO", function() { return HOLES_INFO; });
var HOLES_INFO = [
    {
        'id': 1,
        'hole': 1,
        'par': 1,
        'description': 'description1',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 2,
        'hole': 2,
        'par': 2,
        'description': 'description2',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 3,
        'hole': 3,
        'par': 3,
        'description': 'description3',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 4,
        'hole': 4,
        'par': 4,
        'description': 'description4',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 5,
        'hole': 5,
        'par': 5,
        'description': 'description5',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 6,
        'hole': 6,
        'par': 6,
        'description': 'description6',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 7,
        'hole': 7,
        'par': 7,
        'description': 'description7',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 8,
        'hole': 8,
        'par': 8,
        'description': 'description8',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 9,
        'hole': 9,
        'par': 9,
        'description': 'description9',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 10,
        'hole': 10,
        'par': 10,
        'description': 'description10',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 11,
        'hole': 11,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 12,
        'hole': 12,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 13,
        'hole': 13,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 14,
        'hole': 14,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 15,
        'hole': 15,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 16,
        'hole': 16,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 17,
        'hole': 17,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }, {
        'id': 18,
        'hole': 18,
        'par': 3,
        'description': 'description',
        'flyover': 'https://vimeo.com/171598568',
        'lat': 12312313,
        'lng': 123123131
    }
];


/***/ }),

/***/ "./src/app/components/test-comp-2/side-nav/sidenav.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/test-comp-2/side-nav/sidenav.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container class=\"example-container\" (backdropClick)=\"close('backdrop')\">\n  <mat-sidenav-content>\n    <p><button mat-button (click)=\"sidenav.open()\">\n      <i class=\"material-icons\">menu</i>\n    </button>\n    </p>\n\n  </mat-sidenav-content>\n\n  <mat-sidenav #sidenav (keydown.escape)=\"close('escape')\" disableClose>\n    <mat-expansion-panel>\n        <mat-expansion-panel-header>\n          Montgomorie\n        </mat-expansion-panel-header>\n\n        <mat-list role=\"list\" *ngFor=\"let hole of holes \">\n            <mat-list-item role=\"listitem\" class=\"mat-side-list\">\n              <button mat-button (click)=\"openBottomSheet()\" [routerLink]=\"['/test2', hole.id]\"><span>Hole {{hole.id}}</span></button>\n            </mat-list-item>\n        </mat-list>\n\n\n      </mat-expansion-panel>\n  </mat-sidenav>\n</mat-sidenav-container>\n\n<div id=\"map\"></div>\n\n<div class=\"contain\">\n    <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\n        <mat-grid-tile>\n            <mat-nav-list>\n                <p>Metres: {{metres}}</p>\n                <p>Yards: {{yards}}</p>\n                <p>Kilometres: {{kilometres}}</p>\n                <p>Miles: {{miles}}</p>\n            </mat-nav-list>\n        </mat-grid-tile>\n\n    <mat-grid-tile>\n            <mat-nav-list>\n                <p>hole {{ hole.hole }}</p>\n                <p>par {{ hole.par }}</p>\n                <p>{{hole.description}}</p>\n                <!-- {{hole.flyover }} -->\n                <p>Flyover Link</p>\n            </mat-nav-list>\n        </mat-grid-tile>\n    </mat-grid-list>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/test-comp-2/side-nav/sidenav.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/test-comp-2/side-nav/sidenav.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: static;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.mat-side-list {\n  margin: 0; }\n\n.mat-button {\n  margin: 0px;\n  float: right; }\n\n.contain {\n  margin: 5px; }\n\n#map {\n  position: absolute;\n  top: 40px;\n  height: 60%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/test-comp-2/side-nav/sidenav.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/test-comp-2/side-nav/sidenav.component.ts ***!
  \**********************************************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_course_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/course-data.service */ "./src/app/components/test-comp-2/services/course-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function SidenavComponent(bottomSheet, _courseDataService, _route) {
        this.bottomSheet = bottomSheet;
        this._courseDataService = _courseDataService;
        this._route = _route;
        this._earthRadiusInMeters = 6378137;
        this._earthRadiusInYards = 6975174.98;
        this._earthRadiusInKilometers = 6371;
        this._earthRadiusInMiles = 3960;
        this.reason = '';
    }
    SidenavComponent.prototype.close = function (reason) {
        this.reason = reason;
        this.sidenav.close();
    };
    SidenavComponent.prototype.openBottomSheet = function () {
        window.location.reload();
        // this.bottomSheet.open(BottomSheetOverviewExampleSheetComponent);
    };
    SidenavComponent.prototype.refreshPage = function () {
    };
    SidenavComponent.prototype.getHolesId = function (id) {
        var _this = this;
        this._courseDataService.getHoleById(id).subscribe(function (hole) { return _this.hole = hole; });
    };
    SidenavComponent.prototype.ngOnInit = function () {
        this.Haversine();
        this.holes = this._courseDataService.getSideNavHoles();
        this.hole = +this._route.snapshot.paramMap.get('id');
        this._courseDataService.showMap(+this._route.snapshot.params['id']);
        if (this.hole) {
            var id = +this.hole;
            this.getHolesId(id);
            console.log(id);
        }
        console.log(this.hole);
    };
    SidenavComponent.prototype.Haversine = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (x) {
                _this.myLat = x.coords.latitude;
                _this.myLng = x.coords.longitude;
                console.log("longitude: " + _this.myLat + " | latitude: " + _this.myLng);
                var myCoords = {
                    latitude: _this.myLat,
                    longitude: _this.myLng
                };
                var dominos = {
                    latitude: 53.352454,
                    longitude: -6.295462
                };
                _this.metres = _this.getDistanceInMeters(myCoords, dominos);
                _this.yards = _this.getDistanceInYards(myCoords, dominos);
                _this.kilometres = _this.getDistanceInKilometers(myCoords, dominos);
                _this.miles = _this.getDistanceInMiles(myCoords, dominos);
                _this.metres = _this.metres.toFixed(2);
                _this.yards = _this.yards.toFixed(2);
                _this.kilometres = _this.kilometres.toFixed(2);
                _this.miles = _this.miles.toFixed(2);
            });
        }
    };
    SidenavComponent.prototype._toRadians = function (value) {
        return value * Math.PI / 180;
    };
    SidenavComponent.prototype._getDistance = function (coord1, coord2) {
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
    SidenavComponent.prototype.getDistanceInMeters = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMeters * c;
    };
    SidenavComponent.prototype.getDistanceInYards = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInYards * c;
    };
    SidenavComponent.prototype.getDistanceInKilometers = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInKilometers * c;
    };
    SidenavComponent.prototype.getDistanceInMiles = function (coord1, coord2) {
        var c = this._getDistance(coord1, coord2);
        // d = R ⋅ c
        return this._earthRadiusInMiles * c;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('sidenav'),
        __metadata("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenav"])
    ], SidenavComponent.prototype, "sidenav", void 0);
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/components/test-comp-2/side-nav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.scss */ "./src/app/components/test-comp-2/side-nav/sidenav.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"],
            _services_course_data_service__WEBPACK_IMPORTED_MODULE_2__["CourseDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SidenavComponent);
    return SidenavComponent;
}());

// this.hole = this._courseDataService.getHoleBy(+this._route.snapshot.params.id);
// this.holeId = this.hole.id;
//  this.holeHole = this.hole.hole;
//  this.holePar = this.hole.par;
//  this.holeDesc = this.hole.description;
//  this.holeFly = this.hole.flyover;
// console.log(this.holeHole, this.holePar, this.holeDesc, this.holeFly);


/***/ }),

/***/ "./src/app/components/test-comp-2/test-comp-2.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/test-comp-2/test-comp-2.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sidenav></app-sidenav>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/test-comp-2/test-comp-2.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/test-comp-2/test-comp-2.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-container {\n  position: static;\n  width: 100%;\n  min-width: 100%;\n  height: 100%;\n  min-height: 100%; }\n\n.example-sidenav-content {\n  height: 40px;\n  width: 40px;\n  position: fixed;\n  right: 45px;\n  top: 60px; }\n\n.example-sidenav {\n  margin-top: 44px;\n  display: flex;\n  width: 150px;\n  background-color: #F5F5F5;\n  height: 100%; }\n\n.mat-button {\n  background-color: #F5F5F5;\n  height: 40px; }\n"

/***/ }),

/***/ "./src/app/components/test-comp-2/test-comp-2.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/test-comp-2/test-comp-2.component.ts ***!
  \*****************************************************************/
/*! exports provided: TestComp2Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComp2Component", function() { return TestComp2Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_course_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/course-data.service */ "./src/app/components/test-comp-2/services/course-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComp2Component = /** @class */ (function () {
    function TestComp2Component(_courseDataService) {
        this._courseDataService = _courseDataService;
        this.showFiller = false;
    }
    TestComp2Component.prototype.ngOnInit = function () { };
    TestComp2Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-comp-2',
            template: __webpack_require__(/*! ./test-comp-2.component.html */ "./src/app/components/test-comp-2/test-comp-2.component.html"),
            styles: [__webpack_require__(/*! ./test-comp-2.component.scss */ "./src/app/components/test-comp-2/test-comp-2.component.scss")],
        }),
        __metadata("design:paramtypes", [_services_course_data_service__WEBPACK_IMPORTED_MODULE_1__["CourseDataService"]])
    ], TestComp2Component);
    return TestComp2Component;
}());



/***/ }),

/***/ "./src/app/components/test/test-geo.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/test/test-geo.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"leaf-map\"\n     leaflet \n     [leafletOptions]=\"options\">\n</div>\n "

/***/ }),

/***/ "./src/app/components/test/test-geo.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/test/test-geo.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".leaf-map {\n  height: 88%;\n  width: 100%;\n  position: absolute; }\n"

/***/ }),

/***/ "./src/app/components/test/test-geo.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/test/test-geo.component.ts ***!
  \*******************************************************/
/*! exports provided: TestGeoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestGeoComponent", function() { return TestGeoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import L from 'leaflet';
// var map: any;
var TestGeoComponent = /** @class */ (function () {
    function TestGeoComponent() {
        // tslint:disable-next-line:member-ordering
        this.options = {
            layers: [
                // tslint:disable-next-line:max-line-length
                Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["tileLayer"])('https://api.mapbox.com/styles/v1/cavinn/cjgqloyl000082roe1rz35om8/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiY2F2aW5uIiwiYSI6ImNqZW9nNjduejVrcTIyd21xMGhsYnB0bGwifQ.d1szzRngrK0u-qP_aiD64A', {
                    maxZoom: 18,
                    attribution: '...'
                }),
            ],
            zoom: 16.5,
            center: Object(leaflet__WEBPACK_IMPORTED_MODULE_1__["latLng"])(53.386012, -6.556897),
            pitch: 60,
        };
    }
    TestGeoComponent.prototype.ngOnInit = function () {
    };
    TestGeoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-geo',
            template: __webpack_require__(/*! ./test-geo.component.html */ "./src/app/components/test/test-geo.component.html"),
            styles: [__webpack_require__(/*! ./test-geo.component.scss */ "./src/app/components/test/test-geo.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestGeoComponent);
    return TestGeoComponent;
}());



/***/ }),

/***/ "./src/app/components/transport/transport.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/transport/transport.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <mat-toolbar id=\"transport-toolbar\">\r\n    <mat-form-field id=\"location-field\">\r\n        <mat-select placeholder=\"Choose an Area\" [(value)]=\"mainSelected\">\r\n            <mat-option value=\"Carton House\" class=\"mat-select\">Carton House</mat-option>\r\n            <mat-option value=\"Maynooth University\" class=\"mat-select\">Maynooth University</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <mat-form-field class=\"stop-field\" *ngIf=\"mainSelected == 'Carton House'\">\r\n            <mat-placeholder>Choose a location</mat-placeholder>\r\n        <mat-select [(value)]=\"CartonSelected\">\r\n            <mat-option value=\"National Academy\" class=\"mat-select\">National Academy</mat-option>\r\n            <mat-option value=\"Hotel Reception\" class=\"mat-select\">Hotel Reception</mat-option>\r\n            <mat-option value=\"Club House Roundabout\" class=\"mat-select\">Club House Roundabout</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"stop-field\" *ngIf=\"mainSelected == 'Maynooth University'\">\r\n            <mat-placeholder >Choose a location</mat-placeholder>\r\n         <mat-select [(value)]=\"MaynoothSelected\">\r\n            <mat-option value=\"North Campus Apartment Complex\" class=\"mat-select\">North Campus Apartment Complex</mat-option>\r\n            <mat-option value=\"Nort Campus Phonenix Restaurant\" class=\"mat-select\">North Campus Phonenix Restaurant</mat-option>\r\n            <mat-option value=\"North Campus Pedestrian crossing\" class=\"mat-select\">North Campus Pedestrian crossing</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</mat-toolbar>\r\n\r\n<agm-map *ngIf=\"mainSelected == 'Carton House'\" [latitude]=\"Cartondefaultlat\" [longitude]=\"Cartondefaultlng\" [zoom]=\"zoom\"\r\n    [mapTypeId]=\"'hybrid'\" disableDefaultUI=\"true\">\r\n\r\n    <agm-marker *ngIf=\"mainSelected == 'Carton House' && CartonSelected == null\" [latitude]=\"Cartondefaultlat\" [longitude]=\"Cartondefaultlng\"></agm-marker>\r\n\r\n    <div *ngIf=\"CartonSelected == 'National Academy'\">\r\n        <agm-marker [latitude]=\"NationalAcademylat\" [longitude]=\"NationalAcademylng\" ></agm-marker>\r\n    </div>\r\n\r\n    <div *ngIf=\"CartonSelected == 'Hotel Reception'\">\r\n        <agm-marker [latitude]=\"HotelReceptionlat\" [longitude]=\"HotelReceptionlng\"></agm-marker>\r\n    </div>\r\n\r\n    <div *ngIf=\"CartonSelected == 'Club House Roundabout'\">\r\n        <agm-marker [latitude]=\"ClubHouseRoundaboutlat\" [longitude]=\"ClubHouseRoundaboutlng\"></agm-marker>\r\n    </div>\r\n</agm-map>\r\n\r\n<agm-map *ngIf=\"mainSelected == 'Maynooth University'\" [latitude]=\"MaynoothDefaultlat\" [longitude]=\"MaynoothDefaultlng\" [zoom]=\"zoom\"\r\n    [mapTypeId]=\"'hybrid'\" disableDefaultUI=\"true\">\r\n\r\n    <agm-marker *ngIf=\"mainSelected == 'Maynooth University' && MaynoothSelected == null\" [latitude]=\"MaynoothDefaultlat\" [longitude]=\"MaynoothDefaultlng\"></agm-marker>\r\n\r\n    <div *ngIf=\"MaynoothSelected == 'North Campus Apartment Complex'\">\r\n        <agm-marker [latitude]=\"ApartmentComplexlat\" [longitude]=\"ApartmentComplexlng\"></agm-marker>\r\n    </div>\r\n    <div *ngIf=\"MaynoothSelected == 'Nort Campus Phonenix Restaurant'\">\r\n        <agm-marker [latitude]=\"PhoenixRestaurantlat\" [longitude]=\"PhoenixRestaurantlng\"></agm-marker>\r\n    </div>\r\n    <div *ngIf=\"MaynoothSelected == 'North Campus Pedestrian crossing'\">\r\n        <agm-marker [latitude]=\"PedestrianCrosslat\" [longitude]=\"PedestrianCrosslng\"></agm-marker>\r\n    </div>\r\n</agm-map> -->\r\n\r\n<iframe width=\"640\" height=\"360\" src=\"https://gaming.youtube.com/embed/live_stream?autoplay=1&controls=0&showinfo=0&autohide=1&channel=UCImGQwk9qTNjwhhdzzTKIdg\"  autoplay=true frameborder=\"0\"></iframe>\r\n\r\n    <!-- <div id=\"twitchStream\">\r\n                <iframe\r\n                src=\"http://player.twitch.tv/?channel=Patrickbookgolf&muted=true\"\r\n                height=\"720\"\r\n                width=\"1280\"\r\n                frameborder=\"1\"\r\n                scrolling=\"no\"\r\n                allowfullscreen=\"false\">\r\n            </iframe>\r\n    </div> -->\r\n    <div>\r\n\r\n    \r\n<mat-table #table [dataSource]=\"dataSource\" id=\"timetable\">\r\n\r\n    <ng-container matColumnDef=\"bus\">\r\n        <mat-header-cell *matHeaderCellDef> Bus </mat-header-cell>\r\n        <mat-cell @fade *matCellDef=\"let bus\"> {{bus.position}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"times\">\r\n        <mat-header-cell *matHeaderCellDef> Times </mat-header-cell>\r\n        <mat-cell @fade *matCellDef=\"let times\"> {{times.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n</div>"

/***/ }),

/***/ "./src/app/components/transport/transport.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/transport/transport.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stop-field, #location-field {\n  width: 45%;\n  font-size: 68%; }\n\nagm-map {\n  height: 200px;\n  width: 100%; }\n\n#timetable {\n  text-align: center; }\n\n#tabs {\n  text-align: center; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  flex: 1 1 auto; }\n\niframe {\n  max-width: 99% !important;\n  max-height: 50% !important; }\n"

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

module.exports = __webpack_require__(/*! C:\Users\BookGolf365\Desktop\part 2\Project_WAGC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map