(self["webpackChunkang_fire"] = self["webpackChunkang_fire"] || []).push([["main"],{

/***/ 63262:
/*!*********************************************************!*\
  !*** ./projects/personal/src/app/app-routing.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth/auth.guard */ 78421);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);




const routes = [
    {
        path: "",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_personal_src_app_pages_guest-landing-page_guest-landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/guest-landing-page/guest-landing-page.module */ 63058)).then(m => m.GuestLandingPageModule)
    },
    {
        path: "guest",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_personal_src_app_pages_guest-landing-page_guest-landing-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/guest-landing-page/guest-landing-page.module */ 63058)).then(m => m.GuestLandingPageModule)
    },
    {
        path: "auth",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_auth-page_auth-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/auth-page/auth-page.module */ 48674)).then(m => m.AuthPageModule)
    },
    {
        path: "user-settings",
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_personal_src_app_pages_user-settings-page_user-settings-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/user-settings-page/user-settings-page.module */ 35437)).then(m => m.UserSettingsPageModule)
    },
    {
        path: "home",
        canActivate: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        canActivateChild: [_guards_auth_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        children: [
            {
                path: "",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("projects_personal_src_app_pages_home-page_home-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home-page/home-page.module */ 93857)).then(m => m.HomePageModule)
            },
            {
                path: "portal",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_portal-page_portal-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/portal-page/portal-page.module */ 65322)).then(m => m.PortalPageModule)
            },
            {
                path: "settings",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_settings-page_settings-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/settings-page/settings-page.module */ 93359)).then(m => m.SettingsPageModule)
            },
            {
                path: "calendar",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_calendar-page_calendar-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/calendar-page/calendar-page.module */ 92423)).then(m => m.CalendarPageModule)
            },
            {
                path: "budget",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_budget-page_budget-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/budget-page/budget-page.module */ 56302)).then(m => m.BudgetPageModule)
            },
            {
                path: "notes",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_notes-page_notes-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/notes-page/notes-page.module */ 14488)).then(m => m.NotesPageModule)
            },
            {
                path: "accounts",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_accounts-page_accounts-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/accounts-page/accounts-page.module */ 5434)).then(m => m.AccountsPageModule)
            },
            {
                path: "tasks",
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-projects_application_src_app_components_main-navbar_main-navbar_module_ts"), __webpack_require__.e("default-node_modules_firebase_firestore_dist_index_esm_js-node_modules_ng2-charts___ivy_ngcc_-0cfb1a"), __webpack_require__.e("default-projects_personal_src_app_services_pdf-print_pdf-print_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("projects_personal_src_app_pages_modules_tasks-page_tasks-page_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/modules/tasks-page/tasks-page.module */ 98352)).then(m => m.TasksPageModule)
            },
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 89829:
/*!****************************************************!*\
  !*** ./projects/personal/src/app/app.component.ts ***!
  \****************************************************/
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
        this.title = 'personal';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 54093:
/*!*************************************************!*\
  !*** ./projects/personal/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 94462);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7355);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/compat */ 27678);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/compat/auth */ 98033);
/* harmony import */ var _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/compat/firestore */ 94338);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-google-places-autocomplete */ 37544);
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-routing.module */ 63262);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ 89829);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ 4197);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);





// import { HashLocationStrategy, LocationStrategy } from '@angular/common';









class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule.initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.firebase),
            _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
            _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClientModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_10__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_11__.AngularFireAuthModule,
        _angular_fire_compat_firestore__WEBPACK_IMPORTED_MODULE_12__.AngularFirestoreModule,
        ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_0__.GooglePlaceModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule] }); })();


/***/ }),

/***/ 78421:
/*!*************************************************************!*\
  !*** ./projects/personal/src/app/guards/auth/auth.guard.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 869);


class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(route) {
        if (!!localStorage.getItem('personal_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
    canActivateChild(childRoute) {
        if (!!localStorage.getItem('personal_id')) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
AuthGuard.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 4197:
/*!***********************************************************!*\
  !*** ./projects/personal/src/environments/environment.ts ***!
  \***********************************************************/
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
        appId: "1:140608103001:web:ab3a30ff3ab42a3e78c748"
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

/***/ 13181:
/*!***************************************!*\
  !*** ./projects/personal/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 94462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 54093);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4197);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
    if (window) {
        window.console.log = function () { };
    }
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 3160:
/*!*************************************************************************!*\
  !*** ./projects/personal/$_lazy_route_resources/ lazy namespace object ***!
  \*************************************************************************/
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
webpackEmptyAsyncContext.id = 3160;
module.exports = webpackEmptyAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(13181)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map