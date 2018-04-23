webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_material_module__ = __webpack_require__("./src/app/shared/material.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_navigation_nav_navigation_component__ = __webpack_require__("./src/app/components/navigation/nav/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_live_score_live_score_component__ = __webpack_require__("./src/app/components/live-score/live-score.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_geolocation_geolocation_component__ = __webpack_require__("./src/app/components/geolocation/geolocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_events_transport_transport_component__ = __webpack_require__("./src/app/components/events/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_team_profiles_team_profiles_component__ = __webpack_require__("./src/app/components/team-profiles/team-profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_navigation_toolbar_toolbar_component__ = __webpack_require__("./src/app/components/navigation/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_additional_info_additional_info_component__ = __webpack_require__("./src/app/components/additional-info/additional-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_additional_info_news_news_component__ = __webpack_require__("./src/app/components/additional-info/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_additional_info_about_about_component__ = __webpack_require__("./src/app/components/additional-info/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_additional_info_eligibitity_eligibility_component__ = __webpack_require__("./src/app/components/additional-info/eligibitity/eligibility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_additional_info_schedule_schedule_component__ = __webpack_require__("./src/app/components/additional-info/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_additional_info_contact_contact_component__ = __webpack_require__("./src/app/components/additional-info/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_events_events_component__ = __webpack_require__("./src/app/components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_homepage_services_weather_service__ = __webpack_require__("./src/app/components/homepage/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_additional_info_news_news_service__ = __webpack_require__("./src/app/components/additional-info/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__components_events_events_service__ = __webpack_require__("./src/app/components/events/events.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__components_events_event_event_component__ = __webpack_require__("./src/app/components/events/event/event.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__components_fav_team_profiles_fav_team_profiles_component__ = __webpack_require__("./src/app/components/fav-team-profiles/fav-team-profiles.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_live_score_live_score_service__ = __webpack_require__("./src/app/components/live-score/live-score.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_live_score_live_player_score_live_player_score_component__ = __webpack_require__("./src/app/components/live-score/live-player-score/live-player-score.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_live_score_live_team_score_live_team_score_component__ = __webpack_require__("./src/app/components/live-score/live-team-score/live-team-score.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'live-score', component: __WEBPACK_IMPORTED_MODULE_10__components_live_score_live_score_component__["a" /* LiveScoreComponent */] },
    { path: 'geo-location', component: __WEBPACK_IMPORTED_MODULE_11__components_geolocation_geolocation_component__["a" /* GeolocationComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_21__components_events_events_component__["a" /* EventsComponent */] },
    { path: 'add-info', component: __WEBPACK_IMPORTED_MODULE_15__components_additional_info_additional_info_component__["a" /* AdditionalInfoComponent */] },
    { path: 'teamprofiles', component: __WEBPACK_IMPORTED_MODULE_13__components_team_profiles_team_profiles_component__["a" /* TeamProfilesComponent */] },
    { path: 'favteamprofiles', component: __WEBPACK_IMPORTED_MODULE_26__components_fav_team_profiles_fav_team_profiles_component__["a" /* FavTeamProfilesComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_17__components_additional_info_about_about_component__["a" /* AboutComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_16__components_additional_info_news_news_component__["a" /* NewsComponent */] },
    { path: 'eligibility', component: __WEBPACK_IMPORTED_MODULE_18__components_additional_info_eligibitity_eligibility_component__["a" /* EligibilityComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_19__components_additional_info_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_20__components_additional_info_contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_navigation_nav_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_live_score_live_score_component__["a" /* LiveScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_geolocation_geolocation_component__["a" /* GeolocationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_events_transport_transport_component__["a" /* TransportComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_additional_info_additional_info_component__["a" /* AdditionalInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_additional_info_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_additional_info_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_18__components_additional_info_eligibitity_eligibility_component__["a" /* EligibilityComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_additional_info_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_additional_info_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_events_transport_transport_component__["a" /* TransportComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_team_profiles_team_profiles_component__["a" /* TeamProfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_navigation_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_25__components_events_event_event_component__["a" /* EventComponent */],
                __WEBPACK_IMPORTED_MODULE_26__components_fav_team_profiles_fav_team_profiles_component__["a" /* FavTeamProfilesComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_live_score_live_player_score_live_player_score_component__["a" /* LivePlayerScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_29__components_live_score_live_team_score_live_team_score_component__["a" /* LiveTeamScoreComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyDSNCNtbKTFkC6jUWtIdwAa-Kxz4CD69yY'
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_22__components_homepage_services_weather_service__["b" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_23__components_additional_info_news_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_22__components_homepage_services_weather_service__["a" /* HomeNewsService */], __WEBPACK_IMPORTED_MODULE_24__components_events_events_service__["a" /* YelpService */], __WEBPACK_IMPORTED_MODULE_27__components_live_score_live_score_service__["a" /* LiveScoreService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>About </mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"mat-card-image\" src=\"assets/img/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>About WATC 2018 in Ireland</h3>\r\n      <p>\r\n          The Golfing Union of Ireland (GUI) and the Irish Ladies Golfing Union (ILGU) will host the 2018 World Amateur Team Championships - with the Epsirito Santo Trophy (women) being competed for from Wednesday 29th August until Saturday 1st September and the Eisenhower Trophy (men) being competed for from Wednesday 5th September until Saturday 8th September. The two events will be staged at Carton House, where players will be tested on the world-famous O’Meara and Montgomerie courses . The Championships together represent an international festival of golf, during which time a Championship Gala Dinner for all participants will be staged at Maynooth University and the Biennial Meeting of the International Golf Federation will be held in Carton House on Monday 3rd September.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  position: relative;\n  margin: 0;\n  height: 300px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: justify;\n  text-justify: inter-word; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("./src/app/components/additional-info/about/about.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/about/about.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-list role=\"list\">\r\n    <mat-list-item role=\"listitem\" routerLink=\"/news\">\r\n      \r\n        <span>News</span>\r\n\r\n        <i class=\"material-icons\">navigate_next</i>\r\n    \r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    \r\n    <mat-list-item role=\"listitem\" routerLink=\"/about\">\r\n\r\n        <span>About</span>\r\n\r\n        <i class=\"material-icons\">navigate_next</i>\r\n\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/eligibility\">\r\n    \r\n        <span>Eligibility</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n    \r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/schedule\">\r\n      \r\n        <span>Full Schedule</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/contact\">\r\n    \r\n        <span>Contact</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n  \r\n  \r\n  <mat-list-item role=\"listitem\" routerLink=\"/teamprofiles\">\r\n      \r\n    <span>Team Profiles</span>\r\n\r\n  <i class=\"material-icons\">navigate_next</i>\r\n</mat-list-item>\r\n<mat-divider></mat-divider>\r\n\r\n<mat-list-item role=\"listitem\" routerLink=\"/favteamprofiles\">\r\n    \r\n  <span>Fav Teams</span>\r\n\r\n<i class=\"material-icons\">navigate_next</i>\r\n</mat-list-item>\r\n<mat-divider></mat-divider>\r\n\r\n\r\n</mat-list>\r\n\r\n  <router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.scss":
/***/ (function(module, exports) {

module.exports = ".material-icons {\n  position: fixed;\n  right: 10px; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/additional-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdditionalInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdditionalInfoComponent = /** @class */ (function () {
    function AdditionalInfoComponent() {
    }
    AdditionalInfoComponent.prototype.ngOnInit = function () {
    };
    AdditionalInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-additional-info',
            template: __webpack_require__("./src/app/components/additional-info/additional-info.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/additional-info.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AdditionalInfoComponent);
    return AdditionalInfoComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title><h3>Contact Us</h3></mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    \r\n    <mat-card-content>\r\n        <mat-grid-list cols=\"2\" rowHeight=\"3:1\">\r\n          <mat-grid-tile>\r\n            <i class=\"material-icons\">phone</i>\r\n            <h3>Telephone</h3>\r\n          </mat-grid-tile>\r\n          \r\n          <mat-grid-tile>\r\n              <i class=\"material-icons\">email</i>\r\n            <h3>Email</h3>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <p class=\"para\">+353 1 531 4118</p>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n              <p class=\"para\"> info@watc2018.ie</p>\r\n          </mat-grid-tile>\r\n        </mat-grid-list>\r\n    </mat-card-content>\r\n\r\n    <mat-card-content class=\"mat-card-content-head\">\r\n      \r\n          <h3>Address</h3>\r\n          <p>Carton Demesne,\r\n              Maynooth,\r\n              County Kildare,\r\n              ​Ireland\r\n          </p>\r\n        </mat-card-content>\r\n\r\n    <mat-card-content >\r\n        <mat-grid-list cols=\"2\" rowHeight=\"2:1\">\r\n          <mat-grid-tile>\r\n\r\n            <a href=\"https://www.facebook.com/golfingunionofireland/ \">\r\n              <img src=\"https://png.icons8.com/color/50/000000/facebook.png\" >\r\n            </a>\r\n\r\n            <h3>Facebook</h3>\r\n          </mat-grid-tile>\r\n\r\n          <mat-grid-tile>\r\n\r\n            <a href=\"https://twitter.com/guigolf?lang=en\">\r\n              <img src=\"https://png.icons8.com/color/50/000000/twitter.png\">\r\n            </a>\r\n\r\n\r\n            <h3>Twitter</h3>\r\n        </mat-grid-tile>\r\n      </mat-grid-list>    \r\n    </mat-card-content>\r\n\r\n\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card-content-head {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: justify;\n  text-justify: inter-word;\n  padding: -30px; }\n\n.mat-toolbar-add-info {\n  width: 100%;\n  height: 40px;\n  background-color: #5cd65c; }\n\n.material-icons {\n  font-size: 38px;\n  height: 38px;\n  width: 38px;\n  margin: 5px; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/components/additional-info/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Eligibility</mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"mat-card-image\" src=\"assets/img/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>Eligibility</h3>\r\n      <p>\r\n          IGF National Federation Members may enter one women’s team and one men’s team. Players must be amateur golfers under the Rules of Amateur Status of the R&A and the United States Golf Association and nationals of the countries they represent, as defined in the IGF’s Nationality Policy.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-card-image {\n  position: relative;\n  margin: 0;\n  height: 300px;\n  width: 100%; }\n\n.mat-card-content {\n  margin-top: 10px;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: justify;\n  text-justify: inter-word; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/eligibitity/eligibility.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EligibilityComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EligibilityComponent = /** @class */ (function () {
    function EligibilityComponent() {
    }
    EligibilityComponent.prototype.ngOnInit = function () {
    };
    EligibilityComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-eligibility',
            template: __webpack_require__("./src/app/components/additional-info/eligibitity/eligibility.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/eligibitity/eligibility.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EligibilityComponent);
    return EligibilityComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"newsWrapper\">\r\n  <div id=\"Severity-group\">\r\n    <div id=\"Severity-1\"  *ngFor=\"let news of news\" >\r\n      <mat-card id=\"newsCard-severity-{{news.severity}}\" >\r\n        <table>\r\n          <tr>\r\n            <th>01/01/2018 - {{news.severity}} - {{news.title}}</th>\r\n          </tr>\r\n        </table>\r\n        <mat-card>\r\n          <td>{{news.content}}</td>\r\n        </mat-card>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.scss":
/***/ (function(module, exports) {

module.exports = "#newsWrapper {\n  margin-bottom: 18%; }\n\n#newsCard-severity-1 {\n  background: #DCE35B;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left bottom, left top, from(#45B649), to(#DCE35B));\n  background: linear-gradient(to top, #45B649, #DCE35B);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  margin: 3%; }\n\n#newsCard-severity-2 {\n  background: #b9b42d;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#ecf570), to(#b9b42d));\n  background: linear-gradient(to bottom, #ecf570, #b9b42d);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  margin: 3%; }\n\n#newsCard-severity-3 {\n  background: #e23403;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#f9ca6c), to(#e23403));\n  background: linear-gradient(to bottom, #f9ca6c, #e23403);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  margin: 3%; }\n\n#newsCard-severity-4 {\n  background: #bc2938;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, left bottom, from(#f5918a), to(#bc2938));\n  background: linear-gradient(to bottom, #f5918a, #bc2938);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n  margin: 3%; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/news/news.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__news_service__ = __webpack_require__("./src/app/components/additional-info/news/news.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NewsComponent = /** @class */ (function () {
    function NewsComponent(_newsService) {
        this._newsService = _newsService;
    }
    NewsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getNews()
            .subscribe(function (news) {
            _this.news = news;
        }, function (error) { return _this.errorMessage = error; });
    };
    NewsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-news',
            template: __webpack_require__("./src/app/components/additional-info/news/news.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/news/news.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__news_service__["a" /* NewsService */]])
    ], NewsComponent);
    return NewsComponent;
}());



/***/ }),

/***/ "./src/app/components/additional-info/news/news.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NewsService = /** @class */ (function () {
    function NewsService(_http) {
        this._http = _http;
        this._newsUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/88a79f87a0d75cb9c5e7d2e4e0468205/raw/e553efff8367dadc5930de49e88c9d14df5f5f82/news.json";
    }
    NewsService.prototype.getNews = function () {
        return this._http.get(this._newsUrl)
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    NewsService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    NewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], NewsService);
    return NewsService;
}());

//    ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx 


/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-accordion class=\"mat-accordion\">\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\"\r\n                        class=\"mat-expansion-panel\">\r\n    <mat-expansion-panel-header>\r\n\r\n    <mat-panel-title>\r\n        Friday 24th August\r\n    </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n      <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\"><p>Women's Team Arrivals</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Courses are Closed.</p> </mat-list-item>\r\n\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"mat-accordion\">\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\"\r\n                        class=\"mat-expansion-panel\">\r\n    <mat-expansion-panel-header>\r\n\r\n    <mat-panel-title>\r\n        Saturday 25th August\r\n    </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n      <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\"><p>Women's Team Arrivals</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Courses are Closed; Practice Facilities will be Open.</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Women's Registration  (1000hrs-1800hrs)</p></mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"mat-accordion\">\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\"\r\n                        class=\"mat-expansion-panel\">\r\n    <mat-expansion-panel-header>\r\n\r\n    <mat-panel-title>\r\n        Sunday 26th August \r\n    </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n      <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\"><p>Courses are Closed; Teams can walk courses and Practice Facilities will be Open. </p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Women's Registration (0800hrs-1800hrs)</p></mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"mat-accordion\">\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\"\r\n                        class=\"mat-expansion-panel\">\r\n    <mat-expansion-panel-header>\r\n\r\n    <mat-panel-title>\r\n        Monday 27th August \r\n    </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n      <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\"><p>Women's Practice Round</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Team Captains' Meeting (1600hrs, Carton House Kildare Suites on first floor)</p></mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<mat-accordion class=\"mat-accordion\">\r\n    <mat-expansion-panel (opened)=\"panelOpenState = true\"\r\n                        (closed)=\"panelOpenState = false\"\r\n                        class=\"mat-expansion-panel\">\r\n    <mat-expansion-panel-header>\r\n\r\n    <mat-panel-title>\r\n        Tuesday 28th August\r\n    </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n      <mat-list role=\"list\">\r\n          <mat-list-item role=\"listitem\"><p>Women's Practice Round</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Referee's Meeting (1100hrs, Carton House Kildare Suites on first floor)</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Women's Team Photographs (Tyrconnell Room near Carton House courtyard, timetable TBC)</p></mat-list-item>\r\n          <mat-list-item role=\"listitem\"><p>Women's Opening Ceremony, followed by reception (Carton House)</p></mat-list-item>\r\n      </mat-list>\r\n    </mat-expansion-panel>\r\n</mat-accordion>\r\n"

/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-accordion {\n  height: 10%; }\n"

/***/ }),

/***/ "./src/app/components/additional-info/schedule/schedule.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScheduleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleComponent = /** @class */ (function () {
    function ScheduleComponent() {
    }
    ScheduleComponent.prototype.ngOnInit = function () {
    };
    ScheduleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-schedule',
            template: __webpack_require__("./src/app/components/additional-info/schedule/schedule.component.html"),
            styles: [__webpack_require__("./src/app/components/additional-info/schedule/schedule.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleComponent);
    return ScheduleComponent;
}());



/***/ }),

/***/ "./src/app/components/events/event/event.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"event-main\" >\n  \n  <div id=\"event-child\" *ngFor=\"let yelp of yelp.businesses\">\n  <mat-toolbar id=\"head-toolbar\">\n    <div id=\"name\">\n      {{yelp.name}}\n    </div>\n    <div id=\"star-img\">\n      <span *ngIf=\"yelp.rating >= 1 && yelp.rating <= 1.5\">\n        <img src=\"./assets/img/1star.png\">\n      </span>\n      <span *ngIf=\"yelp.rating >= 2 && yelp.rating <= 2.5\">\n        <img src=\"./assets/img/2star.png\">\n      </span>\n      <span *ngIf=\"yelp.rating >= 3 && yelp.rating <= 3.5\">\n        <img src=\"./assets/img/3star.png\">\n      </span>\n      <span *ngIf=\"yelp.rating >= 4 && yelp.rating <= 4.5\">\n        <img src=\"./assets/img/4star.png\">\n      </span>\n      <span *ngIf=\"yelp.rating >= 5\">\n        <img src=\"./assets/img/5star.png\">\n      </span>\n    </div>\n  </mat-toolbar>\n  <div id=\"img-wrapper\">\n    <img id=\"yelp-img\" src=\"{{yelp.image_url}}\">\n  </div>\n  <mat-toolbar id=\"foot-toolbar\">\n    <span>\n      <form action=\"{{yelp.url}}\">\n        <button id=\"foot-button\" mat-button>Website</button>\n      </form>\n    </span>\n    <span class=\"example-fill-remaining-space\"></span>\n    <span *ngIf=\"yelp.is_closed == true\" id=\"foot-status-closed\">Closed</span>\n    <span *ngIf=\"yelp.is_closed == false\" id=\"foot-status-open\">Open</span>\n  </mat-toolbar>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/events/event/event.component.scss":
/***/ (function(module, exports) {

module.exports = ".example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n#head-toolbar img {\n  width: 90%;\n  height: 90%;\n  vertical-align: middle;\n  float: right; }\n\n#foot-button {\n  font-size: 78%;\n  background-color: #999999; }\n\n#name {\n  width: 60%;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  font-size: 78%; }\n\n#star-img {\n  width: 55%; }\n\n#head-toolbar {\n  width: 100%; }\n\n#head-toolbar, #foot-toolbar {\n  background-color: #b3b3b3; }\n\n#img-wrapper img {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#event-main {\n  margin-bottom: 25%; }\n\n#event-child {\n  margin: 4%; }\n\n#foot-status-closed {\n  color: red;\n  font-size: 85%; }\n\n#foot-status-open {\n  color: green;\n  font-size: 85%; }\n"

/***/ }),

/***/ "./src/app/components/events/event/event.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__events_service__ = __webpack_require__("./src/app/components/events/events.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventComponent = /** @class */ (function () {
    function EventComponent(_newsService) {
        this._newsService = _newsService;
        this.yelp = [];
    }
    EventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._newsService.getYelp()
            .subscribe(function (yelp) { _this.yelp = yelp; }, function (error) { return _this.errorMessage = error; });
    };
    EventComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-event',
            template: __webpack_require__("./src/app/components/events/event/event.component.html"),
            styles: [__webpack_require__("./src/app/components/events/event/event.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__events_service__["a" /* YelpService */]])
    ], EventComponent);
    return EventComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n    <mat-tab-group id=\"tab\">\r\n        <mat-tab class=\"label\" label=\"transport\">\r\n            <app-transport></app-transport>\r\n        </mat-tab>\r\n        \r\n        <mat-tab class=\"label\" label=\"events\">\r\n            <app-event></app-event>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n    "

/***/ }),

/***/ "./src/app/components/events/events.component.scss":
/***/ (function(module, exports) {

module.exports = "#tab {\n  width: 100%;\n  height: 100%;\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/components/events/events.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EventsComponent = /** @class */ (function () {
    function EventsComponent() {
    }
    EventsComponent.prototype.ngOnInit = function () {
    };
    EventsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-events',
            template: __webpack_require__("./src/app/components/events/events.component.html"),
            styles: [__webpack_require__("./src/app/components/events/events.component.scss")]
        })
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/events/events.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return YelpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var YelpService = /** @class */ (function () {
    function YelpService(_http) {
        this._http = _http;
        this._yelpUrl = "https://api.yelp.com/v3/businesses/search?location=Dublin,Ireland";
        this._yelpBUrl = "https://api.yelp.com/v3/businesses?locale=en_IE";
    }
    YelpService.prototype.getYelp = function () {
        return this._http.get(this._yelpUrl, {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({
                'Authorization': 'Bearer ga7R1k7BOp852yKSjuawnxv3kFAf2F9Tj7HYgUaJbIskAGUaNaYKIo1LHmnjSQWtCFgLeaPS_RX-vWmvgeLjH1xDrVBTUV97dslQlOrigInePWb8ukT3_5KgJR_OWnYx',
                'Access-Control-Allow-Origin': '*'
            })
        })
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    YelpService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    YelpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], YelpService);
    return YelpService;
}());



/***/ }),

/***/ "./src/app/components/events/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<mat-toolbar id=\"transport-toolbar\">\r\n    <mat-form-field id=\"location-field\">\r\n        <mat-select placeholder=\"Choose an Area\" [(value)]=\"mainSelected\">\r\n            <mat-option value=\"Carton House\" class=\"mat-select\">Carton House</mat-option>\r\n            <mat-option value=\"Maynooth University\" class=\"mat-select\">Maynooth University</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n\r\n    <mat-form-field class=\"stop-field\" *ngIf=\"mainSelected == 'Carton House'\">\r\n            <mat-placeholder>Choose a location</mat-placeholder>\r\n        <mat-select [(value)]=\"CartonSelected\">\r\n            <mat-option value=\"National Academy\" class=\"mat-select\">National Academy</mat-option>\r\n            <mat-option value=\"Hotel Reception\" class=\"mat-select\">Hotel Reception</mat-option>\r\n            <mat-option value=\"Club House Roundabout\" class=\"mat-select\">Club House Roundabout</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"stop-field\" *ngIf=\"mainSelected == 'Maynooth University'\">\r\n            <mat-placeholder >Choose a location</mat-placeholder>\r\n         <mat-select [(value)]=\"MaynoothSelected\">\r\n            <mat-option value=\"North Campus Apartment Complex\" class=\"mat-select\">North Campus Apartment Complex</mat-option>\r\n            <mat-option value=\"Nort Campus Phonenix Restaurant\" class=\"mat-select\">North Campus Phonenix Restaurant</mat-option>\r\n            <mat-option value=\"North Campus Pedestrian crossing\" class=\"mat-select\">North Campus Pedestrian crossing</mat-option>\r\n        </mat-select>\r\n    </mat-form-field>\r\n</mat-toolbar>\r\n\r\n<agm-map *ngIf=\"mainSelected == 'Carton House'\" [latitude]=\"Cartondefaultlat\" [longitude]=\"Cartondefaultlng\" [zoom]=\"zoom\"\r\n    [mapTypeId]=\"'hybrid'\" disableDefaultUI=\"true\">\r\n\r\n    <agm-marker *ngIf=\"mainSelected == 'Carton House' && CartonSelected == null\" [latitude]=\"Cartondefaultlat\" [longitude]=\"Cartondefaultlng\"></agm-marker>\r\n\r\n    <div *ngIf=\"CartonSelected == 'National Academy'\">\r\n        <agm-marker [latitude]=\"NationalAcademylat\" [longitude]=\"NationalAcademylng\" ></agm-marker>\r\n    </div>\r\n\r\n    <div *ngIf=\"CartonSelected == 'Hotel Reception'\">\r\n        <agm-marker [latitude]=\"HotelReceptionlat\" [longitude]=\"HotelReceptionlng\"></agm-marker>\r\n    </div>\r\n\r\n    <div *ngIf=\"CartonSelected == 'Club House Roundabout'\">\r\n        <agm-marker [latitude]=\"ClubHouseRoundaboutlat\" [longitude]=\"ClubHouseRoundaboutlng\"></agm-marker>\r\n    </div>\r\n</agm-map>\r\n\r\n<agm-map *ngIf=\"mainSelected == 'Maynooth University'\" [latitude]=\"MaynoothDefaultlat\" [longitude]=\"MaynoothDefaultlng\" [zoom]=\"zoom\"\r\n    [mapTypeId]=\"'hybrid'\" disableDefaultUI=\"true\">\r\n\r\n    <agm-marker *ngIf=\"mainSelected == 'Maynooth University' && MaynoothSelected == null\" [latitude]=\"MaynoothDefaultlat\" [longitude]=\"MaynoothDefaultlng\"></agm-marker>\r\n\r\n    <div *ngIf=\"MaynoothSelected == 'North Campus Apartment Complex'\">\r\n        <agm-marker [latitude]=\"ApartmentComplexlat\" [longitude]=\"ApartmentComplexlng\"></agm-marker>\r\n    </div>\r\n    <div *ngIf=\"MaynoothSelected == 'Nort Campus Phonenix Restaurant'\">\r\n        <agm-marker [latitude]=\"PhoenixRestaurantlat\" [longitude]=\"PhoenixRestaurantlng\"></agm-marker>\r\n    </div>\r\n    <div *ngIf=\"MaynoothSelected == 'North Campus Pedestrian crossing'\">\r\n        <agm-marker [latitude]=\"PedestrianCrosslat\" [longitude]=\"PedestrianCrosslng\"></agm-marker>\r\n    </div>\r\n</agm-map>\r\n\r\n\r\n<mat-table #table [dataSource]=\"dataSource\" id=\"timetable\">\r\n\r\n    <ng-container matColumnDef=\"bus\">\r\n        <mat-header-cell *matHeaderCellDef> Bus </mat-header-cell>\r\n        <mat-cell @fade *matCellDef=\"let bus\"> {{bus.position}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"times\">\r\n        <mat-header-cell *matHeaderCellDef> Times </mat-header-cell>\r\n        <mat-cell @fade *matCellDef=\"let times\"> {{times.name}} </mat-cell>\r\n    </ng-container>\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n</mat-table>\r\n"

/***/ }),

/***/ "./src/app/components/events/transport/transport.component.scss":
/***/ (function(module, exports) {

module.exports = ".stop-field, #location-field {\n  width: 45%;\n  font-size: 68%; }\n\nagm-map {\n  height: 200px;\n  width: 100%; }\n\n#timetable {\n  text-align: center; }\n\n#tabs {\n  text-align: center; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/events/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transport',
            template: __webpack_require__("./src/app/components/events/transport/transport.component.html"),
            styles: [__webpack_require__("./src/app/components/events/transport/transport.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["m" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["k" /* style */])({ opacity: 1 }))
                    ])
                ])
            ]
        })
    ], TransportComponent);
    return TransportComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: '11:30', weight: 1.0079, symbol: 'H' },
    { position: 2, name: '11:00', weight: 4.0026, symbol: 'He' },
    { position: 2, name: '11:00', weight: 4.0026, symbol: 'He' },
    { position: 2, name: '11:00', weight: 4.0026, symbol: 'He' },
    { position: 2, name: '11:00', weight: 4.0026, symbol: 'He' },
];


/***/ }),

/***/ "./src/app/components/fav-team-profiles/fav-team-profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"fav-team-wrapper\">\n  <mat-toolbar>\n    <span>Favourite Teams</span>\n    <span><button mat-button><mat-icon>alarm</mat-icon></button></span>\n  </mat-toolbar>\n  <div id=\"fav-team-header\">\n  </div>\n  <div id=\"fav-team-body\">\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Australia\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <app-team-profiles></app-team-profiles>\n\n    </mat-expansion-panel>\n  </div>\n  <div id=\"fav-team-footer\">\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/fav-team-profiles/fav-team-profiles.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/fav-team-profiles/fav-team-profiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavTeamProfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FavTeamProfilesComponent = /** @class */ (function () {
    function FavTeamProfilesComponent() {
    }
    FavTeamProfilesComponent.prototype.ngOnInit = function () {
    };
    FavTeamProfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-fav-team-profiles',
            template: __webpack_require__("./src/app/components/fav-team-profiles/fav-team-profiles.component.html"),
            styles: [__webpack_require__("./src/app/components/fav-team-profiles/fav-team-profiles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FavTeamProfilesComponent);
    return FavTeamProfilesComponent;
}());



/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  geolocation works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/geolocation/geolocation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeolocationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GeolocationComponent = /** @class */ (function () {
    function GeolocationComponent() {
    }
    GeolocationComponent.prototype.ngOnInit = function () {
    };
    GeolocationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-geolocation',
            template: __webpack_require__("./src/app/components/geolocation/geolocation.component.html"),
            styles: [__webpack_require__("./src/app/components/geolocation/geolocation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], GeolocationComponent);
    return GeolocationComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"headerImg\">\r\n  <img src=\"./assets/img/WATC.jpg\">\r\n</div>\r\n\r\n<div id=\"weather-api\">\r\n  <mat-toolbar id=\"weather-toolbar\">\r\n    <div id=\"forecast\">\r\n      <span>\r\n        {{weather.main.temp | number:'1.0-0'}}&deg;c\r\n      </span>\r\n\r\n    </div><div id=\"wind\">\r\n      <!-- make button to change to fareinhit -->\r\n      <span>Wind: {{weather.wind.speed | number:'1.0-0'}} km/h</span>\r\n      <div id=\"direction\">\r\n        <span *ngIf=\"weather.wind.deg >= 0 && weather.wind.deg <= 22.50\">\r\n          North\r\n        </span>\r\n        <div *ngIf=\"weather.wind.deg > 22.50 && weather.wind.deg <= 67.50\">\r\n          North-East\r\n        </div>\r\n        <span *ngIf=\"weather.wind.deg > 67.50 && weather.wind.deg <= 112.50\">\r\n          East\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 112.50 && weather.wind.deg <= 157.50\">\r\n          South-East\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 157.50 && weather.wind.deg <= 202.50\">\r\n          South\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 202.50 && weather.wind.deg <= 247.50\">\r\n          South-West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 247.50 && weather.wind.deg <= 292.50\">\r\n          West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 292.50 && weather.wind.deg <= 337.50\">\r\n          North-West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 337.50 && weather.wind.deg <= 360\">\r\n          North\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg == null\">\r\n          Calm wind\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </mat-toolbar>\r\n  <div id=\"weather-main\">\r\n    <div id=\"weather-content\">\r\n      <div id=\"weather-temp\">\r\n          <span>main{{weather.main.temp | number:'1.0-0'}}&deg;c</span>\r\n          <span>max{{weather.main.temp_max | number:'1.0-0'}}&deg;</span>\r\n          <span>min{{weather.main.temp_min | number:'1.0-0'}}&deg;</span>\r\n      </div>\r\n      <div id=\"weather-wind\">\r\n          <span>Wind: {{weather.wind.speed | number:'1.0-0'}} km/h</span>\r\n          <span>weather: {{weather.weather[0].main}}</span>\r\n\r\n      </div>\r\n      <div id=\"weather-direction\">\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <mat-list class=\"news-content-wrapper\">\r\n      <mat-list-item role=\"listitem\">\r\n\r\n          <div class=\"card-image\">\r\n              <img src=\"./assets/img/ILGU.png\" class=\"home-card-img\">\r\n            </div>\r\n\r\n    <div class=\"mat-card-content\">\r\n         <div class=\"mat-card-heading\">\r\n             <h3>Heading</h3>\r\n          </div>\r\n                  \r\n          <div>\r\n            <p>description</p>\r\n          </div>\r\n        </div>\r\n      </mat-list-item>\r\n    \r\n      <mat-divider></mat-divider>\r\n    \r\n    <mat-list-item role=\"listitem\">\r\n\r\n        <div class=\"card-image\">\r\n            <img src=\"./assets/img/ILGU.png\" class=\"home-card-img\">\r\n        </div>\r\n      \r\n        <div class=\"mat-card-content\">\r\n          <div class=\"mat-card-heading\">\r\n             <h3>Heading</h3>\r\n          </div>\r\n                  \r\n          \r\n        <div>\r\n             <p> description</p>\r\n        </div>\r\n    </div>\r\n</mat-list-item>\r\n\r\n      <mat-divider></mat-divider>\r\n\r\n<mat-list-item role=\"listitem\">\r\n   <div class=\"card-image\">\r\n     <img src=\"./assets/img/ILGU.png\" class=\"home-card-img\">\r\n    </div>\r\n\r\n    <div class=\"mat-card-content\">\r\n      <div class=\"mat-card-heading\">\r\n        <h3>Heading</h3>\r\n      </div>\r\n          \r\n        <div>\r\n           <p>description</p>\r\n        </div>\r\n    </div>\r\n</mat-list-item>\r\n    \r\n    <mat-divider></mat-divider>\r\n\r\n</mat-list>\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.scss":
/***/ (function(module, exports) {

module.exports = "#headerImg img {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#weather-toolbar {\n  background-color: #44bd32; }\n\n#wind {\n  font-size: 80%;\n  width: 70%;\n  text-align: center; }\n\n#direction {\n  float: right; }\n\n#forecast {\n  vertical-align: middle;\n  font-size: 165%; }\n\n.news-content-wrapper {\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  z-index: -1; }\n\n.home-mat-card {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: nowrap;\n      flex-wrap: nowrap;\n  padding: 20px; }\n\n.card-image {\n  height: 20%;\n  width: 33%; }\n\n.home-card-img {\n  height: 100%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_weather_service__ = __webpack_require__("./src/app/components/homepage/services/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(_weatherService, _homeNewsService) {
        this._weatherService = _weatherService;
        this._homeNewsService = _homeNewsService;
        this.weather = [];
        this.homeNews = [];
    }
    HomepageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._weatherService.getWeather()
            .subscribe(function (weather) {
            _this.weather = weather;
            _this._homeNewsService.getHomeNews()
                .subscribe(function (homeNews) {
                _this.homeNews = homeNews;
            });
        }, function (error) { return _this.errorMessage = error; });
    };
    HomepageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-homepage',
            template: __webpack_require__("./src/app/components/homepage/homepage.component.html"),
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.scss")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('fade', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ backgroundColor: 'yellow', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(2000, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({ backgroundColor: 'white', opacity: 1 }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_weather_service__["b" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_1__services_weather_service__["a" /* HomeNewsService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/services/weather.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeatherService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeNewsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeatherService = /** @class */ (function () {
    function WeatherService(_http) {
        this._http = _http;
        this._weatherUrl = "http://api.openweathermap.org/data/2.5/weather?lat=53.3909&lon=-6.5665&units=metric&appid=30e47e75d5f18740d0765320a709ce40";
    }
    WeatherService.prototype.getWeather = function () {
        return this._http.get(this._weatherUrl)
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    WeatherService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    WeatherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], WeatherService);
    return WeatherService;
}());

var HomeNewsService = /** @class */ (function () {
    function HomeNewsService(_http) {
        this._http = _http;
        this._homeNewsUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/5efbf456b43bb5f27ae1d1f34d060a38/raw/75cda83d26e27a868cbc7bdafe8b8c4014bb11f0/homenews.json";
    }
    HomeNewsService.prototype.getHomeNews = function () {
        return this._http.get(this._homeNewsUrl)
            .do(function (data) { return console.log("All: " + JSON.stringify(data)); })
            .catch(this.handleError);
    };
    HomeNewsService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    HomeNewsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], HomeNewsService);
    return HomeNewsService;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"live-main\">\n  <mat-toolbar id=\"live-search\">\n    <mat-form-field>\n      <input matInput placeholder=\"search\">\n    </mat-form-field>\n    <span class=\"example-fill-remaining-space\"></span>\n    <button mat-button>\n      <mat-icon>search</mat-icon>\n    </button>\n  </mat-toolbar>\n  <table id=\"live-table\">\n    <thead>\n      <tr id=\"live-table-header-title\">\n        <th>Pos</th>\n        <th>Player</th>\n        <th>Team</th>\n        <th>Hole</th>\n        <th>Total</th>\n        <th>R1</th>\n        <th>R2</th>\n        <th>R3</th>\n        <th>R4</th>\n        <th>Total</th>\n      </tr>\n    </thead>\n    <tbody *ngFor=\"let live of live\">\n      <tr>\n        <td>{{live.pos}}</td>\n        <td>Cameron Davis</td>\n        <td>Australia</td>\n        <td>F</td>\n        <td>\n          <span id=\"total\">-17</span>\n        </td>\n        <td>67</td>\n        <td>66</td>\n        <td>68</td>\n        <td>68</td>\n        <td>\n          <span id=\"total\">269</span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.scss":
/***/ (function(module, exports) {

module.exports = "#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\ntbody:nth-child(even) {\n  background: #CCC; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.mat-button {\n  min-width: 1%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#live-table-header-title {\n  background: cadetblue;\n  height: 40px;\n  text-align: center; }\n\n#live-main {\n  margin-bottom: 25%; }\n\n#total {\n  color: red; }\n\ntr:nth-child(even) {\n  background: #cccccc; }\n\n#live-table td {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-player-score/live-player-score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivePlayerScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__live_score_service__ = __webpack_require__("./src/app/components/live-score/live-score.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LivePlayerScoreComponent = /** @class */ (function () {
    function LivePlayerScoreComponent(_liveScoreService) {
        this._liveScoreService = _liveScoreService;
        this.live = [];
        this.filterdLive = this.live;
        this._listFilter = 'cart';
    }
    Object.defineProperty(LivePlayerScoreComponent.prototype, "listFilter", {
        get: function () {
            return this._listFilter;
        },
        set: function (value) {
            this._listFilter = value;
            this.filterdLive = this.listFilter ? this.performFilter(this.listFilter) : this.live;
        },
        enumerable: true,
        configurable: true
    });
    LivePlayerScoreComponent.prototype.performFilter = function (filterBy) {
        filterBy = filterBy.toLocaleLowerCase();
        return this.live.filter(function (teams) {
            return teams.player.toLocaleLowerCase().indexOf(filterBy) !== -1;
        });
    };
    LivePlayerScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._liveScoreService.getPlayer()
            .subscribe(function (live) {
            _this.live = live;
        }, function (error) { return _this.errorMessage = error; });
    };
    LivePlayerScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-live-player-score',
            template: __webpack_require__("./src/app/components/live-score/live-player-score/live-player-score.component.html"),
            styles: [__webpack_require__("./src/app/components/live-score/live-player-score/live-player-score.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__live_score_service__["a" /* LiveScoreService */]])
    ], LivePlayerScoreComponent);
    return LivePlayerScoreComponent;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-score.component.html":
/***/ (function(module, exports) {

module.exports = "<div >\r\n<mat-tab-group id=\"tab\">\r\n  <mat-tab label=\"Player Score\">\r\n    <app-live-player-score></app-live-player-score>\r\n  </mat-tab>\r\n  <mat-tab label=\"Team Score\">\r\n    <app-live-team-score></app-live-team-score>\r\n  </mat-tab>\r\n</mat-tab-group>\r\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-score.component.scss":
/***/ (function(module, exports) {

module.exports = "#tab {\n  width: 100%;\n  height: 100%;\n  position: fixed; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LiveScoreComponent = /** @class */ (function () {
    function LiveScoreComponent() {
    }
    LiveScoreComponent.prototype.ngOnInit = function () {
    };
    LiveScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-live-score',
            template: __webpack_require__("./src/app/components/live-score/live-score.component.html"),
            styles: [__webpack_require__("./src/app/components/live-score/live-score.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LiveScoreComponent);
    return LiveScoreComponent;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-score.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveScoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LiveScoreService = /** @class */ (function () {
    function LiveScoreService(_http) {
        this._http = _http;
        this._leaderUrl = "http://www.ghintpp.com/champ/TPPOnlineScoring/Webservices/strokedata.asmx/ScoringResultsTeamGroup?tournamentID=594&scoreMethod=Gross&players=True&teamGroupID=252&numberToInclude=0&flightID=0&scoreMode=widgetd&scorecardID=0&mobileBrowser=False&noCache=True";
        this._fakeleadUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/eb9cf24aa4b81ad50446c43359bef544/raw/77c85e4b64e2fb8f77b736ae37f7ee4854ee39ac/live-team.json";
        this._faketeamUrl = "https://gist.githubusercontent.com/PatrickBookGolf365/6d0b7b66ae3b9b00e2bf0733b743dbb1/raw/448932e0b0a8411dae145831b1c416936425c2d7/live-teams.json";
    }
    LiveScoreService.prototype.getPlayer = function () {
        // var parseString = require('xml2js').parseString;
        // return this._http.get(this._leaderUrl, { responseType:'text', headers: new HttpHeaders({
        //     'Content-Type':'text/xml; charset=utf-8'})})
        // .do(data => (parseString(data, function(err, result){ console.dir("all:"+JSON.stringify(result))})))
        // .catch(this.handleError)
        return this._http.get(this._fakeleadUrl)
            .catch(this.handleError);
    };
    LiveScoreService.prototype.getTeam = function () {
        return this._http.get(this._faketeamUrl)
            .catch(this.handleError);
    };
    LiveScoreService.prototype.handleError = function (err) {
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(err.message);
    };
    LiveScoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LiveScoreService);
    return LiveScoreService;
}());



/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"live-main\">\n    <mat-toolbar id=\"live-search\">\n        <mat-form-field>\n            <input matInput placeholder=\"search\">\n        </mat-form-field>\n        <span class=\"example-fill-remaining-space\"></span>\n        <button mat-button>\n            <mat-icon>search</mat-icon>\n        </button>\n    </mat-toolbar>\n    <table id=\"live-table\">\n        <thead>\n            <tr id=\"live-table-header-title\">\n                <th>Ex</th>\n                <th>Pos</th>\n                <th>Team</th>\n                <th>Hole</th>\n                <th>Total</th>\n                <th>R1</th>\n                <th>R2</th>\n                <th>R3</th>\n                <th>R4</th>\n                <th>Total</th>\n            </tr>\n        </thead>\n        <tbody *ngFor=\"let team of team; let i = index\">\n            <tr id=\"live-table-header\">\n                <td>\n                    <button (click)=\"hideStuff[i] = !hideStuff[i]\" mat-button>\n                        <mat-icon>expand_{{hideStuff[i] ? 'less' : 'more'}}</mat-icon>\n                    </button>\n                </td>\n                <td>{{team.pos}}</td>\n                <td>{{team.team}}</td>\n                <td>{{team.hole}}</td>\n                <td>\n                    <span id=\"total\">{{team.total}}</span>\n                </td>\n                <td>{{team.r1}}</td>\n                <td>{{team.r2}}</td>\n                <td>{{team.r3}}</td>\n                <td>{{team.r4}}</td>\n                <td>\n                    <span id=\"total\">{{team.final}}</span>\n                </td>\n            </tr>\n\n            <!--player 1-->\n            <tr class=\"player\" *ngIf=\"hideStuff[i]\">\n                <td></td>\n                <td></td>\n                <td>{{team.player1.name}}</td>\n                <td>{{team.player1.hole}}</td>\n                <td>\n                    <span id=\"total\">{{team.player1.total}}</span>\n                </td>\n                <td>{{team.player1.r1}}</td>\n                <td>{{team.player1.r2}}</td>\n                <td>{{team.player1.r3}}</td>\n                <td>{{team.player1.r4}}</td>\n                <td>\n                    <span id=\"total\">{{team.player1.final}}</span>\n                </td>\n            </tr>\n\n            <!--player 2-->\n            <tr class=\"player\" *ngIf=\"hideStuff[i]\">\n                <td></td>\n                <td></td>\n                <td>{{team.player2.name}}</td>\n                <td>{{team.player2.hole}}</td>\n                <td>\n                    <span id=\"total\">{{team.player2.total}}</span>\n                </td>\n                <td>{{team.player2.r1}}</td>\n                <td>{{team.player2.r2}}</td>\n                <td>{{team.player2.r3}}</td>\n                <td>{{team.player2.r4}}</td>\n                <td>\n                    <span id=\"total\">{{team.player2.final}}</span>\n                </td>\n            </tr>\n            <!--player 3-->\n            <tr class=\"player\" *ngIf=\"hideStuff[i]\">\n                <td></td>\n                <td></td>\n                <td>{{team.player3.name}}</td>\n                <td>{{team.player3.hole}}</td>\n                <td>\n                    <span id=\"total\">{{team.player3.total}}</span>\n                </td>\n                <td>{{team.player3.r1}}</td>\n                <td>{{team.player3.r2}}</td>\n                <td>{{team.player3.r3}}</td>\n                <td>{{team.player3.r4}}</td>\n                <td>\n                    <span id=\"total\">{{team.player3.final}}</span>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <!-- <table id=\"live-table\" border=\"1\">\n            <tr>\n                <th>Ex</th>\n                <th>Pos</th>\n                <th>Team</th>\n                <th>Hole</th>\n                <th>Total</th>\n                <th>R1</th>\n                <th>R2</th>\n                <th>R3</th>\n                <th>R4</th>\n                <th>Total</th>\n            </tr>\n            <tr>\n                <td>\n                    <button id=\"clickme\" mat-button>\n                        <mat-icon>expand_more</mat-icon>\n                    </button>\n                </td>\n                <td>1</td>\n                <td>Ireland</td>\n                <td>F</td>\n                <td>-38</td>\n                <td>135</td>\n                <td>132</td>\n                <td>121</td>\n                <td>126</td>\n                <td>534</td>\n            </tr>\n            <tr class=\"hideme\">\n                <td></td>\n                <td></td>\n                <td>Patrick</td>\n                <td>F</td>\n                <td>-38</td>\n                <td>135</td>\n                <td>132</td>\n                <td>121</td>\n                <td>126</td>\n                <td>534</td>\n            </tr>\n            <tr class=\"hideme\">\n                <td></td>\n                <td></td>\n                <td>Patrick</td>\n                <td>F</td>\n                <td>-38</td>\n                <td>135</td>\n                <td>132</td>\n                <td>121</td>\n                <td>126</td>\n                <td>534</td>\n            </tr>\n            <tr class=\"hideme\">\n                <td></td>\n                <td></td>\n                <td>Patrick</td>\n                <td>F</td>\n                <td>-38</td>\n                <td>135</td>\n                <td>132</td>\n                <td>121</td>\n                <td>126</td>\n                <td>534</td>\n            </tr>\n\n        </table> -->\n    <mat-divider></mat-divider>\n</div>"

/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.scss":
/***/ (function(module, exports) {

module.exports = "#live-main {\n  margin-bottom: 25%; }\n\n#live-table {\n  font-size: 75%;\n  width: 100%;\n  border-collapse: collapse; }\n\n#live-table-header-title {\n  background: cadetblue;\n  height: 40px;\n  text-align: center; }\n\n#live-table-header {\n  text-align: center; }\n\n.player {\n  text-align: center; }\n\n.mat-button {\n  min-width: 1%; }\n\n#live-search {\n  width: 100%; }\n\n#live-search mat-form-field {\n  width: 45%;\n  font-size: 68%; }\n\n#total {\n  color: red; }\n\ntbody:nth-child(even) {\n  background: #CCC; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/live-score/live-team-score/live-team-score.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiveTeamScoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__live_score_service__ = __webpack_require__("./src/app/components/live-score/live-score.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LiveTeamScoreComponent = /** @class */ (function () {
    function LiveTeamScoreComponent(_liveScoreService) {
        this._liveScoreService = _liveScoreService;
        this.team = [];
        this.hideStuff = [];
    }
    LiveTeamScoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._liveScoreService.getTeam()
            .subscribe(function (team) {
            _this.team = team;
        }, function (error) { return _this.errorMessage = error; });
        //   //   $( "table" ).each(function( index ) {
        //   //  console.log( index + ": " + $( this ).text() );
        // });
    };
    LiveTeamScoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-live-team-score',
            template: __webpack_require__("./src/app/components/live-score/live-team-score/live-team-score.component.html"),
            styles: [__webpack_require__("./src/app/components/live-score/live-team-score/live-team-score.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__live_score_service__["a" /* LiveScoreService */]])
    ], LiveTeamScoreComponent);
    return LiveTeamScoreComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<app-toolbar></app-toolbar>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<mat-toolbar class=\"app-toolbar\">\r\n  <button type=\"button\" mat-button routerLink=\"\">\r\n    <i class=\"material-icons md-dark\">home</i>\r\n  </button>\r\n\r\n\r\n  <button type=\"button\" mat-button routerLink=\"live-score\">\r\n    <i class=\"material-icons md-dark\">assessment</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"events\">\r\n    <i class=\"material-icons md-dark md-inactive\">event_note</i>\r\n  </button>\r\n\r\n  <button type=\"button\" mat-button routerLink=\"geo-location\">\r\n    <i class=\"material-icons md-dark md-inactive\">location_on</i>\r\n  </button>\r\n\r\n</mat-toolbar>\r\n\r\n\r\n  \r\n\r\n"

/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ".app-toolbar {\n  position: fixed;\n  bottom: 0;\n  background-color: #5cd65c;\n  height: 40px;\n  width: 100%; }\n\n.material-icons.md-dark {\n  color: black; }\n\n.mat-button {\n  min-width: 1%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/navigation/nav/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navigation',
            template: __webpack_require__("./src/app/components/navigation/nav/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/nav/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"top-nav\">\r\n    <mat-toolbar class=\"header-toolbar\">\r\n    <span><mat-icon><img src=\"./assets/img/ILGU.png\" id=\"ILGU-logo\"></mat-icon></span>\r\n    <span><mat-icon><img src=\"./assets/img/GUI2.png\" id=\"GUI2-logo\"></mat-icon></span>\r\n    <span class=\"example-fill-remaining-space\"></span>\r\n    <span><button  type=\"button\" mat-button routerLink=\"add-info\"><i class=\"material-icons md-dark md-inactive\">info_outline</i></button></span>\r\n</mat-toolbar>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.scss":
/***/ (function(module, exports) {

module.exports = "#top-nav mat-toolbar {\n  height: 100%; }\n\n.header-toolbar {\n  background-color: #D8D8D8;\n  height: 40px;\n  width: 100%; }\n\n.header-toolbar mat-icon {\n  width: 100%;\n  height: 100%;\n  vertical-align: middle; }\n\n#ILGU-logo {\n  width: 150%;\n  height: 150%; }\n\n#GUI2-logo {\n  width: 42%;\n  height: 42%;\n  margin-left: 6%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.mat-button {\n  min-width: 1%;\n  width: 100%; }\n"

/***/ }),

/***/ "./src/app/components/navigation/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-toolbar',
            template: __webpack_require__("./src/app/components/navigation/toolbar/toolbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/toolbar/toolbar.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<button id=\"calculate\">Click</button>\n<p id=\"firstvalue\">2</p>\n<p id=\"secondvalue\">3</p>\n<p type=\"number\" id=\"output\"></p>\n\n\n<div id=\"team-wrapper\">\n  <mat-toolbar id=\"team-header-toolbar\">\n    <span id=\"title\">Australia</span>\n    <button id=\"fav-button\" mat-button><mat-icon class=\"fav\">star</mat-icon></button>\n  </mat-toolbar>\n  <div id=\"team-header\">\n    <span>\n      <img id=\"team-image\" src=\"./assets/img/team.jpg\">\n    </span>\n    <mat-card id=\"score-Info\">\n      <table>\n      <tr>\n        <th>Thru</th><td>F</td>\n        <th>Today</th><td>-13</td>\n        <th>Total</th><td>-38</td>\n        <th>Rank</th><td>1</td>\n      </tr>\n    </table>\n    </mat-card>\n  </div>\n <mat-divider></mat-divider>\n  <div id=\"team-body\">\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Round One\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div id=\"full-Table\">\n        <div id=\"static-Table\">\n          <table>\n            <!-- Header 1/2 -->\n            <tr>\n              <th>Hole</th>\n            </tr>\n            <tr>\n              <td>Yards</td>\n            </tr>\n            <tr>\n              <td>Par</td>\n            </tr>\n            <tr>\n              <td>Cameron Davis</td>\n            </tr>\n            <tr>\n              <td>Curtis Luck</td>\n            </tr>\n            <tr>\n              <td>Harrison Endycott</td>\n            </tr>\n            <tr>\n              <td>Complete</td>\n            </tr>\n            <tr>\n              <td>Score Against Par</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"scrolling-wrapper\">\n          <div id=\"moving-Table\">\n            <div class=\"card\">\n              <table class=\"playerScore\">\n                <tr>\n                  <!-- Header 2/2 -->\n                  <th>1</th>\n                  <th>2</th>\n                  <th>3</th>\n                  <th>4</th>\n                  <th>5</th>\n                  <th>6</th>\n                  <th>7</th>\n                  <th>8</th>\n                  <th>9</th>\n                  <th>10</th>\n                  <th>Out</th>\n                  <th>11</th>\n                  <th>12</th>\n                  <th>13</th>\n                  <th>14</th>\n                  <th>15</th>\n                  <th>16</th>\n                  <th>17</th>\n                  <th>18</th>\n                  <th>In</th>\n                  <th>Total</th>\n                </tr>\n\n                <tr>\n                  <!-- Yards -->\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                </tr>\n\n                <tr>\n                  <!-- Par  -->\n                  <td>4</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>5</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>5</td>\n                  <td>36</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>5</td>\n                  <td>3</td>\n                  <td>5</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>36</td>\n                  <td>72</td>\n                </tr>\n\n                <tr>\n                  <!-- Player1  -->\n                  <td>5</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>34</td>\n                  <td>3</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>33</td>\n                  <td>67</td>\n                </tr>\n\n                <tr>\n                  <!-- Player2  -->\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>5</td>\n                  <td>4</td>\n                  <td>2</td>\n                  <td>5</td>\n                  <td>35</td>\n                  <td>4</td>\n                  <td>2</td>\n                  <td>5</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>34</td>\n                  <td>69</td>\n                </tr>\n\n                <tr>\n                  <!-- Player3  -->\n                  <td>4</td>\n                  <td>6</td>\n                  <td>3</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>3</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>33</td>\n                  <td>5</td>\n                  <td>3</td>\n                  <td>5</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>3</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>4</td>\n                  <td>35</td>\n                  <td>68</td>\n                </tr>\n\n                <tr>\n                  <!-- Round  -->\n                  <td>9</td>\n                  <td>10</td>\n                  <td>6</td>\n                  <td>7</td>\n                  <td>8</td>\n                  <td>6</td>\n                  <td>6</td>\n                  <td>7</td>\n                  <td>8</td>\n                  <td>67</td>\n                  <td>8</td>\n                  <td>6</td>\n                  <td>9</td>\n                  <td>7</td>\n                  <td>8</td>\n                  <td>6</td>\n                  <td>8</td>\n                  <td>8</td>\n                  <td>8</td>\n                  <td>68</td>\n                  <td>135</td>\n                </tr>\n\n                <tr>\n                  <!-- Score Against Par  -->\n                  <td>-3</td>\n                  <td>-1</td>\n                  <td>-1</td>\n                  <td>-2</td>\n                  <td>-4</td>\n                  <td>-6</td>\n                  <td>-8</td>\n                  <td>-7</td>\n                  <td>-9</td>\n                  <td></td>\n                  <td>E</td>\n                  <td>E</td>\n                  <td>+1</td>\n                  <td>E</td>\n                  <td>-2</td>\n                  <td>-2</td>\n                  <td>-4</td>\n                  <td>-4</td>\n                  <td>-4</td>\n                  <td></td>\n                  <td>-9</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Round Two\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div id=\"full-Table\">\n        <div id=\"static-Table\">\n          <table>\n            <!-- Header 1/2 -->\n            <tr>\n              <th>Hole</th>\n            </tr>\n            <tr>\n              <td>Yards</td>\n            </tr>\n            <tr>\n              <td>Par</td>\n            </tr>\n            <tr>\n              <td>Cameron Davis</td>\n            </tr>\n            <tr>\n              <td>Curtis Luck</td>\n            </tr>\n            <tr>\n              <td>Harrison Endycott</td>\n            </tr>\n            <tr>\n              <td>Complete</td>\n            </tr>\n            <tr>\n              <td>Score Against Par</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"scrolling-wrapper\">\n          <div id=\"moving-Table\">\n            <div class=\"card\">\n              <table class=\"playerScore\">\n                <tr>\n                  <!-- Header 1/2 -->\n                  <th>1</th>\n                  <th>2</th>\n                  <th>3</th>\n                  <th>4</th>\n                  <th>5</th>\n                  <th>6</th>\n                  <th>7</th>\n                  <th>8</th>\n                  <th>9</th>\n                  <th>10</th>\n                  <th>Out</th>\n                  <th>11</th>\n                  <th>12</th>\n                  <th>13</th>\n                  <th>14</th>\n                  <th>15</th>\n                  <th>16</th>\n                  <th>17</th>\n                  <th>18</th>\n                  <th>In</th>\n                  <th>Total</th>\n                </tr>\n\n                <tr>\n                  <!-- Yards -->\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                </tr>\n\n                <tr>\n                  <!-- Par  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player1  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player2  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player3  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Round  -->\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Score Against Par  -->\n                  <td>7</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Round Three\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div id=\"full-Table\">\n        <div id=\"static-Table\">\n          <table>\n            <!-- Header 1/2 -->\n            <tr>\n              <th>Hole</th>\n            </tr>\n            <tr>\n              <td>Yards</td>\n            </tr>\n            <tr>\n              <td>Par</td>\n            </tr>\n            <tr>\n              <td>Cameron Davis</td>\n            </tr>\n            <tr>\n              <td>Curtis Luck</td>\n            </tr>\n            <tr>\n              <td>Harrison Endycott</td>\n            </tr>\n            <tr>\n              <td>Complete</td>\n            </tr>\n            <tr>\n              <td>Score Against Par</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"scrolling-wrapper\">\n          <div id=\"moving-Table\">\n            <div class=\"card\">\n              <table class=\"playerScore\">\n                <tr>\n                  <!-- Header 1/2 -->\n                  <th>1</th>\n                  <th>2</th>\n                  <th>3</th>\n                  <th>4</th>\n                  <th>5</th>\n                  <th>6</th>\n                  <th>7</th>\n                  <th>8</th>\n                  <th>9</th>\n                  <th>10</th>\n                  <th>Out</th>\n                  <th>11</th>\n                  <th>12</th>\n                  <th>13</th>\n                  <th>14</th>\n                  <th>15</th>\n                  <th>16</th>\n                  <th>17</th>\n                  <th>18</th>\n                  <th>In</th>\n                  <th>Total</th>\n                </tr>\n\n                <tr>\n                  <!-- Yards -->\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                </tr>\n\n                <tr>\n                  <!-- Par  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player1  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player2  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player3  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Round  -->\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Score Against Par  -->\n                  <td>7</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-expansion-panel>\n    <mat-divider></mat-divider>\n    <mat-expansion-panel>\n      <mat-expansion-panel-header>\n        <mat-panel-title>\n          Round Four\n        </mat-panel-title>\n      </mat-expansion-panel-header>\n      <div id=\"full-Table\">\n        <div id=\"static-Table\">\n          <table>\n            <!-- Header 1/2 -->\n            <tr>\n              <th>Hole</th>\n            </tr>\n            <tr>\n              <td>Yards</td>\n            </tr>\n            <tr>\n              <td>Par</td>\n            </tr>\n            <tr>\n              <td>Cameron Davis</td>\n            </tr>\n            <tr>\n              <td>Curtis Luck</td>\n            </tr>\n            <tr>\n              <td>Harrison Endycott</td>\n            </tr>\n            <tr>\n              <td>Complete</td>\n            </tr>\n            <tr>\n              <td>Score Against Par</td>\n            </tr>\n          </table>\n        </div>\n        <div class=\"scrolling-wrapper\">\n          <div id=\"moving-Table\">\n            <div class=\"card\">\n              <table class=\"playerScore\">\n                <tr>\n                  <!-- Header 1/2 -->\n                  <th>1</th>\n                  <th>2</th>\n                  <th>3</th>\n                  <th>4</th>\n                  <th>5</th>\n                  <th>6</th>\n                  <th>7</th>\n                  <th>8</th>\n                  <th>9</th>\n                  <th>10</th>\n                  <th>Out</th>\n                  <th>11</th>\n                  <th>12</th>\n                  <th>13</th>\n                  <th>14</th>\n                  <th>15</th>\n                  <th>16</th>\n                  <th>17</th>\n                  <th>18</th>\n                  <th>In</th>\n                  <th>Total</th>\n                </tr>\n\n                <tr>\n                  <!-- Yards -->\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                  <td>400</td>\n                </tr>\n\n                <tr>\n                  <!-- Par  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player1  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player2  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Player3  -->\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Round  -->\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n\n                <tr>\n                  <!-- Score Against Par  -->\n                  <td>7</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>5</td>\n                  <td>6</td>\n                </tr>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </mat-expansion-panel>\n    <div id=\"team-footer\">\n\n\n    </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.scss":
/***/ (function(module, exports) {

module.exports = ".fav {\n  color: yellow; }\n\n#fav-button {\n  min-width: 1%; }\n\n#team-header-toolbar #title {\n  width: 100%;\n  font-size: 130%; }\n\n#team-header {\n  text-align: center; }\n\n#score-Info table {\n  width: 100%;\n  text-align: center; }\n\n#team-image {\n  width: 50%;\n  height: 50%;\n  margin: auto; }\n\n#full-Table {\n  width: 100%;\n  height: 100%; }\n\n#static-Table th {\n  float: left;\n  font-size: 120%; }\n\n#static-Table {\n  height: 100%;\n  width: 40%;\n  float: left;\n  font-size: 100%; }\n\n#moving-Table {\n  height: 100%;\n  float: left; }\n\n.playerScore th {\n  font-size: 120%;\n  text-align: center; }\n\n.playerScore td {\n  font-size: 100%;\n  text-align: center; }\n\n.scrolling-wrapper {\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap; }\n\n.scrolling-wrapper .card {\n    display: inline-block; }\n\n#team-body {\n  margin-bottom: 12%; }\n"

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TeamProfilesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TeamProfilesComponent = /** @class */ (function () {
    function TeamProfilesComponent() {
    }
    TeamProfilesComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $("#calculate").click(function () {
                $("p").toggle();
            });
        });
    };
    TeamProfilesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-team-profiles',
            template: __webpack_require__("./src/app/components/team-profiles/team-profiles.component.html"),
            styles: [__webpack_require__("./src/app/components/team-profiles/team-profiles.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TeamProfilesComponent);
    return TeamProfilesComponent;
}());



/***/ }),

/***/ "./src/app/shared/material.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__ = __webpack_require__("./node_modules/@angular/cdk/esm5/table.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatButtonToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatChipsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatDatepickerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatGridListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatMenuModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatNativeDateModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatPaginatorModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatProgressBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatRippleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["w" /* MatSidenavModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["y" /* MatSliderModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["x" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["z" /* MatSnackBarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["B" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["A" /* MatSortModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["C" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["D" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["E" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_material__["F" /* MatTooltipModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_cdk_table__["m" /* CdkTableModule */]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_hammerjs__);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map