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

module.exports = "<app-navigation></app-navigation>\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_navigation_navigation_component__ = __webpack_require__("./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_homepage_homepage_component__ = __webpack_require__("./src/app/components/homepage/homepage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_live_score_live_score_component__ = __webpack_require__("./src/app/components/live-score/live-score.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_geolocation_geolocation_component__ = __webpack_require__("./src/app/components/geolocation/geolocation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_events_transport_transport_component__ = __webpack_require__("./src/app/components/events/transport/transport.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_additional_info_additional_info_component__ = __webpack_require__("./src/app/components/additional-info/additional-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_additional_info_news_news_component__ = __webpack_require__("./src/app/components/additional-info/news/news.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_additional_info_about_about_component__ = __webpack_require__("./src/app/components/additional-info/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_additional_info_eligibitity_eligibility_component__ = __webpack_require__("./src/app/components/additional-info/eligibitity/eligibility.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_additional_info_schedule_schedule_component__ = __webpack_require__("./src/app/components/additional-info/schedule/schedule.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_additional_info_contact_contact_component__ = __webpack_require__("./src/app/components/additional-info/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_homepage_weather_service__ = __webpack_require__("./src/app/components/homepage/weather.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_additional_info_news_news_service__ = __webpack_require__("./src/app/components/additional-info/news/news.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_events_events_component__ = __webpack_require__("./src/app/components/events/events.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_team_profiles_team_profiles_component__ = __webpack_require__("./src/app/components/team-profiles/team-profiles.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var appRoutes = [
    { path: "", component: __WEBPACK_IMPORTED_MODULE_8__components_homepage_homepage_component__["a" /* HomepageComponent */] },
    { path: 'live-score', component: __WEBPACK_IMPORTED_MODULE_9__components_live_score_live_score_component__["a" /* LiveScoreComponent */] },
    { path: 'geo-location', component: __WEBPACK_IMPORTED_MODULE_10__components_geolocation_geolocation_component__["a" /* GeolocationComponent */] },
    { path: 'events', component: __WEBPACK_IMPORTED_MODULE_20__components_events_events_component__["a" /* EventsComponent */] },
    { path: 'add-info', component: __WEBPACK_IMPORTED_MODULE_12__components_additional_info_additional_info_component__["a" /* AdditionalInfoComponent */] },
    { path: 'profiles', component: __WEBPACK_IMPORTED_MODULE_21__components_team_profiles_team_profiles_component__["a" /* TeamProfilesComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_14__components_additional_info_about_about_component__["a" /* AboutComponent */] },
    { path: 'news', component: __WEBPACK_IMPORTED_MODULE_13__components_additional_info_news_news_component__["a" /* NewsComponent */] },
    { path: 'eligibility', component: __WEBPACK_IMPORTED_MODULE_15__components_additional_info_eligibitity_eligibility_component__["a" /* EligibilityComponent */] },
    { path: 'schedule', component: __WEBPACK_IMPORTED_MODULE_16__components_additional_info_schedule_schedule_component__["a" /* ScheduleComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_17__components_additional_info_contact_contact_component__["a" /* ContactComponent */] },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_navigation_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_homepage_homepage_component__["a" /* HomepageComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_live_score_live_score_component__["a" /* LiveScoreComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_geolocation_geolocation_component__["a" /* GeolocationComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_events_transport_transport_component__["a" /* TransportComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_additional_info_additional_info_component__["a" /* AdditionalInfoComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_additional_info_news_news_component__["a" /* NewsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_additional_info_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_additional_info_eligibitity_eligibility_component__["a" /* EligibilityComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_additional_info_schedule_schedule_component__["a" /* ScheduleComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_additional_info_contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_events_transport_transport_component__["a" /* TransportComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_events_events_component__["a" /* EventsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_team_profiles_team_profiles_component__["a" /* TeamProfilesComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_material_module__["a" /* MaterialModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_18__components_homepage_weather_service__["b" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_19__components_additional_info_news_news_service__["a" /* NewsService */], __WEBPACK_IMPORTED_MODULE_18__components_homepage_weather_service__["a" /* HomeNewsService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/additional-info/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>About </mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"mat-card-image\" src=\"assets/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>About WATC 2018 in Ireland</h3>\r\n      <p>\r\n          The Golfing Union of Ireland (GUI) and the Irish Ladies Golfing Union (ILGU) will host the 2018 World Amateur Team Championships - with the Epsirito Santo Trophy (women) being competed for from Wednesday 29th August until Saturday 1st September and the Eisenhower Trophy (men) being competed for from Wednesday 5th September until Saturday 8th September. The two events will be staged at Carton House, where players will be tested on the world-famous O’Meara and Montgomerie courses . The Championships together represent an international festival of golf, during which time a Championship Gala Dinner for all participants will be staged at Maynooth University and the Biennial Meeting of the International Golf Federation will be held in Carton House on Monday 3rd September.\r\n      </p>\r\n    </mat-card-content>\r\n    <mat-card-actions>\r\n      <button mat-button>LIKE</button>\r\n      <button mat-button>SHARE</button>\r\n    </mat-card-actions>\r\n  </mat-card>\r\n"

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

module.exports = "<mat-list role=\"list\">\r\n    <mat-list-item role=\"listitem\" routerLink=\"/news\">\r\n      \r\n        <span>News</span>\r\n\r\n        <i class=\"material-icons\">navigate_next</i>\r\n    \r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n    \r\n    <mat-list-item role=\"listitem\" routerLink=\"/about\">\r\n\r\n        <span>About</span>\r\n\r\n        <i class=\"material-icons\">navigate_next</i>\r\n\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/eligibility\">\r\n    \r\n        <span>Eligibility</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n    \r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/schedule\">\r\n      \r\n        <span>Full Schedule</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n\r\n    <mat-list-item role=\"listitem\" routerLink=\"/contact\">\r\n    \r\n        <span>Contact</span>\r\n    \r\n      <i class=\"material-icons\">navigate_next</i>\r\n    </mat-list-item>\r\n    <mat-divider></mat-divider>\r\n  </mat-list>\r\n  <router-outlet></router-outlet>\r\n"

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

module.exports = "<mat-toolbar class=\"mat-toolbar-add-info\">my app</mat-toolbar>\r\n\r\n<mat-card class=\"example-card\">\r\n    <mat-card-header>\r\n      <div mat-card-avatar class=\"example-header-image\"></div>\r\n      <mat-card-title>Eligibility</mat-card-title>\r\n      <mat-card-subtitle>World Amatuer Team Championships</mat-card-subtitle>\r\n    </mat-card-header>\r\n    <img class=\"mat-card-image\" src=\"assets/cartonHouse2.jpg\" alt=\"Photo of a Shiba Inu\" >\r\n    <mat-card-content class=\"mat-card-content\">\r\n      <h3>Eligibility</h3>\r\n      <p>\r\n          IGF National Federation Members may enter one women’s team and one men’s team. Players must be amateur golfers under the Rules of Amateur Status of the R&A and the United States Golf Association and nationals of the countries they represent, as defined in the IGF’s Nationality Policy.\r\n      </p>\r\n    </mat-card-content>\r\n  </mat-card>\r\n"

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
        this.news = [];
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

/***/ "./src/app/components/events/events.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  events works!\n  <app-transport></app-transport>\n</p>\n"

/***/ }),

/***/ "./src/app/components/events/events.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
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
        }),
        __metadata("design:paramtypes", [])
    ], EventsComponent);
    return EventsComponent;
}());



/***/ }),

/***/ "./src/app/components/events/transport/transport.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  transport works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/events/transport/transport.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/events/transport/transport.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TransportComponent; });
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

var TransportComponent = /** @class */ (function () {
    function TransportComponent() {
    }
    TransportComponent.prototype.ngOnInit = function () {
    };
    TransportComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-transport',
            template: __webpack_require__("./src/app/components/events/transport/transport.component.html"),
            styles: [__webpack_require__("./src/app/components/events/transport/transport.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TransportComponent);
    return TransportComponent;
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

/***/ "./src/app/components/homepage/homepage.component.css":
/***/ (function(module, exports) {

module.exports = "#home-wrapper{\r\n    width: 100%;\r\n    height: 100%;\r\n    font-family: 'Lato', sans-serif; \r\n}\r\n\r\n#headerImg img{\r\n    width: 100%;\r\n    height: 100%;\r\n    vertical-align: middle;\r\n}\r\n\r\n#wind{\r\n    font-size: 90%;\r\n    width: 100%;\r\n    text-align: center;\r\n   \r\n}\r\n\r\n#direction{\r\n    float: right;\r\n}\r\n\r\n#forecast{\r\n   vertical-align: middle;\r\n    font-size: 200%;\r\n}\r\n\r\n.news-panel{\r\n    \r\n    margin: 1%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"home-wrapper\">\r\n  <div id=\"headerImg\">\r\n    <img src=\"./assets/img/WATC.jpg\">\r\n  </div>\r\n  <mat-toolbar id=\"weather-toolbar\">\r\n    <div id=\"forecast\">\r\n      <span>\r\n        {{weather.main.temp | number:'1.0-0'}}&deg;c\r\n      </span>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n    <div id=\"wind\">\r\n      <!-- make button to change to fareinhit -->\r\n      <span>Wind: {{weather.wind.speed | number:'1.0-0'}} km/h</span>\r\n      <div id=\"direction\">\r\n        <span *ngIf=\"weather.wind.deg >= 0 && weather.wind.deg <= 22.50\">\r\n          North\r\n        </span>\r\n        <div *ngIf=\"weather.wind.deg > 22.50 && weather.wind.deg <= 67.50\">\r\n          North-East\r\n        </div>\r\n        <span *ngIf=\"weather.wind.deg > 67.50 && weather.wind.deg <= 112.50\">\r\n          East\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 112.50 && weather.wind.deg <= 157.50\">\r\n          South-East\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 157.50 && weather.wind.deg <= 202.50\">\r\n          South\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 202.50 && weather.wind.deg <= 247.50\">\r\n          South-West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 247.50 && weather.wind.deg <= 292.50\">\r\n          West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 292.50 && weather.wind.deg <= 337.50\">\r\n          North-West\r\n        </span>\r\n        <span *ngIf=\"weather.wind.deg > 337.50 &&weather.wind.deg <= 360\">\r\n          North\r\n        </span>\r\n      </div>\r\n      <mat-divider></mat-divider>\r\n    </div>\r\n  </mat-toolbar>\r\n\r\n          <mat-expansion-panel class=\"news-panel-{{homeNews.news[0].severity}}\">\r\n            <mat-expansion-panel-header>\r\n              01/01/2018 - 3:40 - {{homeNews.news[0].title}}\r\n            </mat-expansion-panel-header>\r\n            {{homeNews.news[0].content}}\r\n          </mat-expansion-panel>\r\n        \r\n          <mat-expansion-panel class=\"news-panel-{{homeNews.news[1].severity}}\">\r\n            <mat-expansion-panel-header>\r\n              01/01/2018 - 2:40 - {{homeNews.news[1].title}}\r\n            </mat-expansion-panel-header>\r\n            {{homeNews.news[1].content}}\r\n          </mat-expansion-panel>\r\n        \r\n          <mat-expansion-panel class=\"news-panel-{{homeNews.news[2].severity}}\">\r\n            <mat-expansion-panel-header>\r\n              01/01/2018 - 1:40 - {{homeNews.news[2].title}}\r\n            </mat-expansion-panel-header>\r\n            {{homeNews.news[2].content}}\r\n          </mat-expansion-panel>\r\n  <mat-divider></mat-divider>\r\n  <mat-grid-list cols=\"2\" rowHeight=\"1:1\">\r\n    <mat-grid-tile>\r\n      <p>Section 3</p>\r\n    </mat-grid-tile>\r\n\r\n    <mat-grid-tile>\r\n      <p>Section 3</p>\r\n    </mat-grid-tile>\r\n  </mat-grid-list>"

/***/ }),

/***/ "./src/app/components/homepage/homepage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomepageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_service__ = __webpack_require__("./src/app/components/homepage/weather.service.ts");
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
            styles: [__webpack_require__("./src/app/components/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__weather_service__["b" /* WeatherService */], __WEBPACK_IMPORTED_MODULE_1__weather_service__["a" /* HomeNewsService */]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/components/homepage/weather.service.ts":
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

/***/ "./src/app/components/live-score/live-score.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\r\n  live-score works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/components/live-score/live-score.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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

/***/ "./src/app/components/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"toolbar-wrapper\">\r\n        <mat-toolbar class=\"header-toolbar\">\r\n          <span class=\"example-fill-remaining-space\"></span>\r\n          <span>\r\n            <button type=\"button\" mat-button routerLink=\"add-info\">\r\n                <mat-icon>info</mat-icon>\r\n            </button>\r\n          </span>\r\n        </mat-toolbar>\r\n      </div>\r\n      <div id=\"mainWrapper\">\r\n          <router-outlet></router-outlet>\r\n        </div>\r\n      <div id=\"nav-wrapper\">\r\n        <mat-toolbar class=\"app-toolbar\">\r\n          <button type=\"button\" mat-button routerLink=\"\">\r\n            <mat-icon>home</mat-icon>\r\n          </button>\r\n          <button type=\"button\" mat-button routerLink=\"live-score\">\r\n            <mat-icon>assessment</mat-icon>\r\n          </button>\r\n          <button type=\"button\" mat-button routerLink=\"geo-location\">\r\n            <mat-icon>place</mat-icon>\r\n          </button>\r\n          <button type=\"button\" mat-button routerLink=\"events\">\r\n            <mat-icon>event</mat-icon>\r\n          </button>\r\n          <button type=\"button\" mat-button routerLink=\"profiles\">\r\n            <mat-icon>account_box</mat-icon>\r\n          </button>\r\n        </mat-toolbar>\r\n      </div>"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/***/ (function(module, exports) {

module.exports = ".mat-button {\n  min-width: 1%; }\n\n.app-toolbar {\n  background-color: #26A65B;\n  width: 100%;\n  text-align: center;\n  position: fixed;\n  bottom: 0;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  z-index: 1; }\n\n.header-toolbar {\n  background-color: #26A65B;\n  width: 100%; }\n\n.example-fill-remaining-space {\n  /* This fills the remaining space, by using flexbox. \r\n       Every toolbar row uses a flexbox row layout. */\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n"

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
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
            template: __webpack_require__("./src/app/components/navigation/navigation.component.html"),
            styles: [__webpack_require__("./src/app/components/navigation/navigation.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  team-profiles works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/team-profiles/team-profiles.component.scss":
/***/ (function(module, exports) {

module.exports = ""

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