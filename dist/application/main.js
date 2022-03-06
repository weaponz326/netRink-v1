(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["main"],{

/***/ 2199:
/*!************************************************************!*\
  !*** ./projects/application/src/app/app-routing.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);



const routes = [
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_application_src_app_pages_landing-page_landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/landing-page/landing-page.module */ 8535)).then(m => m.LandingPageModule)
    },
    {
        path: "auth",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_auth-page_auth-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! projects/personal/src/app/pages/auth-page/auth-page.module */ 8674)).then(m => m.AuthPageModule)
    },
    {
        path: "terms",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_application_src_app_pages_legalities-page_legalities-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/legalities-page/legalities-page.module */ 6196)).then(m => m.LegalitiesPageModule)
    },
    {
        path: "help",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_application_src_app_pages_help-page_help-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/help-page/help-page.module */ 3868)).then(m => m.HelpPageModule)
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 9047:
/*!*******************************************************!*\
  !*** ./projects/application/src/app/app.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AppComponent {
    constructor() {
        this.title = 'application';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8105:
/*!****************************************************!*\
  !*** ./projects/application/src/app/app.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 4462);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7355);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 3549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/compat */ 7678);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8033);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 4338);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 2199);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 9047);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ 224);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);




// import { HashLocationStrategy, LocationStrategy } from '@angular/common';








class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestoreModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_8__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_9__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_10__.AngularFirestoreModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 224:
/*!**************************************************************!*\
  !*** ./projects/application/src/environments/environment.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    baseUrl: "https://netrink-test-v1.web.app/",
    personalUrl: "https://netrink-test-personal-v1.web.app/",
    restaurantUrl: "https://netrink-test-restaurant-v1.web.app/",
    schoolUrl: "https://netrink-test-school-v1.web.app/",
    enterpriseUrl: "https://netrink-test-enterprise-v1.web.app/",
    associationUrl: "https://netrink-test-association-v1.web.app/",
    hospitalUrl: "https://netrink-test-hospital-v1.web.app/",
    hotelUrl: "https://netrink-test-hotel-v1.web.app/",
    shopUrl: "https://netrink-test-shop-v1.web.app/",
    productionUrl: "https://netrink-test-production-v1.web.app/",
    firebase: {
        apiKey: "AIzaSyC-pUZi6j5AecjEKiBaQL1nTZrKWB_J9w0",
        authDomain: "netrink-test-v1.firebaseapp.com",
        projectId: "netrink-test-v1",
        storageBucket: "netrink-test-v1.appspot.com",
        messagingSenderId: "140608103001",
        appId: "1:140608103001:web:43c476f0813eeb1f78c748"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 1412:
/*!******************************************!*\
  !*** ./projects/application/src/main.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8105);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 224);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    if (window) {
        window.console.log = function () { };
    }
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6972:
/*!****************************************************************************!*\
  !*** ./projects/application/$_lazy_route_resources/ lazy namespace object ***!
  \****************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 6972;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1412)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map